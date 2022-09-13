// https://www.terraform.io/docs/providers/google/r/compute_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this security policy. Max size is 2048.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#description ComputeSecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#id ComputeSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the security policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#name ComputeSecurityPolicy#name}
  */
  readonly name: string;
  /**
  * The project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#project ComputeSecurityPolicy#project}
  */
  readonly project?: string;
  /**
  * The type indicates the intended use of the security policy. CLOUD_ARMOR - Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers. CLOUD_ARMOR_EDGE - Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#type ComputeSecurityPolicy#type}
  */
  readonly type?: string;
  /**
  * adaptive_protection_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#adaptive_protection_config ComputeSecurityPolicy#adaptive_protection_config}
  */
  readonly adaptiveProtectionConfig?: ComputeSecurityPolicyAdaptiveProtectionConfig;
  /**
  * advanced_options_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#advanced_options_config ComputeSecurityPolicy#advanced_options_config}
  */
  readonly advancedOptionsConfig?: ComputeSecurityPolicyAdvancedOptionsConfig;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#rule ComputeSecurityPolicy#rule}
  */
  readonly rule?: ComputeSecurityPolicyRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#timeouts ComputeSecurityPolicy#timeouts}
  */
  readonly timeouts?: ComputeSecurityPolicyTimeouts;
}
export interface ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig {
  /**
  * If set to true, enables CAAP for L7 DDoS detection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#enable ComputeSecurityPolicy#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Rule visibility. Supported values include: "STANDARD", "PREMIUM".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#rule_visibility ComputeSecurityPolicy#rule_visibility}
  */
  readonly ruleVisibility?: string;
}

export function computeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigToTerraform(struct?: ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference | ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    rule_visibility: cdktf.stringToTerraform(struct!.ruleVisibility),
  }
}

export class ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._ruleVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleVisibility = this._ruleVisibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._ruleVisibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._ruleVisibility = value.ruleVisibility;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // rule_visibility - computed: false, optional: true, required: false
  private _ruleVisibility?: string; 
  public get ruleVisibility() {
    return this.getStringAttribute('rule_visibility');
  }
  public set ruleVisibility(value: string) {
    this._ruleVisibility = value;
  }
  public resetRuleVisibility() {
    this._ruleVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleVisibilityInput() {
    return this._ruleVisibility;
  }
}
export interface ComputeSecurityPolicyAdaptiveProtectionConfig {
  /**
  * layer_7_ddos_defense_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#layer_7_ddos_defense_config ComputeSecurityPolicy#layer_7_ddos_defense_config}
  */
  readonly layer7DdosDefenseConfig?: ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
}

export function computeSecurityPolicyAdaptiveProtectionConfigToTerraform(struct?: ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference | ComputeSecurityPolicyAdaptiveProtectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    layer_7_ddos_defense_config: computeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigToTerraform(struct!.layer7DdosDefenseConfig),
  }
}

export class ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyAdaptiveProtectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._layer7DdosDefenseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer7DdosDefenseConfig = this._layer7DdosDefenseConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyAdaptiveProtectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._layer7DdosDefenseConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._layer7DdosDefenseConfig.internalValue = value.layer7DdosDefenseConfig;
    }
  }

  // layer_7_ddos_defense_config - computed: false, optional: true, required: false
  private _layer7DdosDefenseConfig = new ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference(this, "layer_7_ddos_defense_config");
  public get layer7DdosDefenseConfig() {
    return this._layer7DdosDefenseConfig;
  }
  public putLayer7DdosDefenseConfig(value: ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig) {
    this._layer7DdosDefenseConfig.internalValue = value;
  }
  public resetLayer7DdosDefenseConfig() {
    this._layer7DdosDefenseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer7DdosDefenseConfigInput() {
    return this._layer7DdosDefenseConfig.internalValue;
  }
}
export interface ComputeSecurityPolicyAdvancedOptionsConfig {
  /**
  * JSON body parsing. Supported values include: "DISABLED", "STANDARD".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#json_parsing ComputeSecurityPolicy#json_parsing}
  */
  readonly jsonParsing?: string;
  /**
  * Logging level. Supported values include: "NORMAL", "VERBOSE".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#log_level ComputeSecurityPolicy#log_level}
  */
  readonly logLevel?: string;
}

export function computeSecurityPolicyAdvancedOptionsConfigToTerraform(struct?: ComputeSecurityPolicyAdvancedOptionsConfigOutputReference | ComputeSecurityPolicyAdvancedOptionsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_parsing: cdktf.stringToTerraform(struct!.jsonParsing),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}

