const _0x175ed0 = _0x2ebb;
(function (_0xf12bef, _0x1974bb) {
    const _0x8e32dc = _0x2ebb,
        _0x29ea11 = _0xf12bef();
    while (!![]) {
        try {
            const _0x2f5639 = -parseInt(_0x8e32dc(0x19f)) / 0x1 + -parseInt(_0x8e32dc(0x1c7)) / 0x2 + -parseInt(_0x8e32dc(0x196)) / 0x3 + parseInt(_0x8e32dc(0x1dd)) / 0x4 * (parseInt(_0x8e32dc(0x1e5)) / 0x5) + -parseInt(_0x8e32dc(0x1b1)) / 0x6 + -parseInt(_0x8e32dc(0x182)) / 0x7 + parseInt(_0x8e32dc(0x1a8)) / 0x8 * (parseInt(_0x8e32dc(0x183)) / 0x9);
            if (_0x2f5639 === _0x1974bb) break;
            else _0x29ea11['push'](_0x29ea11['shift']());
        } catch (_0x432f2d) {
            _0x29ea11['push'](_0x29ea11['shift']());
        }
    }
}(_0x16fe, 0xbdea1));
const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
    ReconnectMode
} = require(_0x175ed0(0x18d)), simple = require(_0x175ed0(0x1bf)), WAConnection = simple[_0x175ed0(0x17b)](_WAConnection), qrcode = require(_0x175ed0(0x1ab)), moment = require(_0x175ed0(0x1ca)), fs = require('fs'), figlet = require(_0x175ed0(0x1a6)), time = moment()['tz'](_0x175ed0(0x179))['format']('HH:mm:ss'), fetch = require('node-fetch'), {
    color,
    bgcolor
} = require('./lib/color'), {
    exec
} = require(_0x175ed0(0x1a3)), {
    wait,
    simih,
    getBuffer,
    h2k,
    generateMessageID,
    getGroupAdmins,
    getRandom,
    banner,
    start,
    info,
    success,
    close
} = require('./lib/functions'), settings = JSON[_0x175ed0(0x1d8)](fs[_0x175ed0(0x1bd)](_0x175ed0(0x1cf))), sleep = async _0x4fa256 => {
    return new Promise(_0x15860e => setTimeout(_0x15860e, _0x4fa256));
};
nocache(_0x175ed0(0x1b6), _0x5ed545 => console[_0x175ed0(0x1f0)](color(_0x175ed0(0x1c1)), color(_0x5ed545 + _0x175ed0(0x1cb), _0x175ed0(0x1cd))));
async function starts() {
    const _0x54816b = _0x175ed0,
        _0x531d03 = new WAConnection();
    _0x531d03[_0x54816b(0x1c9)] = ReconnectMode[_0x54816b(0x1eb)], _0x531d03['version'] = [0x2, 0x847, 0x6], _0x531d03[_0x54816b(0x1c5)][_0x54816b(0x1e6)] = _0x54816b(0x184), _0x531d03[_0x54816b(0x17a)] = [_0x54816b(0x1e1), 'Desktop', _0x54816b(0x181)], _0x531d03['on']('qr', _0x345f6f => {
        const _0x79357d = _0x54816b;
        qrcode['generate'](_0x345f6f, {
            'small': !![]
        }), console['log'](color(_0x79357d(0x1c1)), color('Scan this QR code', _0x79357d(0x1cd)));
    }), fs['existsSync'](_0x54816b(0x1b4)) && _0x531d03['loadAuthInfo'](_0x54816b(0x1b4)), _0x531d03['on'](_0x54816b(0x1bb), () => {
        const _0x40f337 = _0x54816b;
        console['log'](color(_0x40f337(0x1c1)), color(_0x40f337(0x18f), 'cyan'));
    }), await _0x531d03[_0x54816b(0x1c2)]({
        'timeoutMs': 0x1e * 0x3e8
    }), fs[_0x54816b(0x1db)](_0x54816b(0x1b4), JSON['stringify'](_0x531d03[_0x54816b(0x1da)](), null, '\x09')), _0x531d03[_0x54816b(0x1ba)](settings[_0x54816b(0x1d9)] + _0x54816b(0x1e8), _0x54816b(0x1ed) + settings[_0x54816b(0x1c8)] + _0x54816b(0x1ea) + JSON[_0x54816b(0x1b2)](_0x531d03[_0x54816b(0x19e)], null, 0x2) + '```\x0a────────────────────\x0a*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*', MessageType[_0x54816b(0x1e7)], {
        'contextInfo': {
            'forwardingScore': 0x1fc,
            'isForwarded': !![],
            'externalAdReply': {
                'title': _0x54816b(0x19a),
                'body': '',
                'previewType': _0x54816b(0x1ee),
                'thumbnail': fs[_0x54816b(0x1bd)]('./denz.jpg'),
                'sourceUrl': _0x54816b(0x18e)
            }
        }
    }), console[_0x54816b(0x1f0)](color(_0x54816b(0x1af), _0x54816b(0x1ce)), color('Sending bot info to bot owner', 'cyan')), fetch(_0x54816b(0x1e4))['then'](_0x896def => _0x896def[_0x54816b(0x1e7)]())['then'](_0x38d750 => {
        const _0x14ee6a = _0x54816b;
        _0x531d03['sendMessage'](_0x14ee6a(0x1c4), '─────「 *BANG-NI-IPNYA* 」─────\x0a\x0a```' + _0x38d750 + '```\x0a────────────────────', MessageType['text'], {
            'contextInfo': {
                'forwardingScore': 0x1fc,
                'isForwarded': !![],
                'externalAdReply': {
                    'title': "YuzzuKamiyaka",
                    'body': '',
                    'previewType': _0x14ee6a(0x1ee),
                    'thumbnail': fs[_0x14ee6a(0x1bd)](_0x14ee6a(0x1d6)),
                    'sourceUrl': "https://youtube.com/c/YuzzuKamiyaka"
                }
            }
        }), console['log'](color(_0x14ee6a(0x1af), _0x14ee6a(0x1ce)), color(_0x14ee6a(0x17c), _0x14ee6a(0x1cd)));
    }), _0x531d03['on'](_0x54816b(0x1a0), () => {
        const _0x42024d = _0x54816b;
        console['log'](color('|TRM|'), color(_0x42024d(0x1aa), _0x42024d(0x1cd)));
    }), _0x531d03['on']('open', () => {
        const _0x1eb315 = _0x54816b;
        console[_0x1eb315(0x1f0)](color('|TRM|'), color('Connected', 'cyan'));
    }), _0x531d03['on'](_0x54816b(0x1a1), () => {
        const _0x4813bc = _0x54816b;
        console[_0x4813bc(0x1f0)](color(_0x4813bc(0x1c1)), color(_0x4813bc(0x1f1), _0x4813bc(0x1cd)));
    }), _0x531d03['on'](_0x54816b(0x1de), async () => {
        const _0x56c703 = _0x54816b;
        console[_0x56c703(0x1f0)](color(_0x56c703(0x1c1)), color(_0x56c703(0x1d4), _0x56c703(0x1cd)));
    }), !settings['autoplaymusic'] && exec('cd /sdcard/download && play *mp3'), _0x531d03['on']('chat-update', async _0x312927 => {
        const _0x3921bf = _0x54816b;
        require(_0x3921bf(0x1b6))(_0x531d03, _0x312927), ownerNumber = [_0x3921bf(0x1c4), settings[_0x3921bf(0x1d9)] + _0x3921bf(0x1e8)], dtod = _0x3921bf(0x1c4), otod = settings[_0x3921bf(0x1d9)] + _0x3921bf(0x1e8);
    }), _0x531d03['on'](_0x54816b(0x1c3), async _0x2732ba => {
        const _0x435817 = _0x54816b,
            _0x31cc3e = await _0x531d03[_0x435817(0x1b5)](_0x2732ba['jid']),
            _0x1db359 = {
                'key': {
                    'fromMe': ![],
                    'participant': '0@s.whatsapp.net',
                    ..._0x2732ba[_0x435817(0x1ec)] ? {
                        'remoteJid': '6283136505591-1604595598@g.us'
                    } : {}
                },
                'message': {
                    'contactMessage': {
                        'displayName': '' + _0x31cc3e['subject'],
                        'vcard': 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:2;Denz;;;\x0aFN:Denz\x0aitem1.TEL;waid=6281337541779:6281337541779\x0aitem1.X-ABLabel:Mobile\x0aEND:VCARD'
                    }
                }
            };
        if (_0x2732ba[_0x435817(0x1a7)] == _0x435817(0x189)) teks = _0x435817(0x1ad), _0x531d03[_0x435817(0x1ba)](_0x31cc3e['id'], teks, MessageType[_0x435817(0x1e7)], {
            'quoted': _0x1db359
        }), console[_0x435817(0x1f0)](color(_0x435817(0x1c1)), color(_0x435817(0x17d) + _0x31cc3e[_0x435817(0x1e9)], _0x435817(0x1cd)));
        else {
            if (_0x2732ba['announce'] == _0x435817(0x1d5)) teks = _0x435817(0x1bc), _0x531d03[_0x435817(0x1ba)](_0x31cc3e['id'], teks, MessageType[_0x435817(0x1e7)], {
                'quoted': _0x1db359
            }), console[_0x435817(0x1f0)](color(_0x435817(0x1c1)), color(_0x435817(0x19d) + _0x31cc3e[_0x435817(0x1e9)], _0x435817(0x1cd)));
            else {
                if (!_0x2732ba[_0x435817(0x1e0)] == '') tag = _0x2732ba[_0x435817(0x1ae)][_0x435817(0x17e)]('@')[0x0] + _0x435817(0x1e8), teks = '- [ Group Description Change ] -\x0a\x0aYou are blocked because of a bot phone, please contact the bot developer to open the block Group description has been changed by Admin @' + _0x2732ba[_0x435817(0x1ae)][_0x435817(0x17e)]('@')[0x0] + _0x435817(0x1d3) + _0x2732ba[_0x435817(0x1e0)], _0x531d03[_0x435817(0x1ba)](_0x31cc3e['id'], teks, MessageType[_0x435817(0x1e7)], {
                    'contextInfo': {
                        'mentionedJid': [tag]
                    },
                    'quoted': _0x1db359
                }), console['log'](color(_0x435817(0x1c1)), color(_0x435817(0x197) + _0x31cc3e[_0x435817(0x1e9)], _0x435817(0x1cd)));
                else {
                    if (_0x2732ba[_0x435817(0x1b8)] == _0x435817(0x189)) teks = _0x435817(0x1d1), _0x531d03[_0x435817(0x1ba)](_0x31cc3e['id'], teks, MessageType['text'], {
                        'quoted': _0x1db359
                    }), console['log'](color(_0x435817(0x1c1)), color(_0x435817(0x192) + _0x31cc3e[_0x435817(0x1e9)], _0x435817(0x1cd)));
                    else _0x2732ba[_0x435817(0x1b8)] == 'true' && (teks = _0x435817(0x1df), _0x531d03[_0x435817(0x1ba)](_0x31cc3e['id'], teks, MessageType[_0x435817(0x1e7)], {
                        'quoted': _0x1db359
                    }), console[_0x435817(0x1f0)](color(_0x435817(0x1c1)), color('Group Setting Change In ' + _0x31cc3e[_0x435817(0x1e9)], _0x435817(0x1cd))));
                }
            }
        }
    }), _0x531d03['on'](_0x54816b(0x194), async _0xd2a392 => {
        const _0x23609a = _0x54816b,
            _0x1b6b60 = _0xd2a392[0x2][0x0][0x1][_0x23609a(0x1d7)];
        var _0x32e893 = _0x23609a(0x17f) + _0x23609a(0x1b3) + _0x23609a(0x1dc) + ('' + NamaOwner) + '\x0a' + (_0x23609a(0x193) + NamaBot + '\x0a') + _0x23609a(0x1e2) + ('' + NomorOwner) + ':+' + ('' + NomorOwner) + '\x0a' + 'END:VCARD';
        _0x531d03['sendMessage'](_0x1b6b60, '```[ ! ] CALL DETECTED [ ! ]```\x0a\x0a```You are blocked because of a bot phone, please contact the bot developer to open the block```', MessageType[_0x23609a(0x1e7)]), _0x531d03['sendMessage'](_0x1b6b60, {
            'displayname': '' + NamaOwner,
            'vcard': _0x32e893
        }, MessageType[_0x23609a(0x19b)], {
            'contextInfo': {
                'externalAdReply': {
                    'title': _0x23609a(0x1a9) + NamaBot,
                    'body': '',
                    'previewType': 'PHOTO',
                    'thumbnail': fs[_0x23609a(0x1bd)](_0x23609a(0x1d6)),
                    'sourceUrl': _0x23609a(0x18e)
                }
            }
        }), await sleep(0x1388), await _0x531d03['blockUser'](_0x1b6b60, _0x23609a(0x187));
    }), _0x531d03['on'](_0x54816b(0x198), async _0x3cc8a4 => {
        const _0x3827e7 = _0x54816b;
        if (_0x3cc8a4[_0x3827e7(0x1a4)]['remoteJid'] == _0x3827e7(0x1d0)) return;
        if (!_0x3cc8a4[_0x3827e7(0x1a4)][_0x3827e7(0x180)]) {
            _0x3cc8a4[_0x3827e7(0x186)] = Object[_0x3827e7(0x1c6)](_0x3cc8a4[_0x3827e7(0x186)])[0x0] === _0x3827e7(0x195) ? _0x3cc8a4[_0x3827e7(0x186)][_0x3827e7(0x195)]['message'] : _0x3cc8a4[_0x3827e7(0x186)];
            const _0x2cc09e = moment['tz'](_0x3827e7(0x179))[_0x3827e7(0x19c)](_0x3827e7(0x1be));
            let _0x359e84 = new Date(),
                _0x5cf610 = _0x531d03[_0x3827e7(0x1d2)][_0x3827e7(0x1ef)](_0x3cc8a4[_0x3827e7(0x1a4)][_0x3827e7(0x1e3)]),
                _0x3014a1 = _0x5cf610[_0x3827e7(0x1ac)]['dict'][_0x3cc8a4['key']['id'] + '|' + (_0x3cc8a4['key'][_0x3827e7(0x180)] ? 0x1 : 0x0)],
                _0x871a26 = _0x531d03[_0x3827e7(0x191)](_0x3014a1, ![]),
                _0x42034e = Object[_0x3827e7(0x1c6)](_0x871a26)[0x0],
                _0x1fd72f = 'id',
                _0x5dc09a = new Date(0x0)[_0x3827e7(0x1b7)]() - new Date('1 Januari 2021')['getTime'](),
                _0x8f7803 = ['Pahing', _0x3827e7(0x1a5), _0x3827e7(0x185), 'Kliwon', _0x3827e7(0x1b0)][Math[_0x3827e7(0x18c)]((_0x359e84 * 0x1 + _0x5dc09a) / 0x50ae4c0) % 0x5],
                _0x3742f1 = _0x359e84['toLocaleDateString'](_0x1fd72f, {
                    'weekday': _0x3827e7(0x199)
                }),
                _0x59c854 = _0x359e84['toLocaleDateString'](_0x1fd72f, {
                    'day': 'numeric',
                    'month': 'long',
                    'year': _0x3827e7(0x190)
                });
            _0x531d03[_0x3827e7(0x18a)](_0x3cc8a4['key'][_0x3827e7(0x1e3)], _0x3cc8a4[_0x3827e7(0x186)]), _0x531d03['sendMessage'](_0x3cc8a4[_0x3827e7(0x1a4)][_0x3827e7(0x1e3)], _0x3827e7(0x178) + _0x3cc8a4['participant'][_0x3827e7(0x17e)]('@')[0x0] + _0x3827e7(0x1a2) + _0x42034e + '```\x0a▢ ```Tanggal : ' + _0x2cc09e + _0x3827e7(0x188) + _0x3742f1 + ' ' + _0x8f7803 + ' - ' + _0x59c854 + _0x3827e7(0x1cc), MessageType[_0x3827e7(0x1e7)], {
                'quoted': _0x3cc8a4['message'],
                'contextInfo': {
                    'mentionedJid': [_0x3cc8a4[_0x3827e7(0x1f2)]]
                }
            });
        }
    });
}
function _0x16fe() {
    const _0x2bab7c = ['qxnPys9kywTHCNrH', 'yNjVD3nLCKrLC2nYAxb0Aw9U', 'v0fdB25Uzwn0Aw9U', 'u2vUzgLUzYbPCcbHzgrYzxnZihrVigrLDMvSB3bLCIbIB3q', 'r3jVDxaGt3bLBMvKieLUia', 'C3bSAxq', 'qKvhsu46vKnbuKqk', 'zNjVBu1L', 'mY4W', 'nJKXntqYnMjVENDzvq', 'ntqXoeXhD0P0yW', 'D2fYBG', 'v2fNzq', 'BwvZC2fNzq', 'ywrK', 'ic0G', 'zMfSC2u', 'y29WEu5gB3j3yxjK', 'Dgv4Dfn5BMm', 'zMXVB3i', 'qgfKAxDHANnOAw5Nl2jHAwXLExm', 'Ahr0Chm6lY93ys5Tzs82mJG1ody2mJK1otqYp3rLEhq9qxnZywXHBxvHBgfPA3vT', 'y3jLzgvUDgLHBhmGDxbKyxrLzce', 'BNvTzxjPyW', 'z2vUzxjHDgvgB3j3yxjKtwvZC2fNzunVBNrLBNq', 'r3jVDxaGu2v0DgLUzYbdAgfUz2uGsw4G', 't1jhoKrLDMvSB3bLCIa', 'q0i6ywn0Aw9UlcXJywXS', 'zxbOzw1LCMfStwvZC2fNzq', 'mZuZnteXovD6r09iDa', 'r3jVDxaGrgvZy3jPChrPB24Gq2HHBMDLieLUia', 'BwvZC2fNzs1KzwXLDgu', 'Bg9UzW', 'rgv2zwXVCgvYiejPDgnOiejVB3q', 'y29UDgfJDa', 'zM9YBwf0', 'r3jVDxaGq2XVC2vKieLUia', 'DxnLCG', 'nJq0nJa0DevzC0n4', 'y29UBMvJDgLUzW', 'D3mTy2XVC2u', 'ygbGcUkwOIbGygbuAxbLidOG', 'y2HPBgrFChjVy2vZCW', 'A2v5', 'ug9U', 'zMLNBgv0', 'yw5UB3vUy2u', 'ndK5nZzdqLjAq1y', 'rgv2zwXVCgvYia', 'q29UBMvJDgLUzY4UlG', 'CxjJB2rLlxrLCM1PBMfS', 'BwvZC2fNzxm', 'lsbBieDYB3vWie9Wzw5LzcbDic0kcL9hCM91Ccb0zwXHAcbKAwj1A2eGB2XLAcbHzg1PBL8kx1nLA2fYyw5NihnLBxvHig1LBwjLCIbIAxnHig1LBMDPCMLTihbLC2fUxW', 'zgvZy093BMvY', 'FfDstNW', 'tgvNAq', 'mtm0odaWmMXrrKDgyG', 'C3rYAw5NAwz5', 'vKvsu0LptJOZlJak', 'lI9ruM55ys5QC29U', 'z3jVDxbnzxrHzgf0yq', 'lI9Kzw56lMPZ', 'z2v0vgLTzq', 'CMvZDhjPy3q', 'y2fJAgu', 'C2vUze1LC3nHz2u', 'y3jLzgvUDgLHBhmTDxbKyxrLza', 'lsbBieDYB3vWienSB3nLzcbDic0kcL9hCM91Ccb0zwXHAcbKAxr1DhvWig9SzwGGywrTAw5FcL9tzwTHCMfUzYbOyw55ysbHzg1PBIb5yw5NigrHCgf0ig1LBMDPCMLTihbLC2fUxW', 'CMvHzezPBgvtEw5J', 'seG6Bw06C3m', 'lI9SAwiVC2LTCgXLlMPZ', 'zgvMyxvSDa', 'FfrstxW', 'y29UBMvJDa', 'z3jVDxaTDxbKyxrL', 'nJi4ntG2nJi5ntK0mKbZlNDOyxrZyxbWlM5LDa', 'Bg9Nz2vY', 'A2v5CW', 'ndy3nJK4sNbQAwzQ', 'tMfTyujVDa', 'yxv0B1jLy29UBMvJDa', 'Bw9Tzw50lxrPBwv6B25L', 'ifvWzgf0zwqH', 'ygbG', 'y3LHBG', 'EwvSBg93', 'lI9Zzxr0Aw5NCY5QC29U', 'C3rHDhvZqgjYB2fKy2fZDa', 'lsbBieDYB3vWifnLDhrPBMCGq2HHBMDLif0GlqOkrwrPDcbhCM91CcbPBMzVihrLBgfOigrPyNvRysb1BNr1AYbTzw1Izxiku2vRyxjHBMCGC2vTDweGBwvTyMvYigrHCgf0ig1LBMDLzgL0igLUzM8Gr3jVDxaGsw5P', 'y2HHDhm', 'cUkaOIbezxnRCMLWC2KGqMfYDsa6ia', 'rgLZy29UBMvJDgvKlG', 'Dhj1zq', 'lI9Kzw56lMPWzW', 'zNjVBq', 'CgfYC2u', 'tM9TB3jpD25LCG', 'yMfZzty0rw5JB2rLzef1DgHjBMzV', 'D3jPDgvgAwXLu3LUyW', 'rK46', 'nhfKAgPtyG', 'y2XVC2u', 'lsbBieDYB3vWifnLDhrPBMCGq2HHBMDLif0GlqOkrwrPDcbhCM91CcbPBMzVihrLBgfOigrPDhv0DxaGDw50DwSGBwvTyMvYcLnLA2fYyw5NigHHBNLHigfKBwLUigDYB3vWihLHBMCGzgfWyxqGBwvUz2vKAxqGAw5MBYbhCM91CcbjBMK', 'zgvZyW', 'rgnVzguGrgvUCge', 'vevmo3r5Cgu9q0vmtdT0ExbLpvzpsunfo3DHAwq9', 'CMvTB3rLsMLK', 'Ahr0CdOVl2LWlwfWAs5JB20VBgLUzq', 'mtqZmZaZmhHdsw9OBG', 'Bgv2zwW', 'Dgv4Da', 'qhmUD2HHDhnHChaUBMv0', 'C3vIAMvJDa', 'lcbcB3qGvgvSywGGqMvYAgfZAwWGvgvYC2fTyNvUzYbqywrHie5VBw9YieLUAsOk4Psa4Psa4Psa4Psa4Psa4Psa4Psa4Psa4Psa4Psa4Psa4Psa4Psa4Psa4Psa4Psa4Psa4Psa4Psa4PsacMbGya', 'B25dB25Uzwn0Aw9Utg9ZDa', 'AMLK', 'kKHHAsbpD25LCIa', 'ueHpve8', 'z2v0', 'Bg9N', 'q29UBMvJDgLVBIbSB3n0lcb0CNLPBMCGDg8GCMvJB25Uzwn0lG', 'CgfYDgLJAxbHBNq', '4PA3ygbGqw50AsbezwXLDgvGygakcUkwOIbGygboyw1HidOGqa'];
    _0x16fe = function () {
        return _0x2bab7c;
    };
    return _0x16fe();
}
console[_0x175ed0(0x1f0)](color(figlet[_0x175ed0(0x18b)]('' + settings['NamaBot'], {
    'font': 'Standard',
    'horizontalLayout': _0x175ed0(0x1c0),
    'vertivalLayout': 'default',
    'width': 0x3e8,
    'whitespaceBreak': !![]
}), 'lightgreen')), console[_0x175ed0(0x1f0)](bgcolor('https://github.com/YuzzuKamiyaka/bitch-bot', 'red'));

