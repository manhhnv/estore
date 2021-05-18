import { adjust } from 'estore/helpers/adjust';
import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const HelpCenter = React.memo(() => {
    return (
        <ScrollView style={{ paddingHorizontal: 10, backgroundColor: "white", flex: 1 }}>
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: adjust(13),
                    paddingVertical: 20
                }}
            >
                1. GIỚI THIỆU
            </Text>
            <Text style={{ paddingBottom: 15, lineHeight: 22 }}>
                1.1. "Dữ Liệu Cá Nhân" hay "dữ liệu cá nhân" có nghĩa là dữ
                liệu, dù đúng hay không, về một cá nhân mà thông qua đó có thể
                được xác định được danh tính, hoặc từ dữ liệu đó và thông tin
                khác mà một tổ chức có hoặc có khả năng tiếp cận. Các ví dụ
                thường gặp về dữ liệu cá nhân có thể gồm có tên, số chứng minh
                nhân dân và thông tin liên hệ.
            </Text>
            <Text style={{ paddingBottom: 15, lineHeight: 22 }}>
                1.2. Bằng việc sử dụng Các Dịch Vụ, đăng ký một tài khoản với
                chúng tôi hoặc truy cập Nền tảng, bạn xác nhận và đồng ý rằng
                bạn chấp nhận các phương pháp, yêu cầu, và/hoặc chính sách được
                mô tả trong Chính sách bảo mật này, và theo đây bạn đồng ý cho
                phép chúng tôi thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu
                cá nhân của bạn như mô tả trong đây. NẾU BẠN KHÔNG ĐỒNG Ý CHO
                PHÉP XỬ LÝ DỮ LIỆU CÁ NHÂN CỦA BẠN NHƯ MÔ TẢ TRONG CHÍNH SÁCH
                NÀY, VUI LÒNG KHÔNG SỬ DỤNG CÁC DỊCH VỤ CỦA CHÚNG TÔI HAY TRUY
                CẬP NỀN TẢNG HOẶC TRANG WEB CỦA CHÚNG TÔI. Nếu chúng tôi thay
                đổi Chính sách bảo mật của mình, chúng tôi sẽ đăng những thay
                đổi đó hoặc Chính sách bảo mật sửa đổi trên Nền tảng của chúng
                tôi.
            </Text>
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: adjust(13),
                    paddingVertical: 20
                }}
            >
                2. KHI NÀO EBUY SẼ THU THẬP DỮ LIỆU CÁ NHÂN?
            </Text>
            <Text style={{ paddingBottom: 15, lineHeight: 22 }}>
                1. khi bạn đăng ký và/hoặc sử dụng Các Dịch Vụ hoặc Nền tảng của
                chúng tôi, hoặc mở một tài khoản với chúng tôi;
            </Text>
            <Text style={{ paddingBottom: 15, lineHeight: 22 }}>
                2. khi bạn gửi bất kỳ biểu mẫu nào, bao gồm đơn đăng ký hoặc các
                mẫu đơn khác liên quan đến bất kỳ sản phẩm và dịch vụ nào của
                chúng tôi, bằng hình thức trực tuyến hay dưới hình thức khác;
            </Text>
            <Text style={{ paddingBottom: 15, lineHeight: 22 }}>
                3. khi bạn ký kết bất kỳ thỏa thuận nào hoặc cung cấp các tài
                liệu hoặc thông tin khác liên quan đến tương tác giữa bạn với
                chúng tôi, hoặc khi bạn sử dụng các sản phẩm và dịch vụ của
                chúng tôi;
            </Text>
            <Text style={{ paddingBottom: 15, lineHeight: 22 }}>
                4. khi bạn tương tác với chúng tôi, chẳng hạn như thông qua các
                cuộc gọi điện thoại (có thể được ghi âm lại), thư từ, fax, gặp
                gỡ trực tiếp, các nền ứng dụng truyền thông xã hội và email;
            </Text>
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: adjust(13),
                    paddingVertical: 20
                }}
            >
                3. EBUY SẼ THU THẬP NHỮNG DỮ LIỆU GÌ?
            </Text>
            <Text style={{ paddingBottom: 15, lineHeight: 22 }}>
                1. khi bạn đăng ký và/hoặc sử dụng Các Dịch Vụ hoặc Nền tảng của
                chúng tôi, hoặc mở một tài khoản với chúng tôi;
            </Text>
            <Text style={{ paddingBottom: 15, lineHeight: 22 }}>
                2. khi bạn gửi bất kỳ biểu mẫu nào, bao gồm đơn đăng ký hoặc các
                mẫu đơn khác liên quan đến bất kỳ sản phẩm và dịch vụ nào của
                chúng tôi, bằng hình thức trực tuyến hay dưới hình thức khác;
            </Text>
            <Text style={{ paddingBottom: 15, lineHeight: 22 }}>
                3. khi bạn ký kết bất kỳ thỏa thuận nào hoặc cung cấp các tài
                liệu hoặc thông tin khác liên quan đến tương tác giữa bạn với
                chúng tôi, hoặc khi bạn sử dụng các sản phẩm và dịch vụ của
                chúng tôi;
            </Text>
            <Text style={{ paddingBottom: 15, lineHeight: 22 }}>
                4. khi bạn tương tác với chúng tôi, chẳng hạn như thông qua các
                cuộc gọi điện thoại (có thể được ghi âm lại), thư từ, fax, gặp
                gỡ trực tiếp, các nền ứng dụng truyền thông xã hội và email;
            </Text>
        </ScrollView>
    );
});

export { HelpCenter };
