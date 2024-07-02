// https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeSecurityPolicyRuleAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Action to perform when the rule is matched. The following are the valid actions:
  * 
  * * allow: allow access to target.
  * 
  * * deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for STATUS are 403, 404, and 502.
  * 
  * * rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rateLimitOptions to be set.
  * 
  * * redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR.
  * 
  * * throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rateLimitOptions to be set for this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#action ComputeSecurityPolicyRuleA#action}
  */
  readonly action: string;
  /**
  * An optional description of this resource. Provide this property when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#description ComputeSecurityPolicyRuleA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#id ComputeSecurityPolicyRuleA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If set to true, the specified action is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#preview ComputeSecurityPolicyRuleA#preview}
  */
  readonly preview?: boolean | cdktf.IResolvable;
  /**
  * An integer indicating the priority of a rule in the list.
  * The priority must be a positive value between 0 and 2147483647.
  * Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#priority ComputeSecurityPolicyRuleA#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#project ComputeSecurityPolicyRuleA#project}
  */
  readonly project?: string;
  /**
  * The name of the security policy this rule belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#security_policy ComputeSecurityPolicyRuleA#security_policy}
  */
  readonly securityPolicy: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#match ComputeSecurityPolicyRuleA#match}
  */
  readonly match?: ComputeSecurityPolicyRuleMatchA;
  /**
  * preconfigured_waf_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#preconfigured_waf_config ComputeSecurityPolicyRuleA#preconfigured_waf_config}
  */
  readonly preconfiguredWafConfig?: ComputeSecurityPolicyRulePreconfiguredWafConfig;
  /**
  * rate_limit_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#rate_limit_options ComputeSecurityPolicyRuleA#rate_limit_options}
  */
  readonly rateLimitOptions?: ComputeSecurityPolicyRuleRateLimitOptionsA;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#timeouts ComputeSecurityPolicyRuleA#timeouts}
  */
  readonly timeouts?: ComputeSecurityPolicyRuleTimeouts;
}
export interface ComputeSecurityPolicyRuleMatchConfigA {
  /**
  * CIDR IP address range. Maximum number of srcIpRanges allowed is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#src_ip_ranges ComputeSecurityPolicyRuleA#src_ip_ranges}
  */
  readonly srcIpRanges?: string[];
}

export function computeSecurityPolicyRuleMatchConfigAToTerraform(struct?: ComputeSecurityPolicyRuleMatchConfigAOutputReference | ComputeSecurityPolicyRuleMatchConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcIpRanges),
  }
}


export function computeSecurityPolicyRuleMatchConfigAToHclTerraform(struct?: ComputeSecurityPolicyRuleMatchConfigAOutputReference | ComputeSecurityPolicyRuleMatchConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSecurityPolicyRuleMatchConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleMatchConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpRanges = this._srcIpRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRuleMatchConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcIpRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcIpRanges = value.srcIpRanges;
    }
  }

  // src_ip_ranges - computed: false, optional: true, required: false
  private _srcIpRanges?: string[]; 
  public get srcIpRanges() {
    return this.getListAttribute('src_ip_ranges');
  }
  public set srcIpRanges(value: string[]) {
    this._srcIpRanges = value;
  }
  public resetSrcIpRanges() {
    this._srcIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpRangesInput() {
    return this._srcIpRanges;
  }
}
export interface ComputeSecurityPolicyRuleMatchExprA {
  /**
  * Textual representation of an expression in Common Expression Language syntax. The application context of the containing message determines which well-known feature set of CEL is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#expression ComputeSecurityPolicyRuleA#expression}
  */
  readonly expression: string;
}

export function computeSecurityPolicyRuleMatchExprAToTerraform(struct?: ComputeSecurityPolicyRuleMatchExprAOutputReference | ComputeSecurityPolicyRuleMatchExprA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function computeSecurityPolicyRuleMatchExprAToHclTerraform(struct?: ComputeSecurityPolicyRuleMatchExprAOutputReference | ComputeSecurityPolicyRuleMatchExprA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSecurityPolicyRuleMatchExprAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleMatchExprA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRuleMatchExprA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}
export interface ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA {
  /**
  * A list of site keys to be used during the validation of reCAPTCHA action-tokens. The provided site keys need to be created from reCAPTCHA API under the same project where the security policy is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#action_token_site_keys ComputeSecurityPolicyRuleA#action_token_site_keys}
  */
  readonly actionTokenSiteKeys?: string[];
  /**
  * A list of site keys to be used during the validation of reCAPTCHA session-tokens. The provided site keys need to be created from reCAPTCHA API under the same project where the security policy is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#session_token_site_keys ComputeSecurityPolicyRuleA#session_token_site_keys}
  */
  readonly sessionTokenSiteKeys?: string[];
}

export function computeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAToTerraform(struct?: ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference | ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_token_site_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actionTokenSiteKeys),
    session_token_site_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sessionTokenSiteKeys),
  }
}