export class ComputeSecurityPolicyAdvancedOptionsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyAdvancedOptionsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonParsing !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonParsing = this._jsonParsing;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyAdvancedOptionsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonParsing = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonParsing = value.jsonParsing;
      this._logLevel = value.logLevel;
    }
  }

  // json_parsing - computed: true, optional: true, required: false
  private _jsonParsing?: string; 
  public get jsonParsing() {
    return this.getStringAttribute('json_parsing');
  }
  public set jsonParsing(value: string) {
    this._jsonParsing = value;
  }
  public resetJsonParsing() {
    this._jsonParsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonParsingInput() {
    return this._jsonParsing;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface ComputeSecurityPolicyRuleMatchConfig {
  /**
  * Set of IP addresses or ranges (IPV4 or IPV6) in CIDR notation to match against inbound traffic. There is a limit of 10 IP ranges per rule. A value of '*' matches all IPs (can be used to override the default behavior).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#src_ip_ranges ComputeSecurityPolicy#src_ip_ranges}
  */
  readonly srcIpRanges: string[];
}

export function computeSecurityPolicyRuleMatchConfigToTerraform(struct?: ComputeSecurityPolicyRuleMatchConfigOutputReference | ComputeSecurityPolicyRuleMatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcIpRanges),
  }
}

export class ComputeSecurityPolicyRuleMatchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleMatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpRanges = this._srcIpRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRuleMatchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcIpRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcIpRanges = value.srcIpRanges;
    }
  }

  // src_ip_ranges - computed: false, optional: false, required: true
  private _srcIpRanges?: string[]; 
  public get srcIpRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('src_ip_ranges'));
  }
  public set srcIpRanges(value: string[]) {
    this._srcIpRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpRangesInput() {
    return this._srcIpRanges;
  }
}
export interface ComputeSecurityPolicyRuleMatchExpr {
  /**
  * Textual representation of an expression in Common Expression Language syntax. The application context of the containing message determines which well-known feature set of CEL is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#expression ComputeSecurityPolicy#expression}
  */
  readonly expression: string;
}

export function computeSecurityPolicyRuleMatchExprToTerraform(struct?: ComputeSecurityPolicyRuleMatchExprOutputReference | ComputeSecurityPolicyRuleMatchExpr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export class ComputeSecurityPolicyRuleMatchExprOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleMatchExpr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRuleMatchExpr | undefined) {
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
export interface ComputeSecurityPolicyRuleMatch {
  /**
  * Predefined rule expression. If this field is specified, config must also be specified. Available options:   SRC_IPS_V1: Must specify the corresponding src_ip_ranges field in config.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#versioned_expr ComputeSecurityPolicy#versioned_expr}
  */
  readonly versionedExpr?: string;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#config ComputeSecurityPolicy#config}
  */
  readonly config?: ComputeSecurityPolicyRuleMatchConfig;
  /**
  * expr block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#expr ComputeSecurityPolicy#expr}
  */
  readonly expr?: ComputeSecurityPolicyRuleMatchExpr;
}

export function computeSecurityPolicyRuleMatchToTerraform(struct?: ComputeSecurityPolicyRuleMatchOutputReference | ComputeSecurityPolicyRuleMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    versioned_expr: cdktf.stringToTerraform(struct!.versionedExpr),
    config: computeSecurityPolicyRuleMatchConfigToTerraform(struct!.config),
    expr: computeSecurityPolicyRuleMatchExprToTerraform(struct!.expr),
  }
}

export class ComputeSecurityPolicyRuleMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleMatch | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRuleMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._versionedExpr = undefined;
      this._config.internalValue = undefined;
      this._expr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._versionedExpr = value.versionedExpr;
      this._config.internalValue = value.config;
      this._expr.internalValue = value.expr;
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
  private _config = new ComputeSecurityPolicyRuleMatchConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ComputeSecurityPolicyRuleMatchConfig) {
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
  private _expr = new ComputeSecurityPolicyRuleMatchExprOutputReference(this, "expr");
  public get expr() {
    return this._expr;
  }
  public putExpr(value: ComputeSecurityPolicyRuleMatchExpr) {
    this._expr.internalValue = value;
  }
  public resetExpr() {
    this._expr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr.internalValue;
  }
}
export interface ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold {
  /**
  * Number of HTTP(S) requests for calculating the threshold.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#count ComputeSecurityPolicy#count}
  */
  readonly count: number;
  /**
  * Interval over which the threshold is computed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#interval_sec ComputeSecurityPolicy#interval_sec}
  */
  readonly intervalSec: number;
}

