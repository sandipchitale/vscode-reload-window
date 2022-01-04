import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const reloadWindow = vscode.window.createStatusBarItem('vscode-reload-window', vscode.StatusBarAlignment.Left, 32760);
    reloadWindow.text = '$(extensions-refresh)';
    reloadWindow.tooltip = 'Reload window';
    reloadWindow.command = 'workbench.action.reloadWindow';
    reloadWindow.show();
}

export function deactivate() {}