export function computeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAToHclTerraform(struct?: ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference | ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_token_site_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actionTokenSiteKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    session_token_site_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sessionTokenSiteKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionTokenSiteKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTokenSiteKeys = this._actionTokenSiteKeys;
    }
    if (this._sessionTokenSiteKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTokenSiteKeys = this._sessionTokenSiteKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionTokenSiteKeys = undefined;
      this._sessionTokenSiteKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionTokenSiteKeys = value.actionTokenSiteKeys;
      this._sessionTokenSiteKeys = value.sessionTokenSiteKeys;
    }
  }

  // action_token_site_keys - computed: false, optional: true, required: false
  private _actionTokenSiteKeys?: string[]; 
  public get actionTokenSiteKeys() {
    return this.getListAttribute('action_token_site_keys');
  }
  public set actionTokenSiteKeys(value: string[]) {
    this._actionTokenSiteKeys = value;
  }
  public resetActionTokenSiteKeys() {
    this._actionTokenSiteKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTokenSiteKeysInput() {
    return this._actionTokenSiteKeys;
  }

  // session_token_site_keys - computed: false, optional: true, required: false
  private _sessionTokenSiteKeys?: string[]; 
  public get sessionTokenSiteKeys() {
    return this.getListAttribute('session_token_site_keys');
  }
  public set sessionTokenSiteKeys(value: string[]) {
    this._sessionTokenSiteKeys = value;
  }
  public resetSessionTokenSiteKeys() {
    this._sessionTokenSiteKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTokenSiteKeysInput() {
    return this._sessionTokenSiteKeys;
  }
}
export interface ComputeSecurityPolicyRuleMatchExprOptionsA {
  /**
  * recaptcha_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#recaptcha_options ComputeSecurityPolicyRuleA#recaptcha_options}
  */
  readonly recaptchaOptions: ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA;
}

export function computeSecurityPolicyRuleMatchExprOptionsAToTerraform(struct?: ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference | ComputeSecurityPolicyRuleMatchExprOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recaptcha_options: computeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAToTerraform(struct!.recaptchaOptions),
  }
}


export function computeSecurityPolicyRuleMatchExprOptionsAToHclTerraform(struct?: ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference | ComputeSecurityPolicyRuleMatchExprOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recaptcha_options: {
      value: computeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAToHclTerraform(struct!.recaptchaOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleMatchExprOptionsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recaptchaOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recaptchaOptions = this._recaptchaOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRuleMatchExprOptionsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recaptchaOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recaptchaOptions.internalValue = value.recaptchaOptions;
    }
  }

  // recaptcha_options - computed: false, optional: false, required: true
  private _recaptchaOptions = new ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference(this, "recaptcha_options");
  public get recaptchaOptions() {
    return this._recaptchaOptions;
  }
  public putRecaptchaOptions(value: ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA) {
    this._recaptchaOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recaptchaOptionsInput() {
    return this._recaptchaOptions.internalValue;
  }
}
export interface ComputeSecurityPolicyRuleMatchA {
  /**
  * Preconfigured versioned expression. If this field is specified, config must also be specified.
  * Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config. Possible values: ["SRC_IPS_V1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#versioned_expr ComputeSecurityPolicyRuleA#versioned_expr}
  */
  readonly versionedExpr?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#config ComputeSecurityPolicyRuleA#config}
  */
  readonly config?: ComputeSecurityPolicyRuleMatchConfigA;
  /**
  * expr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#expr ComputeSecurityPolicyRuleA#expr}
  */
  readonly expr?: ComputeSecurityPolicyRuleMatchExprA;
  /**
  * expr_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#expr_options ComputeSecurityPolicyRuleA#expr_options}
  */
  readonly exprOptions?: ComputeSecurityPolicyRuleMatchExprOptionsA;
}

export function computeSecurityPolicyRuleMatchAToTerraform(struct?: ComputeSecurityPolicyRuleMatchAOutputReference | ComputeSecurityPolicyRuleMatchA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    versioned_expr: cdktf.stringToTerraform(struct!.versionedExpr),
    config: computeSecurityPolicyRuleMatchConfigAToTerraform(struct!.config),
    expr: computeSecurityPolicyRuleMatchExprAToTerraform(struct!.expr),
    expr_options: computeSecurityPolicyRuleMatchExprOptionsAToTerraform(struct!.exprOptions),
  }
}