export function computeSecurityPolicyRuleRateLimitOptionsBanThresholdToTerraform(struct?: ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference | ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval_sec: cdktf.numberToTerraform(struct!.intervalSec),
  }
}

export class ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold | undefined {
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

  public set internalValue(value: ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold | undefined) {
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

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval_sec - computed: false, optional: false, required: true
  private _intervalSec?: number; 
  public get intervalSec() {
    return this.getNumberAttribute('interval_sec');
  }
  public set intervalSec(value: number) {
    this._intervalSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecInput() {
    return this._intervalSec;
  }
}
export interface ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions {
  /**
  * Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#target ComputeSecurityPolicy#target}
  */
  readonly target?: string;
  /**
  * Type of the redirect action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#type ComputeSecurityPolicy#type}
  */
  readonly type: string;
}

export function computeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsToTerraform(struct?: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference | ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions | undefined {
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

  public set internalValue(value: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions | undefined) {
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold {
  /**
  * Number of HTTP(S) requests for calculating the threshold.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#count ComputeSecurityPolicy#count}
  */
  readonly count: number;
  /**
  * Interval over which the threshold is computed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#interval_sec ComputeSecurityPolicy#interval_sec}
  */
  readonly intervalSec: number;
}

export function computeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdToTerraform(struct?: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference | ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval_sec: cdktf.numberToTerraform(struct!.intervalSec),
  }
}

export class ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold | undefined {
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

  public set internalValue(value: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold | undefined) {
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

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval_sec - computed: false, optional: false, required: true
  private _intervalSec?: number; 
  public get intervalSec() {
    return this.getNumberAttribute('interval_sec');
  }
  public set intervalSec(value: number) {
    this._intervalSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecInput() {
    return this._intervalSec;
  }
}
export interface ComputeSecurityPolicyRuleRateLimitOptions {
  /**
  * Can only be specified if the action for the rule is "rate_based_ban". If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#ban_duration_sec ComputeSecurityPolicy#ban_duration_sec}
  */
  readonly banDurationSec?: number;
  /**
  * Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#conform_action ComputeSecurityPolicy#conform_action}
  */
  readonly conformAction: string;
  /**
  * Determines the key to enforce the rateLimitThreshold on
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#enforce_on_key ComputeSecurityPolicy#enforce_on_key}
  */
  readonly enforceOnKey?: string;
  /**
  * Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#enforce_on_key_name ComputeSecurityPolicy#enforce_on_key_name}
  */
  readonly enforceOnKeyName?: string;
  /**
  * Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint. Valid options are "deny()" where valid values for status are 403, 404, 429, and 502, and "redirect" where the redirect parameters come from exceedRedirectOptions below.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#exceed_action ComputeSecurityPolicy#exceed_action}
  */
  readonly exceedAction: string;
  /**
  * ban_threshold block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#ban_threshold ComputeSecurityPolicy#ban_threshold}
  */
  readonly banThreshold?: ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold;
  /**
  * exceed_redirect_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#exceed_redirect_options ComputeSecurityPolicy#exceed_redirect_options}
  */
  readonly exceedRedirectOptions?: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions;
  /**
  * rate_limit_threshold block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#rate_limit_threshold ComputeSecurityPolicy#rate_limit_threshold}
  */
  readonly rateLimitThreshold: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold;
}

export function computeSecurityPolicyRuleRateLimitOptionsToTerraform(struct?: ComputeSecurityPolicyRuleRateLimitOptionsOutputReference | ComputeSecurityPolicyRuleRateLimitOptions): any {
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
    ban_threshold: computeSecurityPolicyRuleRateLimitOptionsBanThresholdToTerraform(struct!.banThreshold),
    exceed_redirect_options: computeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsToTerraform(struct!.exceedRedirectOptions),
    rate_limit_threshold: computeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdToTerraform(struct!.rateLimitThreshold),
  }
}

export class ComputeSecurityPolicyRuleRateLimitOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleRateLimitOptions | undefined {
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

  public set internalValue(value: ComputeSecurityPolicyRuleRateLimitOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._banDurationSec = undefined;
      this._conformAction = undefined;
      this._enforceOnKey = undefined;
      this._enforceOnKeyName = undefined;
      this._exceedAction = undefined;
      this._banThreshold.internalValue = undefined;
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

  // conform_action - computed: false, optional: false, required: true
  private _conformAction?: string; 
  public get conformAction() {
    return this.getStringAttribute('conform_action');
  }
  public set conformAction(value: string) {
    this._conformAction = value;
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

  // exceed_action - computed: false, optional: false, required: true
  private _exceedAction?: string; 
  public get exceedAction() {
    return this.getStringAttribute('exceed_action');
  }
  public set exceedAction(value: string) {
    this._exceedAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionInput() {
    return this._exceedAction;
  }

  // ban_threshold - computed: false, optional: true, required: false
  private _banThreshold = new ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference(this, "ban_threshold");
  public get banThreshold() {
    return this._banThreshold;
  }
  public putBanThreshold(value: ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold) {
    this._banThreshold.internalValue = value;
  }
  public resetBanThreshold() {
    this._banThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get banThresholdInput() {
    return this._banThreshold.internalValue;
  }

  // exceed_redirect_options - computed: false, optional: true, required: false
  private _exceedRedirectOptions = new ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference(this, "exceed_redirect_options");
  public get exceedRedirectOptions() {
    return this._exceedRedirectOptions;
  }
  public putExceedRedirectOptions(value: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions) {
    this._exceedRedirectOptions.internalValue = value;
  }
  public resetExceedRedirectOptions() {
    this._exceedRedirectOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedRedirectOptionsInput() {
    return this._exceedRedirectOptions.internalValue;
  }

  // rate_limit_threshold - computed: false, optional: false, required: true
  private _rateLimitThreshold = new ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference(this, "rate_limit_threshold");
  public get rateLimitThreshold() {
    return this._rateLimitThreshold;
  }
  public putRateLimitThreshold(value: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold) {
    this._rateLimitThreshold.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitThresholdInput() {
    return this._rateLimitThreshold.internalValue;
  }
}
export interface ComputeSecurityPolicyRuleRedirectOptions {
  /**
  * Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#target ComputeSecurityPolicy#target}
  */
  readonly target?: string;
  /**
  * Type of the redirect action. Available options: EXTERNAL_302: Must specify the corresponding target field in config. GOOGLE_RECAPTCHA: Cannot specify target field in config.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#type ComputeSecurityPolicy#type}
  */
  readonly type: string;
}

export function computeSecurityPolicyRuleRedirectOptionsToTerraform(struct?: ComputeSecurityPolicyRuleRedirectOptionsOutputReference | ComputeSecurityPolicyRuleRedirectOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ComputeSecurityPolicyRuleRedirectOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyRuleRedirectOptions | undefined {
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

  public set internalValue(value: ComputeSecurityPolicyRuleRedirectOptions | undefined) {
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ComputeSecurityPolicyRule {
  /**
  * Action to take when match matches the request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#action ComputeSecurityPolicy#action}
  */
  readonly action: string;
  /**
  * An optional description of this rule. Max size is 64.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#description ComputeSecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * When set to true, the action specified above is not enforced. Stackdriver logs for requests that trigger a preview action are annotated as such.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#preview ComputeSecurityPolicy#preview}
  */
  readonly preview?: boolean | cdktf.IResolvable;
  /**
  * An unique positive integer indicating the priority of evaluation for a rule. Rules are evaluated from highest priority (lowest numerically) to lowest priority (highest numerically) in order.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#priority ComputeSecurityPolicy#priority}
  */
  readonly priority: number;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#match ComputeSecurityPolicy#match}
  */
  readonly match: ComputeSecurityPolicyRuleMatch;
  /**
  * rate_limit_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#rate_limit_options ComputeSecurityPolicy#rate_limit_options}
  */
  readonly rateLimitOptions?: ComputeSecurityPolicyRuleRateLimitOptions;
  /**
  * redirect_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#redirect_options ComputeSecurityPolicy#redirect_options}
  */
  readonly redirectOptions?: ComputeSecurityPolicyRuleRedirectOptions;
}

export function computeSecurityPolicyRuleToTerraform(struct?: ComputeSecurityPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    preview: cdktf.booleanToTerraform(struct!.preview),
    priority: cdktf.numberToTerraform(struct!.priority),
    match: computeSecurityPolicyRuleMatchToTerraform(struct!.match),
    rate_limit_options: computeSecurityPolicyRuleRateLimitOptionsToTerraform(struct!.rateLimitOptions),
    redirect_options: computeSecurityPolicyRuleRedirectOptionsToTerraform(struct!.redirectOptions),
  }
}

export class ComputeSecurityPolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeSecurityPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._preview !== undefined) {
      hasAnyValues = true;
      internalValueResult.preview = this._preview;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._rateLimitOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitOptions = this._rateLimitOptions?.internalValue;
    }
    if (this._redirectOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectOptions = this._redirectOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSecurityPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._preview = undefined;
      this._priority = undefined;
      this._match.internalValue = undefined;
      this._rateLimitOptions.internalValue = undefined;
      this._redirectOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._preview = value.preview;
      this._priority = value.priority;
      this._match.internalValue = value.match;
      this._rateLimitOptions.internalValue = value.rateLimitOptions;
      this._redirectOptions.internalValue = value.redirectOptions;
    }
  }

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

  // preview - computed: true, optional: true, required: false
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

  // match - computed: false, optional: false, required: true
  private _match = new ComputeSecurityPolicyRuleMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: ComputeSecurityPolicyRuleMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // rate_limit_options - computed: false, optional: true, required: false
  private _rateLimitOptions = new ComputeSecurityPolicyRuleRateLimitOptionsOutputReference(this, "rate_limit_options");
  public get rateLimitOptions() {
    return this._rateLimitOptions;
  }
  public putRateLimitOptions(value: ComputeSecurityPolicyRuleRateLimitOptions) {
    this._rateLimitOptions.internalValue = value;
  }
  public resetRateLimitOptions() {
    this._rateLimitOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitOptionsInput() {
    return this._rateLimitOptions.internalValue;
  }

  // redirect_options - computed: false, optional: true, required: false
  private _redirectOptions = new ComputeSecurityPolicyRuleRedirectOptionsOutputReference(this, "redirect_options");
  public get redirectOptions() {
    return this._redirectOptions;
  }
  public putRedirectOptions(value: ComputeSecurityPolicyRuleRedirectOptions) {
    this._redirectOptions.internalValue = value;
  }
  public resetRedirectOptions() {
    this._redirectOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectOptionsInput() {
    return this._redirectOptions.internalValue;
  }
}

export class ComputeSecurityPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : ComputeSecurityPolicyRule[] | cdktf.IResolvable

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
  public get(index: number): ComputeSecurityPolicyRuleOutputReference {
    return new ComputeSecurityPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeSecurityPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#create ComputeSecurityPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#delete ComputeSecurityPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy#update ComputeSecurityPolicy#update}
  */
  readonly update?: string;
}

export function computeSecurityPolicyTimeoutsToTerraform(struct?: ComputeSecurityPolicyTimeoutsOutputReference | ComputeSecurityPolicyTimeouts | cdktf.IResolvable): any {
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

export class ComputeSecurityPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSecurityPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeSecurityPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy google_compute_security_policy}
*/
export class ComputeSecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_security_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_security_policy google_compute_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.0'
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
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._type = config.type;
    this._adaptiveProtectionConfig.internalValue = config.adaptiveProtectionConfig;
    this._advancedOptionsConfig.internalValue = config.advancedOptionsConfig;
    this._rule.internalValue = config.rule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // type - computed: true, optional: true, required: false
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

  // adaptive_protection_config - computed: false, optional: true, required: false
  private _adaptiveProtectionConfig = new ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference(this, "adaptive_protection_config");
  public get adaptiveProtectionConfig() {
    return this._adaptiveProtectionConfig;
  }
  public putAdaptiveProtectionConfig(value: ComputeSecurityPolicyAdaptiveProtectionConfig) {
    this._adaptiveProtectionConfig.internalValue = value;
  }
  public resetAdaptiveProtectionConfig() {
    this._adaptiveProtectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveProtectionConfigInput() {
    return this._adaptiveProtectionConfig.internalValue;
  }

  // advanced_options_config - computed: false, optional: true, required: false
  private _advancedOptionsConfig = new ComputeSecurityPolicyAdvancedOptionsConfigOutputReference(this, "advanced_options_config");
  public get advancedOptionsConfig() {
    return this._advancedOptionsConfig;
  }
  public putAdvancedOptionsConfig(value: ComputeSecurityPolicyAdvancedOptionsConfig) {
    this._advancedOptionsConfig.internalValue = value;
  }
  public resetAdvancedOptionsConfig() {
    this._advancedOptionsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsConfigInput() {
    return this._advancedOptionsConfig.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new ComputeSecurityPolicyRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ComputeSecurityPolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeSecurityPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeSecurityPolicyTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      type: cdktf.stringToTerraform(this._type),
      adaptive_protection_config: computeSecurityPolicyAdaptiveProtectionConfigToTerraform(this._adaptiveProtectionConfig.internalValue),
      advanced_options_config: computeSecurityPolicyAdvancedOptionsConfigToTerraform(this._advancedOptionsConfig.internalValue),
      rule: cdktf.listMapper(computeSecurityPolicyRuleToTerraform, true)(this._rule.internalValue),
      timeouts: computeSecurityPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
