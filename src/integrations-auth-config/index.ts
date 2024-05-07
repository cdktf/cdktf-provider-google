/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationsAuthConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the auth config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#description IntegrationsAuthConfig#description}
  */
  readonly description?: string;
  /**
  * The name of the auth config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#display_name IntegrationsAuthConfig#display_name}
  */
  readonly displayName: string;
  /**
  * User can define the time to receive notification after which the auth config becomes invalid. Support up to 30 days. Support granularity in hours.
  * 
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#expiry_notification_duration IntegrationsAuthConfig#expiry_notification_duration}
  */
  readonly expiryNotificationDuration?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#id IntegrationsAuthConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location in which client needs to be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#location IntegrationsAuthConfig#location}
  */
  readonly location: string;
  /**
  * User provided expiry time to override. For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings.
  * 
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#override_valid_time IntegrationsAuthConfig#override_valid_time}
  */
  readonly overrideValidTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#project IntegrationsAuthConfig#project}
  */
  readonly project?: string;
  /**
  * The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#visibility IntegrationsAuthConfig#visibility}
  */
  readonly visibility?: string;
  /**
  * client_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#client_certificate IntegrationsAuthConfig#client_certificate}
  */
  readonly clientCertificate?: IntegrationsAuthConfigClientCertificate;
  /**
  * decrypted_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#decrypted_credential IntegrationsAuthConfig#decrypted_credential}
  */
  readonly decryptedCredential?: IntegrationsAuthConfigDecryptedCredential;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#timeouts IntegrationsAuthConfig#timeouts}
  */
  readonly timeouts?: IntegrationsAuthConfigTimeouts;
}
export interface IntegrationsAuthConfigClientCertificate {
  /**
  * The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#encrypted_private_key IntegrationsAuthConfig#encrypted_private_key}
  */
  readonly encryptedPrivateKey: string;
  /**
  * 'passphrase' should be left unset if private key is not encrypted.
  * Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#passphrase IntegrationsAuthConfig#passphrase}
  */
  readonly passphrase?: string;
  /**
  * The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#ssl_certificate IntegrationsAuthConfig#ssl_certificate}
  */
  readonly sslCertificate: string;
}

export function integrationsAuthConfigClientCertificateToTerraform(struct?: IntegrationsAuthConfigClientCertificateOutputReference | IntegrationsAuthConfigClientCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_private_key: cdktf.stringToTerraform(struct!.encryptedPrivateKey),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    ssl_certificate: cdktf.stringToTerraform(struct!.sslCertificate),
  }
}


export function integrationsAuthConfigClientCertificateToHclTerraform(struct?: IntegrationsAuthConfigClientCertificateOutputReference | IntegrationsAuthConfigClientCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_private_key: {
      value: cdktf.stringToHclTerraform(struct!.encryptedPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsAuthConfigClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationsAuthConfigClientCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedPrivateKey = this._encryptedPrivateKey;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._sslCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificate = this._sslCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsAuthConfigClientCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptedPrivateKey = undefined;
      this._passphrase = undefined;
      this._sslCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptedPrivateKey = value.encryptedPrivateKey;
      this._passphrase = value.passphrase;
      this._sslCertificate = value.sslCertificate;
    }
  }

  // encrypted_private_key - computed: false, optional: false, required: true
  private _encryptedPrivateKey?: string; 
  public get encryptedPrivateKey() {
    return this.getStringAttribute('encrypted_private_key');
  }
  public set encryptedPrivateKey(value: string) {
    this._encryptedPrivateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedPrivateKeyInput() {
    return this._encryptedPrivateKey;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // ssl_certificate - computed: false, optional: false, required: true
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }
}
export interface IntegrationsAuthConfigDecryptedCredentialAuthToken {
  /**
  * The token for the auth type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#token IntegrationsAuthConfig#token}
  */
  readonly token?: string;
  /**
  * Authentication type, e.g. "Basic", "Bearer", etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#type IntegrationsAuthConfig#type}
  */
  readonly type?: string;
}

export function integrationsAuthConfigDecryptedCredentialAuthTokenToTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference | IntegrationsAuthConfigDecryptedCredentialAuthToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function integrationsAuthConfigDecryptedCredentialAuthTokenToHclTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference | IntegrationsAuthConfigDecryptedCredentialAuthToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationsAuthConfigDecryptedCredentialAuthToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsAuthConfigDecryptedCredentialAuthToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token = value.token;
      this._type = value.type;
    }
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface IntegrationsAuthConfigDecryptedCredentialJwt {
  /**
  * Identifies which algorithm is used to generate the signature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#jwt_header IntegrationsAuthConfig#jwt_header}
  */
  readonly jwtHeader?: string;
  /**
  * Contains a set of claims. The JWT specification defines seven Registered Claim Names which are the standard fields commonly included in tokens. Custom claims are usually also included, depending on the purpose of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#jwt_payload IntegrationsAuthConfig#jwt_payload}
  */
  readonly jwtPayload?: string;
  /**
  * User's pre-shared secret to sign the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#secret IntegrationsAuthConfig#secret}
  */
  readonly secret?: string;
}