function _0x2ebb(_0x46c11b, _0x958a6b) {
    const _0x16fe1b = _0x16fe();
    return _0x2ebb = function (_0x2ebb68, _0x34c835) {
        _0x2ebb68 = _0x2ebb68 - 0x178;
        let _0x12d5f0 = _0x16fe1b[_0x2ebb68];
        if (_0x2ebb['JYAUNF'] === undefined) {
            var _0x594c5c = function (_0x4fa256) {
                const _0x15860e = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x5ed545 = '',
                    _0x531d03 = '';
                for (let _0x345f6f = 0x0, _0x896def, _0x38d750, _0x312927 = 0x0; _0x38d750 = _0x4fa256['charAt'](_0x312927++); ~_0x38d750 && (_0x896def = _0x345f6f % 0x4 ? _0x896def * 0x40 + _0x38d750 : _0x38d750, _0x345f6f++ % 0x4) ? _0x5ed545 += String['fromCharCode'](0xff & _0x896def >> (-0x2 * _0x345f6f & 0x6)) : 0x0) {
                    _0x38d750 = _0x15860e['indexOf'](_0x38d750);
                }
                for (let _0x2732ba = 0x0, _0x31cc3e = _0x5ed545['length']; _0x2732ba < _0x31cc3e; _0x2732ba++) {
                    _0x531d03 += '%' + ('00' + _0x5ed545['charCodeAt'](_0x2732ba)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x531d03);
            };
            _0x2ebb['gjciFF'] = _0x594c5c, _0x46c11b = arguments, _0x2ebb['JYAUNF'] = !![];
        }
        const _0x25034a = _0x16fe1b[0x0],
            _0x212392 = _0x2ebb68 + _0x25034a,
            _0x5a583b = _0x46c11b[_0x212392];
        return !_0x5a583b ? (_0x12d5f0 = _0x2ebb['gjciFF'](_0x12d5f0), _0x46c11b[_0x212392] = _0x12d5f0) : _0x12d5f0 = _0x5a583b, _0x12d5f0;
    }, _0x2ebb(_0x46c11b, _0x958a6b);
}

function nocache(_0x2e3481, _0x228977 = () => {}) {
    fs['watchFile'](require['resolve'](_0x2e3481), async () => {
        await uncache(require['resolve'](_0x2e3481)), _0x228977(_0x2e3481);
    });
}

function uncache(_0x260527 = '.') {
    return new Promise((_0x2dd4fa, _0x20d36f) => {
        const _0x31dd50 = _0x2ebb;
        try {
            delete require[_0x31dd50(0x1b9)][require['resolve'](_0x260527)], _0x2dd4fa();
        } catch (_0x37cb33) {
            _0x20d36f(_0x37cb33);
        }
    });
}
starts();