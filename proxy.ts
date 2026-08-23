import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASSWORD;

  // إن لم تُضبط بيانات الدخول في متغيرات البيئة، امنعي الوصول تمامًا
  // بدل تركه مفتوحًا بالخطأ.
  if (!user || !pass) {
    return new NextResponse("لوحة الإحصاءات غير مُفعّلة", { status: 503 });
  }

  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Basic ")) {
    const decoded = atob(authHeader.slice(6));
    const separatorIndex = decoded.indexOf(":");
    const providedUser = decoded.slice(0, separatorIndex);
    const providedPass = decoded.slice(separatorIndex + 1);

    if (providedUser === user && providedPass === pass) {
      return NextResponse.next();
    }
  }

  return new NextResponse("مصادقة مطلوبة", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="admin"' },
  });
}

export const config = {
  matcher: "/admin/:path*",
};