export function integrationsAuthConfigDecryptedCredentialJwtToTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialJwtOutputReference | IntegrationsAuthConfigDecryptedCredentialJwt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jwt_header: cdktf.stringToTerraform(struct!.jwtHeader),
    jwt_payload: cdktf.stringToTerraform(struct!.jwtPayload),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function integrationsAuthConfigDecryptedCredentialJwtToHclTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialJwtOutputReference | IntegrationsAuthConfigDecryptedCredentialJwt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jwt_header: {
      value: cdktf.stringToHclTerraform(struct!.jwtHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_payload: {
      value: cdktf.stringToHclTerraform(struct!.jwtPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsAuthConfigDecryptedCredentialJwtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationsAuthConfigDecryptedCredentialJwt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jwtHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtHeader = this._jwtHeader;
    }
    if (this._jwtPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtPayload = this._jwtPayload;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsAuthConfigDecryptedCredentialJwt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jwtHeader = undefined;
      this._jwtPayload = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jwtHeader = value.jwtHeader;
      this._jwtPayload = value.jwtPayload;
      this._secret = value.secret;
    }
  }

  // jwt - computed: true, optional: false, required: false
  public get jwt() {
    return this.getStringAttribute('jwt');
  }

  // jwt_header - computed: false, optional: true, required: false
  private _jwtHeader?: string; 
  public get jwtHeader() {
    return this.getStringAttribute('jwt_header');
  }
  public set jwtHeader(value: string) {
    this._jwtHeader = value;
  }
  public resetJwtHeader() {
    this._jwtHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtHeaderInput() {
    return this._jwtHeader;
  }

  // jwt_payload - computed: false, optional: true, required: false
  private _jwtPayload?: string; 
  public get jwtPayload() {
    return this.getStringAttribute('jwt_payload');
  }
  public set jwtPayload(value: string) {
    this._jwtPayload = value;
  }
  public resetJwtPayload() {
    this._jwtPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtPayloadInput() {
    return this._jwtPayload;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode {
  /**
  * The auth url endpoint to send the auth code request to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#auth_endpoint IntegrationsAuthConfig#auth_endpoint}
  */
  readonly authEndpoint?: string;
  /**
  * The client's id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#client_id IntegrationsAuthConfig#client_id}
  */
  readonly clientId?: string;
  /**
  * The client's secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#client_secret IntegrationsAuthConfig#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * A space-delimited list of requested scope permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#scope IntegrationsAuthConfig#scope}
  */
  readonly scope?: string;
  /**
  * The token url endpoint to send the token request to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#token_endpoint IntegrationsAuthConfig#token_endpoint}
  */
  readonly tokenEndpoint?: string;
}

export function integrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeToTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference | IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_endpoint: cdktf.stringToTerraform(struct!.authEndpoint),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    scope: cdktf.stringToTerraform(struct!.scope),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function integrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeToHclTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference | IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEndpoint = this._authEndpoint;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEndpoint = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._scope = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEndpoint = value.authEndpoint;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._scope = value.scope;
      this._tokenEndpoint = value.tokenEndpoint;
    }
  }

  // auth_endpoint - computed: false, optional: true, required: false
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  public resetAuthEndpoint() {
    this._authEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue {
  /**
  * String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#string_value IntegrationsAuthConfig#string_value}
  */
  readonly stringValue?: string;
}

export function integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueToTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueToHclTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stringValue = value.stringValue;
    }
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey {
  /**
  * literal_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#literal_value IntegrationsAuthConfig#literal_value}
  */
  readonly literalValue?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue;
}

export function integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyToTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal_value: integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueToTerraform(struct!.literalValue),
  }
}


export function integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyToHclTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal_value: {
      value: integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueToHclTerraform(struct!.literalValue),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literalValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literalValue = this._literalValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._literalValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._literalValue.internalValue = value.literalValue;
    }
  }

  // literal_value - computed: false, optional: true, required: false
  private _literalValue = new IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference(this, "literal_value");
  public get literalValue() {
    return this._literalValue;
  }
  public putLiteralValue(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue) {
    this._literalValue.internalValue = value;
  }
  public resetLiteralValue() {
    this._literalValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalValueInput() {
    return this._literalValue.internalValue;
  }
}
export interface IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue {
  /**
  * String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#string_value IntegrationsAuthConfig#string_value}
  */
  readonly stringValue?: string;
}