export function computeSecurityPolicyRuleMatchAToHclTerraform(struct?: ComputeSecurityPolicyRuleMatchAOutputReference | ComputeSecurityPolicyRuleMatchA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    versioned_expr: {
      value: cdktf.stringToHclTerraform(struct!.versionedExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: computeSecurityPolicyRuleMatchConfigAToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeSecurityPolicyRuleMatchConfigAList",
    },
    expr: {
      value: computeSecurityPolicyRuleMatchExprAToHclTerraform(struct!.expr),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeSecurityPolicyRuleMatchExprAList",
    },
    expr_options: {
      value: computeSecurityPolicyRuleMatchExprOptionsAToHclTerraform(struct!.exprOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeSecurityPolicyRuleMatchExprOptionsAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSecurityPolicyRuleMatchAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleMatchA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._versionedExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionedExpr = this._versionedExpr;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._expr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr?.internalValue;
    }
    if (this._exprOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exprOptions = this._exprOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRuleMatchA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._versionedExpr = undefined;
      this._config.internalValue = undefined;
      this._expr.internalValue = undefined;
      this._exprOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._versionedExpr = value.versionedExpr;
      this._config.internalValue = value.config;
      this._expr.internalValue = value.expr;
      this._exprOptions.internalValue = value.exprOptions;
    }
  }

  // versioned_expr - computed: false, optional: true, required: false
  private _versionedExpr?: string; 
  public get versionedExpr() {
    return this.getStringAttribute('versioned_expr');
  }
  public set versionedExpr(value: string) {
    this._versionedExpr = value;
  }
  public resetVersionedExpr() {
    this._versionedExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionedExprInput() {
    return this._versionedExpr;
  }

  // config - computed: false, optional: true, required: false
  private _config = new ComputeSecurityPolicyRuleMatchConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ComputeSecurityPolicyRuleMatchConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // expr - computed: false, optional: true, required: false
  private _expr = new ComputeSecurityPolicyRuleMatchExprAOutputReference(this, "expr");
  public get expr() {
    return this._expr;
  }
  public putExpr(value: ComputeSecurityPolicyRuleMatchExprA) {
    this._expr.internalValue = value;
  }
  public resetExpr() {
    this._expr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr.internalValue;
  }

  // expr_options - computed: false, optional: true, required: false
  private _exprOptions = new ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference(this, "expr_options");
  public get exprOptions() {
    return this._exprOptions;
  }
  public putExprOptions(value: ComputeSecurityPolicyRuleMatchExprOptionsA) {
    this._exprOptions.internalValue = value;
  }
  public resetExprOptions() {
    this._exprOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprOptionsInput() {
    return this._exprOptions.internalValue;
  }
}
export interface ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#operator ComputeSecurityPolicyRuleA#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#value ComputeSecurityPolicyRuleA#value}
  */
  readonly value?: string;
}

export function computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToTerraform(struct?: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToHclTerraform(struct?: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList extends cdktf.ComplexList {
  public internalValue? : ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[] | cdktf.IResolvable

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
  public get(index: number): ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference {
    return new ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#operator ComputeSecurityPolicyRuleA#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#value ComputeSecurityPolicyRuleA#value}
  */
  readonly value?: string;
}

export function computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToTerraform(struct?: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToHclTerraform(struct?: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList extends cdktf.ComplexList {
  public internalValue? : ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[] | cdktf.IResolvable

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
  public get(index: number): ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference {
    return new ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#operator ComputeSecurityPolicyRuleA#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#value ComputeSecurityPolicyRuleA#value}
  */
  readonly value?: string;
}

export function computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToTerraform(struct?: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToHclTerraform(struct?: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList extends cdktf.ComplexList {
  public internalValue? : ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[] | cdktf.IResolvable

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
  public get(index: number): ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference {
    return new ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#operator ComputeSecurityPolicyRuleA#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#value ComputeSecurityPolicyRuleA#value}
  */
  readonly value?: string;
}

export function computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToTerraform(struct?: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToHclTerraform(struct?: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList extends cdktf.ComplexList {
  public internalValue? : ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[] | cdktf.IResolvable

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
  public get(index: number): ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference {
    return new ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion {
  /**
  * A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.
  * If omitted, it refers to all the rule IDs under the WAF rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#target_rule_ids ComputeSecurityPolicyRuleA#target_rule_ids}
  */
  readonly targetRuleIds?: string[];
  /**
  * Target WAF rule set to apply the preconfigured WAF exclusion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#target_rule_set ComputeSecurityPolicyRuleA#target_rule_set}
  */
  readonly targetRuleSet: string;
  /**
  * request_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#request_cookie ComputeSecurityPolicyRuleA#request_cookie}
  */
  readonly requestCookie?: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[] | cdktf.IResolvable;
  /**
  * request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#request_header ComputeSecurityPolicyRuleA#request_header}
  */
  readonly requestHeader?: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[] | cdktf.IResolvable;
  /**
  * request_query_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#request_query_param ComputeSecurityPolicyRuleA#request_query_param}
  */
  readonly requestQueryParam?: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[] | cdktf.IResolvable;
  /**
  * request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#request_uri ComputeSecurityPolicyRuleA#request_uri}
  */
  readonly requestUri?: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[] | cdktf.IResolvable;
}

export function computeSecurityPolicyRulePreconfiguredWafConfigExclusionToTerraform(struct?: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetRuleIds),
    target_rule_set: cdktf.stringToTerraform(struct!.targetRuleSet),
    request_cookie: cdktf.listMapper(computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToTerraform, true)(struct!.requestCookie),
    request_header: cdktf.listMapper(computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToTerraform, true)(struct!.requestHeader),
    request_query_param: cdktf.listMapper(computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToTerraform, true)(struct!.requestQueryParam),
    request_uri: cdktf.listMapper(computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToTerraform, true)(struct!.requestUri),
  }
}


export function computeSecurityPolicyRulePreconfiguredWafConfigExclusionToHclTerraform(struct?: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_rule_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetRuleIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_rule_set: {
      value: cdktf.stringToHclTerraform(struct!.targetRuleSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_cookie: {
      value: cdktf.listMapperHcl(computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToHclTerraform, true)(struct!.requestCookie),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList",
    },
    request_header: {
      value: cdktf.listMapperHcl(computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToHclTerraform, true)(struct!.requestHeader),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList",
    },
    request_query_param: {
      value: cdktf.listMapperHcl(computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToHclTerraform, true)(struct!.requestQueryParam),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList",
    },
    request_uri: {
      value: cdktf.listMapperHcl(computeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToHclTerraform, true)(struct!.requestUri),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetRuleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRuleIds = this._targetRuleIds;
    }
    if (this._targetRuleSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRuleSet = this._targetRuleSet;
    }
    if (this._requestCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCookie = this._requestCookie?.internalValue;
    }
    if (this._requestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeader = this._requestHeader?.internalValue;
    }
    if (this._requestQueryParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestQueryParam = this._requestQueryParam?.internalValue;
    }
    if (this._requestUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUri = this._requestUri?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetRuleIds = undefined;
      this._targetRuleSet = undefined;
      this._requestCookie.internalValue = undefined;
      this._requestHeader.internalValue = undefined;
      this._requestQueryParam.internalValue = undefined;
      this._requestUri.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetRuleIds = value.targetRuleIds;
      this._targetRuleSet = value.targetRuleSet;
      this._requestCookie.internalValue = value.requestCookie;
      this._requestHeader.internalValue = value.requestHeader;
      this._requestQueryParam.internalValue = value.requestQueryParam;
      this._requestUri.internalValue = value.requestUri;
    }
  }

  // target_rule_ids - computed: false, optional: true, required: false
  private _targetRuleIds?: string[]; 
  public get targetRuleIds() {
    return this.getListAttribute('target_rule_ids');
  }
  public set targetRuleIds(value: string[]) {
    this._targetRuleIds = value;
  }
  public resetTargetRuleIds() {
    this._targetRuleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleIdsInput() {
    return this._targetRuleIds;
  }

  // target_rule_set - computed: false, optional: false, required: true
  private _targetRuleSet?: string; 
  public get targetRuleSet() {
    return this.getStringAttribute('target_rule_set');
  }
  public set targetRuleSet(value: string) {
    this._targetRuleSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleSetInput() {
    return this._targetRuleSet;
  }

  // request_cookie - computed: false, optional: true, required: false
  private _requestCookie = new ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList(this, "request_cookie", false);
  public get requestCookie() {
    return this._requestCookie;
  }
  public putRequestCookie(value: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[] | cdktf.IResolvable) {
    this._requestCookie.internalValue = value;
  }
  public resetRequestCookie() {
    this._requestCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCookieInput() {
    return this._requestCookie.internalValue;
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList(this, "request_header", false);
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[] | cdktf.IResolvable) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
  }

  // request_query_param - computed: false, optional: true, required: false
  private _requestQueryParam = new ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList(this, "request_query_param", false);
  public get requestQueryParam() {
    return this._requestQueryParam;
  }
  public putRequestQueryParam(value: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[] | cdktf.IResolvable) {
    this._requestQueryParam.internalValue = value;
  }
  public resetRequestQueryParam() {
    this._requestQueryParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestQueryParamInput() {
    return this._requestQueryParam.internalValue;
  }

  // request_uri - computed: false, optional: true, required: false
  private _requestUri = new ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList(this, "request_uri", false);
  public get requestUri() {
    return this._requestUri;
  }
  public putRequestUri(value: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[] | cdktf.IResolvable) {
    this._requestUri.internalValue = value;
  }
  public resetRequestUri() {
    this._requestUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUriInput() {
    return this._requestUri.internalValue;
  }
}

export class ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList extends cdktf.ComplexList {
  public internalValue? : ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion[] | cdktf.IResolvable

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
  public get(index: number): ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference {
    return new ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeSecurityPolicyRulePreconfiguredWafConfig {
  /**
  * exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#exclusion ComputeSecurityPolicyRuleA#exclusion}
  */
  readonly exclusion?: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion[] | cdktf.IResolvable;
}

export function computeSecurityPolicyRulePreconfiguredWafConfigToTerraform(struct?: ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference | ComputeSecurityPolicyRulePreconfiguredWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion: cdktf.listMapper(computeSecurityPolicyRulePreconfiguredWafConfigExclusionToTerraform, true)(struct!.exclusion),
  }
}


export function computeSecurityPolicyRulePreconfiguredWafConfigToHclTerraform(struct?: ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference | ComputeSecurityPolicyRulePreconfiguredWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion: {
      value: cdktf.listMapperHcl(computeSecurityPolicyRulePreconfiguredWafConfigExclusionToHclTerraform, true)(struct!.exclusion),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRulePreconfiguredWafConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRulePreconfiguredWafConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclusion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclusion.internalValue = value.exclusion;
    }
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion = new ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList(this, "exclusion", false);
  public get exclusion() {
    return this._exclusion;
  }
  public putExclusion(value: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion[] | cdktf.IResolvable) {
    this._exclusion.internalValue = value;
  }
  public resetExclusion() {
    this._exclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion.internalValue;
  }
}
export interface ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA {
  /**
  * Number of HTTP(S) requests for calculating the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#count ComputeSecurityPolicyRuleA#count}
  */
  readonly count?: number;
  /**
  * Interval over which the threshold is computed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#interval_sec ComputeSecurityPolicyRuleA#interval_sec}
  */
  readonly intervalSec?: number;
}

export function computeSecurityPolicyRuleRateLimitOptionsBanThresholdAToTerraform(struct?: ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference | ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval_sec: cdktf.numberToTerraform(struct!.intervalSec),
  }
}


export function computeSecurityPolicyRuleRateLimitOptionsBanThresholdAToHclTerraform(struct?: ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference | ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_sec: {
      value: cdktf.numberToHclTerraform(struct!.intervalSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._intervalSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSec = this._intervalSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._intervalSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._intervalSec = value.intervalSec;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval_sec - computed: false, optional: true, required: false
  private _intervalSec?: number; 
  public get intervalSec() {
    return this.getNumberAttribute('interval_sec');
  }
  public set intervalSec(value: number) {
    this._intervalSec = value;
  }
  public resetIntervalSec() {
    this._intervalSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecInput() {
    return this._intervalSec;
  }
}
export interface ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs {
  /**
  * Rate limit key name applicable only for the following key types:
  * HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.
  * HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#enforce_on_key_name ComputeSecurityPolicyRuleA#enforce_on_key_name}
  */
  readonly enforceOnKeyName?: string;
  /**
  * Determines the key to enforce the rateLimitThreshold on. Possible values are:
  * * ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKeyConfigs" is not configured.
  * * IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
  * * HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
  * * XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
  * * HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
  * * HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
  * * SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
  * * REGION_CODE: The country/region from which the request originates.
  * * TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
  * * USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#enforce_on_key_type ComputeSecurityPolicyRuleA#enforce_on_key_type}
  */
  readonly enforceOnKeyType?: string;
}

export function computeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsToTerraform(struct?: ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce_on_key_name: cdktf.stringToTerraform(struct!.enforceOnKeyName),
    enforce_on_key_type: cdktf.stringToTerraform(struct!.enforceOnKeyType),
  }
}


export function computeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsToHclTerraform(struct?: ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce_on_key_name: {
      value: cdktf.stringToHclTerraform(struct!.enforceOnKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforce_on_key_type: {
      value: cdktf.stringToHclTerraform(struct!.enforceOnKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforceOnKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceOnKeyName = this._enforceOnKeyName;
    }
    if (this._enforceOnKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceOnKeyType = this._enforceOnKeyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforceOnKeyName = undefined;
      this._enforceOnKeyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforceOnKeyName = value.enforceOnKeyName;
      this._enforceOnKeyType = value.enforceOnKeyType;
    }
  }

  // enforce_on_key_name - computed: false, optional: true, required: false
  private _enforceOnKeyName?: string; 
  public get enforceOnKeyName() {
    return this.getStringAttribute('enforce_on_key_name');
  }
  public set enforceOnKeyName(value: string) {
    this._enforceOnKeyName = value;
  }
  public resetEnforceOnKeyName() {
    this._enforceOnKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceOnKeyNameInput() {
    return this._enforceOnKeyName;
  }

  // enforce_on_key_type - computed: false, optional: true, required: false
  private _enforceOnKeyType?: string; 
  public get enforceOnKeyType() {
    return this.getStringAttribute('enforce_on_key_type');
  }
  public set enforceOnKeyType(value: string) {
    this._enforceOnKeyType = value;
  }
  public resetEnforceOnKeyType() {
    this._enforceOnKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceOnKeyTypeInput() {
    return this._enforceOnKeyType;
  }
}

export class ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList extends cdktf.ComplexList {
  public internalValue? : ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs[] | cdktf.IResolvable

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
  public get(index: number): ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference {
    return new ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA {
  /**
  * Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#target ComputeSecurityPolicyRuleA#target}
  */
  readonly target?: string;
  /**
  * Type of the redirect action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#type ComputeSecurityPolicyRuleA#type}
  */
  readonly type?: string;
}

export function computeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAToTerraform(struct?: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference | ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function computeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAToHclTerraform(struct?: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference | ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
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

export class ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._target = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._target = value.target;
      this._type = value.type;
    }
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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
export interface ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA {
  /**
  * Number of HTTP(S) requests for calculating the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#count ComputeSecurityPolicyRuleA#count}
  */
  readonly count?: number;
  /**
  * Interval over which the threshold is computed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#interval_sec ComputeSecurityPolicyRuleA#interval_sec}
  */
  readonly intervalSec?: number;
}

export function computeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAToTerraform(struct?: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference | ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval_sec: cdktf.numberToTerraform(struct!.intervalSec),
  }
}


export function computeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAToHclTerraform(struct?: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference | ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_sec: {
      value: cdktf.numberToHclTerraform(struct!.intervalSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._intervalSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSec = this._intervalSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._intervalSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._intervalSec = value.intervalSec;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval_sec - computed: false, optional: true, required: false
  private _intervalSec?: number; 
  public get intervalSec() {
    return this.getNumberAttribute('interval_sec');
  }
  public set intervalSec(value: number) {
    this._intervalSec = value;
  }
  public resetIntervalSec() {
    this._intervalSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecInput() {
    return this._intervalSec;
  }
}
export interface ComputeSecurityPolicyRuleRateLimitOptionsA {
  /**
  * Can only be specified if the action for the rule is "rate_based_ban".
  * If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#ban_duration_sec ComputeSecurityPolicyRuleA#ban_duration_sec}
  */
  readonly banDurationSec?: number;
  /**
  * Action to take for requests that are under the configured rate limit threshold.
  * Valid option is "allow" only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#conform_action ComputeSecurityPolicyRuleA#conform_action}
  */
  readonly conformAction?: string;
  /**
  * Determines the key to enforce the rateLimitThreshold on. Possible values are:
  * * ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKey" is not configured.
  * * IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
  * * HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
  * * XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
  * * HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
  * * HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
  * * SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
  * * REGION_CODE: The country/region from which the request originates.
  * * TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
  * * USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#enforce_on_key ComputeSecurityPolicyRuleA#enforce_on_key}
  */
  readonly enforceOnKey?: string;
  /**
  * Rate limit key name applicable only for the following key types:
  * HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.
  * HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#enforce_on_key_name ComputeSecurityPolicyRuleA#enforce_on_key_name}
  */
  readonly enforceOnKeyName?: string;
  /**
  * Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint.
  * Valid options are deny(STATUS), where valid values for STATUS are 403, 404, 429, and 502.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#exceed_action ComputeSecurityPolicyRuleA#exceed_action}
  */
  readonly exceedAction?: string;
  /**
  * ban_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#ban_threshold ComputeSecurityPolicyRuleA#ban_threshold}
  */
  readonly banThreshold?: ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA;
  /**
  * enforce_on_key_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#enforce_on_key_configs ComputeSecurityPolicyRuleA#enforce_on_key_configs}
  */
  readonly enforceOnKeyConfigs?: ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs[] | cdktf.IResolvable;
  /**
  * exceed_redirect_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#exceed_redirect_options ComputeSecurityPolicyRuleA#exceed_redirect_options}
  */
  readonly exceedRedirectOptions?: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA;
  /**
  * rate_limit_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#rate_limit_threshold ComputeSecurityPolicyRuleA#rate_limit_threshold}
  */
  readonly rateLimitThreshold?: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA;
}

export function computeSecurityPolicyRuleRateLimitOptionsAToTerraform(struct?: ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference | ComputeSecurityPolicyRuleRateLimitOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ban_duration_sec: cdktf.numberToTerraform(struct!.banDurationSec),
    conform_action: cdktf.stringToTerraform(struct!.conformAction),
    enforce_on_key: cdktf.stringToTerraform(struct!.enforceOnKey),
    enforce_on_key_name: cdktf.stringToTerraform(struct!.enforceOnKeyName),
    exceed_action: cdktf.stringToTerraform(struct!.exceedAction),
    ban_threshold: computeSecurityPolicyRuleRateLimitOptionsBanThresholdAToTerraform(struct!.banThreshold),
    enforce_on_key_configs: cdktf.listMapper(computeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsToTerraform, true)(struct!.enforceOnKeyConfigs),
    exceed_redirect_options: computeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAToTerraform(struct!.exceedRedirectOptions),
    rate_limit_threshold: computeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAToTerraform(struct!.rateLimitThreshold),
  }
}


export function computeSecurityPolicyRuleRateLimitOptionsAToHclTerraform(struct?: ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference | ComputeSecurityPolicyRuleRateLimitOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ban_duration_sec: {
      value: cdktf.numberToHclTerraform(struct!.banDurationSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conform_action: {
      value: cdktf.stringToHclTerraform(struct!.conformAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforce_on_key: {
      value: cdktf.stringToHclTerraform(struct!.enforceOnKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforce_on_key_name: {
      value: cdktf.stringToHclTerraform(struct!.enforceOnKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exceed_action: {
      value: cdktf.stringToHclTerraform(struct!.exceedAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ban_threshold: {
      value: computeSecurityPolicyRuleRateLimitOptionsBanThresholdAToHclTerraform(struct!.banThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAList",
    },
    enforce_on_key_configs: {
      value: cdktf.listMapperHcl(computeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsToHclTerraform, true)(struct!.enforceOnKeyConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList",
    },
    exceed_redirect_options: {
      value: computeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAToHclTerraform(struct!.exceedRedirectOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAList",
    },
    rate_limit_threshold: {
      value: computeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAToHclTerraform(struct!.rateLimitThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleRateLimitOptionsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._banDurationSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.banDurationSec = this._banDurationSec;
    }
    if (this._conformAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.conformAction = this._conformAction;
    }
    if (this._enforceOnKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceOnKey = this._enforceOnKey;
    }
    if (this._enforceOnKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceOnKeyName = this._enforceOnKeyName;
    }
    if (this._exceedAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedAction = this._exceedAction;
    }
    if (this._banThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.banThreshold = this._banThreshold?.internalValue;
    }
    if (this._enforceOnKeyConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceOnKeyConfigs = this._enforceOnKeyConfigs?.internalValue;
    }
    if (this._exceedRedirectOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedRedirectOptions = this._exceedRedirectOptions?.internalValue;
    }
    if (this._rateLimitThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitThreshold = this._rateLimitThreshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRuleRateLimitOptionsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._banDurationSec = undefined;
      this._conformAction = undefined;
      this._enforceOnKey = undefined;
      this._enforceOnKeyName = undefined;
      this._exceedAction = undefined;
      this._banThreshold.internalValue = undefined;
      this._enforceOnKeyConfigs.internalValue = undefined;
      this._exceedRedirectOptions.internalValue = undefined;
      this._rateLimitThreshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._banDurationSec = value.banDurationSec;
      this._conformAction = value.conformAction;
      this._enforceOnKey = value.enforceOnKey;
      this._enforceOnKeyName = value.enforceOnKeyName;
      this._exceedAction = value.exceedAction;
      this._banThreshold.internalValue = value.banThreshold;
      this._enforceOnKeyConfigs.internalValue = value.enforceOnKeyConfigs;
      this._exceedRedirectOptions.internalValue = value.exceedRedirectOptions;
      this._rateLimitThreshold.internalValue = value.rateLimitThreshold;
    }
  }

  // ban_duration_sec - computed: false, optional: true, required: false
  private _banDurationSec?: number; 
  public get banDurationSec() {
    return this.getNumberAttribute('ban_duration_sec');
  }
  public set banDurationSec(value: number) {
    this._banDurationSec = value;
  }
  public resetBanDurationSec() {
    this._banDurationSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get banDurationSecInput() {
    return this._banDurationSec;
  }

  // conform_action - computed: false, optional: true, required: false
  private _conformAction?: string; 
  public get conformAction() {
    return this.getStringAttribute('conform_action');
  }
  public set conformAction(value: string) {
    this._conformAction = value;
  }
  public resetConformAction() {
    this._conformAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conformActionInput() {
    return this._conformAction;
  }

  // enforce_on_key - computed: false, optional: true, required: false
  private _enforceOnKey?: string; 
  public get enforceOnKey() {
    return this.getStringAttribute('enforce_on_key');
  }
  public set enforceOnKey(value: string) {
    this._enforceOnKey = value;
  }
  public resetEnforceOnKey() {
    this._enforceOnKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceOnKeyInput() {
    return this._enforceOnKey;
  }

  // enforce_on_key_name - computed: false, optional: true, required: false
  private _enforceOnKeyName?: string; 
  public get enforceOnKeyName() {
    return this.getStringAttribute('enforce_on_key_name');
  }
  public set enforceOnKeyName(value: string) {
    this._enforceOnKeyName = value;
  }
  public resetEnforceOnKeyName() {
    this._enforceOnKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceOnKeyNameInput() {
    return this._enforceOnKeyName;
  }

  // exceed_action - computed: false, optional: true, required: false
  private _exceedAction?: string; 
  public get exceedAction() {
    return this.getStringAttribute('exceed_action');
  }
  public set exceedAction(value: string) {
    this._exceedAction = value;
  }
  public resetExceedAction() {
    this._exceedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionInput() {
    return this._exceedAction;
  }

  // ban_threshold - computed: false, optional: true, required: false
  private _banThreshold = new ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference(this, "ban_threshold");
  public get banThreshold() {
    return this._banThreshold;
  }
  public putBanThreshold(value: ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA) {
    this._banThreshold.internalValue = value;
  }
  public resetBanThreshold() {
    this._banThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get banThresholdInput() {
    return this._banThreshold.internalValue;
  }

  // enforce_on_key_configs - computed: false, optional: true, required: false
  private _enforceOnKeyConfigs = new ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList(this, "enforce_on_key_configs", false);
  public get enforceOnKeyConfigs() {
    return this._enforceOnKeyConfigs;
  }
  public putEnforceOnKeyConfigs(value: ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs[] | cdktf.IResolvable) {
    this._enforceOnKeyConfigs.internalValue = value;
  }
  public resetEnforceOnKeyConfigs() {
    this._enforceOnKeyConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceOnKeyConfigsInput() {
    return this._enforceOnKeyConfigs.internalValue;
  }

  // exceed_redirect_options - computed: false, optional: true, required: false
  private _exceedRedirectOptions = new ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference(this, "exceed_redirect_options");
  public get exceedRedirectOptions() {
    return this._exceedRedirectOptions;
  }
  public putExceedRedirectOptions(value: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA) {
    this._exceedRedirectOptions.internalValue = value;
  }
  public resetExceedRedirectOptions() {
    this._exceedRedirectOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedRedirectOptionsInput() {
    return this._exceedRedirectOptions.internalValue;
  }

  // rate_limit_threshold - computed: false, optional: true, required: false
  private _rateLimitThreshold = new ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference(this, "rate_limit_threshold");
  public get rateLimitThreshold() {
    return this._rateLimitThreshold;
  }
  public putRateLimitThreshold(value: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA) {
    this._rateLimitThreshold.internalValue = value;
  }
  public resetRateLimitThreshold() {
    this._rateLimitThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitThresholdInput() {
    return this._rateLimitThreshold.internalValue;
  }
}
export interface ComputeSecurityPolicyRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#create ComputeSecurityPolicyRuleA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#delete ComputeSecurityPolicyRuleA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#update ComputeSecurityPolicyRuleA#update}
  */
  readonly update?: string;
}

export function computeSecurityPolicyRuleTimeoutsToTerraform(struct?: ComputeSecurityPolicyRuleTimeouts | cdktf.IResolvable): any {
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


export function computeSecurityPolicyRuleTimeoutsToHclTerraform(struct?: ComputeSecurityPolicyRuleTimeouts | cdktf.IResolvable): any {
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

export class ComputeSecurityPolicyRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeSecurityPolicyRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeSecurityPolicyRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule google_compute_security_policy_rule}
*/
export class ComputeSecurityPolicyRuleA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_security_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeSecurityPolicyRuleA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeSecurityPolicyRuleA to import
  * @param importFromId The id of the existing ComputeSecurityPolicyRuleA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeSecurityPolicyRuleA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_security_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_security_policy_rule google_compute_security_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeSecurityPolicyRuleAConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeSecurityPolicyRuleAConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_security_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.36.0',
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
    this._action = config.action;
    this._description = config.description;
    this._id = config.id;
    this._preview = config.preview;
    this._priority = config.priority;
    this._project = config.project;
    this._securityPolicy = config.securityPolicy;
    this._match.internalValue = config.match;
    this._preconfiguredWafConfig.internalValue = config.preconfiguredWafConfig;
    this._rateLimitOptions.internalValue = config.rateLimitOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // preview - computed: false, optional: true, required: false
  private _preview?: boolean | cdktf.IResolvable; 
  public get preview() {
    return this.getBooleanAttribute('preview');
  }
  public set preview(value: boolean | cdktf.IResolvable) {
    this._preview = value;
  }
  public resetPreview() {
    this._preview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewInput() {
    return this._preview;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // security_policy - computed: false, optional: false, required: true
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
  }

  // match - computed: false, optional: true, required: false
  private _match = new ComputeSecurityPolicyRuleMatchAOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: ComputeSecurityPolicyRuleMatchA) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // preconfigured_waf_config - computed: false, optional: true, required: false
  private _preconfiguredWafConfig = new ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference(this, "preconfigured_waf_config");
  public get preconfiguredWafConfig() {
    return this._preconfiguredWafConfig;
  }
  public putPreconfiguredWafConfig(value: ComputeSecurityPolicyRulePreconfiguredWafConfig) {
    this._preconfiguredWafConfig.internalValue = value;
  }
  public resetPreconfiguredWafConfig() {
    this._preconfiguredWafConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconfiguredWafConfigInput() {
    return this._preconfiguredWafConfig.internalValue;
  }

  // rate_limit_options - computed: false, optional: true, required: false
  private _rateLimitOptions = new ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference(this, "rate_limit_options");
  public get rateLimitOptions() {
    return this._rateLimitOptions;
  }
  public putRateLimitOptions(value: ComputeSecurityPolicyRuleRateLimitOptionsA) {
    this._rateLimitOptions.internalValue = value;
  }
  public resetRateLimitOptions() {
    this._rateLimitOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitOptionsInput() {
    return this._rateLimitOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeSecurityPolicyRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeSecurityPolicyRuleTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      preview: cdktf.booleanToTerraform(this._preview),
      priority: cdktf.numberToTerraform(this._priority),
      project: cdktf.stringToTerraform(this._project),
      security_policy: cdktf.stringToTerraform(this._securityPolicy),
      match: computeSecurityPolicyRuleMatchAToTerraform(this._match.internalValue),
      preconfigured_waf_config: computeSecurityPolicyRulePreconfiguredWafConfigToTerraform(this._preconfiguredWafConfig.internalValue),
      rate_limit_options: computeSecurityPolicyRuleRateLimitOptionsAToTerraform(this._rateLimitOptions.internalValue),
      timeouts: computeSecurityPolicyRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preview: {
        value: cdktf.booleanToHclTerraform(this._preview),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy: {
        value: cdktf.stringToHclTerraform(this._securityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match: {
        value: computeSecurityPolicyRuleMatchAToHclTerraform(this._match.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeSecurityPolicyRuleMatchAList",
      },
      preconfigured_waf_config: {
        value: computeSecurityPolicyRulePreconfiguredWafConfigToHclTerraform(this._preconfiguredWafConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeSecurityPolicyRulePreconfiguredWafConfigList",
      },
      rate_limit_options: {
        value: computeSecurityPolicyRuleRateLimitOptionsAToHclTerraform(this._rateLimitOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeSecurityPolicyRuleRateLimitOptionsAList",
      },
      timeouts: {
        value: computeSecurityPolicyRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeSecurityPolicyRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