export function integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueToTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueToHclTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stringValue = value.stringValue;
    }
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue {
  /**
  * literal_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#literal_value IntegrationsAuthConfig#literal_value}
  */
  readonly literalValue?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue;
}

export function integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueToTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal_value: integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueToTerraform(struct!.literalValue),
  }
}


export function integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueToHclTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal_value: {
      value: integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueToHclTerraform(struct!.literalValue),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literalValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literalValue = this._literalValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._literalValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._literalValue.internalValue = value.literalValue;
    }
  }

  // literal_value - computed: false, optional: true, required: false
  private _literalValue = new IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference(this, "literal_value");
  public get literalValue() {
    return this._literalValue;
  }
  public putLiteralValue(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue) {
    this._literalValue.internalValue = value;
  }
  public resetLiteralValue() {
    this._literalValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalValueInput() {
    return this._literalValue.internalValue;
  }
}
export interface IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries {
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#key IntegrationsAuthConfig#key}
  */
  readonly key?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#value IntegrationsAuthConfig#value}
  */
  readonly value?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue;
}

export function integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesToTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyToTerraform(struct!.key),
    value: integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueToTerraform(struct!.value),
  }
}


export function integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesToHclTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyList",
    },
    value: {
      value: integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key.internalValue = value.key;
      this._value.internalValue = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key = new IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList extends cdktf.ComplexList {
  public internalValue? : IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference {
    return new IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams {
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#entries IntegrationsAuthConfig#entries}
  */
  readonly entries?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries[] | cdktf.IResolvable;
}

export function integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsToTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entries: cdktf.listMapper(integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesToTerraform, true)(struct!.entries),
  }
}


export function integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsToHclTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entries: {
      value: cdktf.listMapperHcl(integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesToHclTerraform, true)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entries.internalValue = value.entries;
    }
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }
}
export interface IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials {
  /**
  * The client's ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#client_id IntegrationsAuthConfig#client_id}
  */
  readonly clientId?: string;
  /**
  * The client's secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#client_secret IntegrationsAuthConfig#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Represent how to pass parameters to fetch access token Possible values: ["REQUEST_TYPE_UNSPECIFIED", "REQUEST_BODY", "QUERY_PARAMETERS", "ENCODED_HEADER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#request_type IntegrationsAuthConfig#request_type}
  */
  readonly requestType?: string;
  /**
  * A space-delimited list of requested scope permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#scope IntegrationsAuthConfig#scope}
  */
  readonly scope?: string;
  /**
  * The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#token_endpoint IntegrationsAuthConfig#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * token_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#token_params IntegrationsAuthConfig#token_params}
  */
  readonly tokenParams?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams;
}

export function integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsToTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    request_type: cdktf.stringToTerraform(struct!.requestType),
    scope: cdktf.stringToTerraform(struct!.scope),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    token_params: integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsToTerraform(struct!.tokenParams),
  }
}


export function integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsToHclTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference | IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_type: {
      value: cdktf.stringToHclTerraform(struct!.requestType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_params: {
      value: integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsToHclTerraform(struct!.tokenParams),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._requestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestType = this._requestType;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._tokenParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenParams = this._tokenParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._requestType = undefined;
      this._scope = undefined;
      this._tokenEndpoint = undefined;
      this._tokenParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._requestType = value.requestType;
      this._scope = value.scope;
      this._tokenEndpoint = value.tokenEndpoint;
      this._tokenParams.internalValue = value.tokenParams;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // request_type - computed: false, optional: true, required: false
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  public resetRequestType() {
    this._requestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // token_params - computed: false, optional: true, required: false
  private _tokenParams = new IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference(this, "token_params");
  public get tokenParams() {
    return this._tokenParams;
  }
  public putTokenParams(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams) {
    this._tokenParams.internalValue = value;
  }
  public resetTokenParams() {
    this._tokenParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenParamsInput() {
    return this._tokenParams.internalValue;
  }
}
export interface IntegrationsAuthConfigDecryptedCredentialOidcToken {
  /**
  * Audience to be used when generating OIDC token. The audience claim identifies the recipients that the JWT is intended for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#audience IntegrationsAuthConfig#audience}
  */
  readonly audience?: string;
  /**
  * The service account email to be used as the identity for the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#service_account_email IntegrationsAuthConfig#service_account_email}
  */
  readonly serviceAccountEmail?: string;
}

export function integrationsAuthConfigDecryptedCredentialOidcTokenToTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference | IntegrationsAuthConfigDecryptedCredentialOidcToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}


export function integrationsAuthConfigDecryptedCredentialOidcTokenToHclTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference | IntegrationsAuthConfigDecryptedCredentialOidcToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationsAuthConfigDecryptedCredentialOidcToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsAuthConfigDecryptedCredentialOidcToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._serviceAccountEmail = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._serviceAccountEmail = value.serviceAccountEmail;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // token_expire_time - computed: true, optional: false, required: false
  public get tokenExpireTime() {
    return this.getStringAttribute('token_expire_time');
  }
}
export interface IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials {
  /**
  * A space-delimited list of requested scope permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#scope IntegrationsAuthConfig#scope}
  */
  readonly scope?: string;
  /**
  * Name of the service account that has the permission to make the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#service_account IntegrationsAuthConfig#service_account}
  */
  readonly serviceAccount?: string;
}

export function integrationsAuthConfigDecryptedCredentialServiceAccountCredentialsToTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference | IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function integrationsAuthConfigDecryptedCredentialServiceAccountCredentialsToHclTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference | IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scope = undefined;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scope = value.scope;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword {
  /**
  * Password to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#password IntegrationsAuthConfig#password}
  */
  readonly password?: string;
  /**
  * Username to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#username IntegrationsAuthConfig#username}
  */
  readonly username?: string;
}

export function integrationsAuthConfigDecryptedCredentialUsernameAndPasswordToTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference | IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function integrationsAuthConfigDecryptedCredentialUsernameAndPasswordToHclTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference | IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface IntegrationsAuthConfigDecryptedCredential {
  /**
  * Credential type associated with auth configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#credential_type IntegrationsAuthConfig#credential_type}
  */
  readonly credentialType: string;
  /**
  * auth_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#auth_token IntegrationsAuthConfig#auth_token}
  */
  readonly authToken?: IntegrationsAuthConfigDecryptedCredentialAuthToken;
  /**
  * jwt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#jwt IntegrationsAuthConfig#jwt}
  */
  readonly jwt?: IntegrationsAuthConfigDecryptedCredentialJwt;
  /**
  * oauth2_authorization_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#oauth2_authorization_code IntegrationsAuthConfig#oauth2_authorization_code}
  */
  readonly oauth2AuthorizationCode?: IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode;
  /**
  * oauth2_client_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#oauth2_client_credentials IntegrationsAuthConfig#oauth2_client_credentials}
  */
  readonly oauth2ClientCredentials?: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials;
  /**
  * oidc_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#oidc_token IntegrationsAuthConfig#oidc_token}
  */
  readonly oidcToken?: IntegrationsAuthConfigDecryptedCredentialOidcToken;
  /**
  * service_account_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#service_account_credentials IntegrationsAuthConfig#service_account_credentials}
  */
  readonly serviceAccountCredentials?: IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials;
  /**
  * username_and_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#username_and_password IntegrationsAuthConfig#username_and_password}
  */
  readonly usernameAndPassword?: IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword;
}

export function integrationsAuthConfigDecryptedCredentialToTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOutputReference | IntegrationsAuthConfigDecryptedCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    auth_token: integrationsAuthConfigDecryptedCredentialAuthTokenToTerraform(struct!.authToken),
    jwt: integrationsAuthConfigDecryptedCredentialJwtToTerraform(struct!.jwt),
    oauth2_authorization_code: integrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeToTerraform(struct!.oauth2AuthorizationCode),
    oauth2_client_credentials: integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsToTerraform(struct!.oauth2ClientCredentials),
    oidc_token: integrationsAuthConfigDecryptedCredentialOidcTokenToTerraform(struct!.oidcToken),
    service_account_credentials: integrationsAuthConfigDecryptedCredentialServiceAccountCredentialsToTerraform(struct!.serviceAccountCredentials),
    username_and_password: integrationsAuthConfigDecryptedCredentialUsernameAndPasswordToTerraform(struct!.usernameAndPassword),
  }
}


export function integrationsAuthConfigDecryptedCredentialToHclTerraform(struct?: IntegrationsAuthConfigDecryptedCredentialOutputReference | IntegrationsAuthConfigDecryptedCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_token: {
      value: integrationsAuthConfigDecryptedCredentialAuthTokenToHclTerraform(struct!.authToken),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationsAuthConfigDecryptedCredentialAuthTokenList",
    },
    jwt: {
      value: integrationsAuthConfigDecryptedCredentialJwtToHclTerraform(struct!.jwt),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationsAuthConfigDecryptedCredentialJwtList",
    },
    oauth2_authorization_code: {
      value: integrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeToHclTerraform(struct!.oauth2AuthorizationCode),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeList",
    },
    oauth2_client_credentials: {
      value: integrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsToHclTerraform(struct!.oauth2ClientCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsList",
    },
    oidc_token: {
      value: integrationsAuthConfigDecryptedCredentialOidcTokenToHclTerraform(struct!.oidcToken),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationsAuthConfigDecryptedCredentialOidcTokenList",
    },
    service_account_credentials: {
      value: integrationsAuthConfigDecryptedCredentialServiceAccountCredentialsToHclTerraform(struct!.serviceAccountCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsList",
    },
    username_and_password: {
      value: integrationsAuthConfigDecryptedCredentialUsernameAndPasswordToHclTerraform(struct!.usernameAndPassword),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsAuthConfigDecryptedCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationsAuthConfigDecryptedCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._authToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken?.internalValue;
    }
    if (this._jwt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwt = this._jwt?.internalValue;
    }
    if (this._oauth2AuthorizationCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2AuthorizationCode = this._oauth2AuthorizationCode?.internalValue;
    }
    if (this._oauth2ClientCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientCredentials = this._oauth2ClientCredentials?.internalValue;
    }
    if (this._oidcToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcToken = this._oidcToken?.internalValue;
    }
    if (this._serviceAccountCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountCredentials = this._serviceAccountCredentials?.internalValue;
    }
    if (this._usernameAndPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameAndPassword = this._usernameAndPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsAuthConfigDecryptedCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialType = undefined;
      this._authToken.internalValue = undefined;
      this._jwt.internalValue = undefined;
      this._oauth2AuthorizationCode.internalValue = undefined;
      this._oauth2ClientCredentials.internalValue = undefined;
      this._oidcToken.internalValue = undefined;
      this._serviceAccountCredentials.internalValue = undefined;
      this._usernameAndPassword.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialType = value.credentialType;
      this._authToken.internalValue = value.authToken;
      this._jwt.internalValue = value.jwt;
      this._oauth2AuthorizationCode.internalValue = value.oauth2AuthorizationCode;
      this._oauth2ClientCredentials.internalValue = value.oauth2ClientCredentials;
      this._oidcToken.internalValue = value.oidcToken;
      this._serviceAccountCredentials.internalValue = value.serviceAccountCredentials;
      this._usernameAndPassword.internalValue = value.usernameAndPassword;
    }
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken = new IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference(this, "auth_token");
  public get authToken() {
    return this._authToken;
  }
  public putAuthToken(value: IntegrationsAuthConfigDecryptedCredentialAuthToken) {
    this._authToken.internalValue = value;
  }
  public resetAuthToken() {
    this._authToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken.internalValue;
  }

  // jwt - computed: false, optional: true, required: false
  private _jwt = new IntegrationsAuthConfigDecryptedCredentialJwtOutputReference(this, "jwt");
  public get jwt() {
    return this._jwt;
  }
  public putJwt(value: IntegrationsAuthConfigDecryptedCredentialJwt) {
    this._jwt.internalValue = value;
  }
  public resetJwt() {
    this._jwt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInput() {
    return this._jwt.internalValue;
  }

  // oauth2_authorization_code - computed: false, optional: true, required: false
  private _oauth2AuthorizationCode = new IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference(this, "oauth2_authorization_code");
  public get oauth2AuthorizationCode() {
    return this._oauth2AuthorizationCode;
  }
  public putOauth2AuthorizationCode(value: IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode) {
    this._oauth2AuthorizationCode.internalValue = value;
  }
  public resetOauth2AuthorizationCode() {
    this._oauth2AuthorizationCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2AuthorizationCodeInput() {
    return this._oauth2AuthorizationCode.internalValue;
  }

  // oauth2_client_credentials - computed: false, optional: true, required: false
  private _oauth2ClientCredentials = new IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference(this, "oauth2_client_credentials");
  public get oauth2ClientCredentials() {
    return this._oauth2ClientCredentials;
  }
  public putOauth2ClientCredentials(value: IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials) {
    this._oauth2ClientCredentials.internalValue = value;
  }
  public resetOauth2ClientCredentials() {
    this._oauth2ClientCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientCredentialsInput() {
    return this._oauth2ClientCredentials.internalValue;
  }

  // oidc_token - computed: false, optional: true, required: false
  private _oidcToken = new IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference(this, "oidc_token");
  public get oidcToken() {
    return this._oidcToken;
  }
  public putOidcToken(value: IntegrationsAuthConfigDecryptedCredentialOidcToken) {
    this._oidcToken.internalValue = value;
  }
  public resetOidcToken() {
    this._oidcToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenInput() {
    return this._oidcToken.internalValue;
  }

  // service_account_credentials - computed: false, optional: true, required: false
  private _serviceAccountCredentials = new IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference(this, "service_account_credentials");
  public get serviceAccountCredentials() {
    return this._serviceAccountCredentials;
  }
  public putServiceAccountCredentials(value: IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials) {
    this._serviceAccountCredentials.internalValue = value;
  }
  public resetServiceAccountCredentials() {
    this._serviceAccountCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountCredentialsInput() {
    return this._serviceAccountCredentials.internalValue;
  }

  // username_and_password - computed: false, optional: true, required: false
  private _usernameAndPassword = new IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference(this, "username_and_password");
  public get usernameAndPassword() {
    return this._usernameAndPassword;
  }
  public putUsernameAndPassword(value: IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword) {
    this._usernameAndPassword.internalValue = value;
  }
  public resetUsernameAndPassword() {
    this._usernameAndPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAndPasswordInput() {
    return this._usernameAndPassword.internalValue;
  }
}
export interface IntegrationsAuthConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#create IntegrationsAuthConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#delete IntegrationsAuthConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#update IntegrationsAuthConfig#update}
  */
  readonly update?: string;
}

export function integrationsAuthConfigTimeoutsToTerraform(struct?: IntegrationsAuthConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function integrationsAuthConfigTimeoutsToHclTerraform(struct?: IntegrationsAuthConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationsAuthConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationsAuthConfigTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationsAuthConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config google_integrations_auth_config}
*/
export class IntegrationsAuthConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_integrations_auth_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationsAuthConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationsAuthConfig to import
  * @param importFromId The id of the existing IntegrationsAuthConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationsAuthConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_integrations_auth_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/integrations_auth_config google_integrations_auth_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationsAuthConfigConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationsAuthConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_integrations_auth_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.28.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._expiryNotificationDuration = config.expiryNotificationDuration;
    this._id = config.id;
    this._location = config.location;
    this._overrideValidTime = config.overrideValidTime;
    this._project = config.project;
    this._visibility = config.visibility;
    this._clientCertificate.internalValue = config.clientCertificate;
    this._decryptedCredential.internalValue = config.decryptedCredential;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator_email - computed: true, optional: false, required: false
  public get creatorEmail() {
    return this.getStringAttribute('creator_email');
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // encrypted_credential - computed: true, optional: false, required: false
  public get encryptedCredential() {
    return this.getStringAttribute('encrypted_credential');
  }

  // expiry_notification_duration - computed: false, optional: true, required: false
  private _expiryNotificationDuration?: string[]; 
  public get expiryNotificationDuration() {
    return this.getListAttribute('expiry_notification_duration');
  }
  public set expiryNotificationDuration(value: string[]) {
    this._expiryNotificationDuration = value;
  }
  public resetExpiryNotificationDuration() {
    this._expiryNotificationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryNotificationDurationInput() {
    return this._expiryNotificationDuration;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_modifier_email - computed: true, optional: false, required: false
  public get lastModifierEmail() {
    return this.getStringAttribute('last_modifier_email');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // override_valid_time - computed: false, optional: true, required: false
  private _overrideValidTime?: string; 
  public get overrideValidTime() {
    return this.getStringAttribute('override_valid_time');
  }
  public set overrideValidTime(value: string) {
    this._overrideValidTime = value;
  }
  public resetOverrideValidTime() {
    this._overrideValidTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideValidTimeInput() {
    return this._overrideValidTime;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // valid_time - computed: true, optional: false, required: false
  public get validTime() {
    return this.getStringAttribute('valid_time');
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate = new IntegrationsAuthConfigClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: IntegrationsAuthConfigClientCertificate) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
  }

  // decrypted_credential - computed: false, optional: true, required: false
  private _decryptedCredential = new IntegrationsAuthConfigDecryptedCredentialOutputReference(this, "decrypted_credential");
  public get decryptedCredential() {
    return this._decryptedCredential;
  }
  public putDecryptedCredential(value: IntegrationsAuthConfigDecryptedCredential) {
    this._decryptedCredential.internalValue = value;
  }
  public resetDecryptedCredential() {
    this._decryptedCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptedCredentialInput() {
    return this._decryptedCredential.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IntegrationsAuthConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IntegrationsAuthConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      expiry_notification_duration: cdktf.listMapper(cdktf.stringToTerraform, false)(this._expiryNotificationDuration),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      override_valid_time: cdktf.stringToTerraform(this._overrideValidTime),
      project: cdktf.stringToTerraform(this._project),
      visibility: cdktf.stringToTerraform(this._visibility),
      client_certificate: integrationsAuthConfigClientCertificateToTerraform(this._clientCertificate.internalValue),
      decrypted_credential: integrationsAuthConfigDecryptedCredentialToTerraform(this._decryptedCredential.internalValue),
      timeouts: integrationsAuthConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry_notification_duration: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._expiryNotificationDuration),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_valid_time: {
        value: cdktf.stringToHclTerraform(this._overrideValidTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate: {
        value: integrationsAuthConfigClientCertificateToHclTerraform(this._clientCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationsAuthConfigClientCertificateList",
      },
      decrypted_credential: {
        value: integrationsAuthConfigDecryptedCredentialToHclTerraform(this._decryptedCredential.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationsAuthConfigDecryptedCredentialList",
      },
      timeouts: {
        value: integrationsAuthConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationsAuthConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
