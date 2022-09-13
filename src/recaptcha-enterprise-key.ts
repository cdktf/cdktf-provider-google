// https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RecaptchaEnterpriseKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-readable display name of this key. Modifiable by user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#display_name RecaptchaEnterpriseKey#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#id RecaptchaEnterpriseKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#labels RecaptchaEnterpriseKey#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#project RecaptchaEnterpriseKey#project}
  */
  readonly project?: string;
  /**
  * android_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#android_settings RecaptchaEnterpriseKey#android_settings}
  */
  readonly androidSettings?: RecaptchaEnterpriseKeyAndroidSettings;
  /**
  * ios_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#ios_settings RecaptchaEnterpriseKey#ios_settings}
  */
  readonly iosSettings?: RecaptchaEnterpriseKeyIosSettings;
  /**
  * testing_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#testing_options RecaptchaEnterpriseKey#testing_options}
  */
  readonly testingOptions?: RecaptchaEnterpriseKeyTestingOptions;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#timeouts RecaptchaEnterpriseKey#timeouts}
  */
  readonly timeouts?: RecaptchaEnterpriseKeyTimeouts;
  /**
  * web_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#web_settings RecaptchaEnterpriseKey#web_settings}
  */
  readonly webSettings?: RecaptchaEnterpriseKeyWebSettings;
}
export interface RecaptchaEnterpriseKeyAndroidSettings {
  /**
  * If set to true, it means allowed_package_names will not be enforced.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#allow_all_package_names RecaptchaEnterpriseKey#allow_all_package_names}
  */
  readonly allowAllPackageNames?: boolean | cdktf.IResolvable;
  /**
  * Android package names of apps allowed to use the key. Example: 'com.companyname.appname'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#allowed_package_names RecaptchaEnterpriseKey#allowed_package_names}
  */
  readonly allowedPackageNames?: string[];
}

export function recaptchaEnterpriseKeyAndroidSettingsToTerraform(struct?: RecaptchaEnterpriseKeyAndroidSettingsOutputReference | RecaptchaEnterpriseKeyAndroidSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all_package_names: cdktf.booleanToTerraform(struct!.allowAllPackageNames),
    allowed_package_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedPackageNames),
  }
}

export class RecaptchaEnterpriseKeyAndroidSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecaptchaEnterpriseKeyAndroidSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAllPackageNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllPackageNames = this._allowAllPackageNames;
    }
    if (this._allowedPackageNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedPackageNames = this._allowedPackageNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecaptchaEnterpriseKeyAndroidSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAllPackageNames = undefined;
      this._allowedPackageNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAllPackageNames = value.allowAllPackageNames;
      this._allowedPackageNames = value.allowedPackageNames;
    }
  }

  // allow_all_package_names - computed: false, optional: true, required: false
  private _allowAllPackageNames?: boolean | cdktf.IResolvable; 
  public get allowAllPackageNames() {
    return this.getBooleanAttribute('allow_all_package_names');
  }
  public set allowAllPackageNames(value: boolean | cdktf.IResolvable) {
    this._allowAllPackageNames = value;
  }
  public resetAllowAllPackageNames() {
    this._allowAllPackageNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllPackageNamesInput() {
    return this._allowAllPackageNames;
  }

  // allowed_package_names - computed: false, optional: true, required: false
  private _allowedPackageNames?: string[]; 
  public get allowedPackageNames() {
    return this.getListAttribute('allowed_package_names');
  }
  public set allowedPackageNames(value: string[]) {
    this._allowedPackageNames = value;
  }
  public resetAllowedPackageNames() {
    this._allowedPackageNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPackageNamesInput() {
    return this._allowedPackageNames;
  }
}
export interface RecaptchaEnterpriseKeyIosSettings {
  /**
  * If set to true, it means allowed_bundle_ids will not be enforced.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#allow_all_bundle_ids RecaptchaEnterpriseKey#allow_all_bundle_ids}
  */
  readonly allowAllBundleIds?: boolean | cdktf.IResolvable;
  /**
  * iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#allowed_bundle_ids RecaptchaEnterpriseKey#allowed_bundle_ids}
  */
  readonly allowedBundleIds?: string[];
}

export function recaptchaEnterpriseKeyIosSettingsToTerraform(struct?: RecaptchaEnterpriseKeyIosSettingsOutputReference | RecaptchaEnterpriseKeyIosSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all_bundle_ids: cdktf.booleanToTerraform(struct!.allowAllBundleIds),
    allowed_bundle_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedBundleIds),
  }
}

export class RecaptchaEnterpriseKeyIosSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecaptchaEnterpriseKeyIosSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAllBundleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllBundleIds = this._allowAllBundleIds;
    }
    if (this._allowedBundleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedBundleIds = this._allowedBundleIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecaptchaEnterpriseKeyIosSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAllBundleIds = undefined;
      this._allowedBundleIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAllBundleIds = value.allowAllBundleIds;
      this._allowedBundleIds = value.allowedBundleIds;
    }
  }

  // allow_all_bundle_ids - computed: false, optional: true, required: false
  private _allowAllBundleIds?: boolean | cdktf.IResolvable; 
  public get allowAllBundleIds() {
    return this.getBooleanAttribute('allow_all_bundle_ids');
  }
  public set allowAllBundleIds(value: boolean | cdktf.IResolvable) {
    this._allowAllBundleIds = value;
  }
  public resetAllowAllBundleIds() {
    this._allowAllBundleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllBundleIdsInput() {
    return this._allowAllBundleIds;
  }

  // allowed_bundle_ids - computed: false, optional: true, required: false
  private _allowedBundleIds?: string[]; 
  public get allowedBundleIds() {
    return this.getListAttribute('allowed_bundle_ids');
  }
  public set allowedBundleIds(value: string[]) {
    this._allowedBundleIds = value;
  }
  public resetAllowedBundleIds() {
    this._allowedBundleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedBundleIdsInput() {
    return this._allowedBundleIds;
  }
}
export interface RecaptchaEnterpriseKeyTestingOptions {
  /**
  * For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE. Possible values: TESTING_CHALLENGE_UNSPECIFIED, NOCAPTCHA, UNSOLVABLE_CHALLENGE
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#testing_challenge RecaptchaEnterpriseKey#testing_challenge}
  */
  readonly testingChallenge?: string;
  /**
  * All assessments for this Key will return this score. Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#testing_score RecaptchaEnterpriseKey#testing_score}
  */
  readonly testingScore?: number;
}

export function recaptchaEnterpriseKeyTestingOptionsToTerraform(struct?: RecaptchaEnterpriseKeyTestingOptionsOutputReference | RecaptchaEnterpriseKeyTestingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    testing_challenge: cdktf.stringToTerraform(struct!.testingChallenge),
    testing_score: cdktf.numberToTerraform(struct!.testingScore),
  }
}

export class RecaptchaEnterpriseKeyTestingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecaptchaEnterpriseKeyTestingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testingChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.testingChallenge = this._testingChallenge;
    }
    if (this._testingScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.testingScore = this._testingScore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecaptchaEnterpriseKeyTestingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._testingChallenge = undefined;
      this._testingScore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._testingChallenge = value.testingChallenge;
      this._testingScore = value.testingScore;
    }
  }

  // testing_challenge - computed: true, optional: true, required: false
  private _testingChallenge?: string; 
  public get testingChallenge() {
    return this.getStringAttribute('testing_challenge');
  }
  public set testingChallenge(value: string) {
    this._testingChallenge = value;
  }
  public resetTestingChallenge() {
    this._testingChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testingChallengeInput() {
    return this._testingChallenge;
  }

  // testing_score - computed: false, optional: true, required: false
  private _testingScore?: number; 
  public get testingScore() {
    return this.getNumberAttribute('testing_score');
  }
  public set testingScore(value: number) {
    this._testingScore = value;
  }
  public resetTestingScore() {
    this._testingScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testingScoreInput() {
    return this._testingScore;
  }
}
export interface RecaptchaEnterpriseKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#create RecaptchaEnterpriseKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#delete RecaptchaEnterpriseKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#update RecaptchaEnterpriseKey#update}
  */
  readonly update?: string;
}

export function recaptchaEnterpriseKeyTimeoutsToTerraform(struct?: RecaptchaEnterpriseKeyTimeoutsOutputReference | RecaptchaEnterpriseKeyTimeouts | cdktf.IResolvable): any {
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

export class RecaptchaEnterpriseKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecaptchaEnterpriseKeyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RecaptchaEnterpriseKeyTimeouts | cdktf.IResolvable | undefined) {
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
export interface RecaptchaEnterpriseKeyWebSettings {
  /**
  * If set to true, it means allowed_domains will not be enforced.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#allow_all_domains RecaptchaEnterpriseKey#allow_all_domains}
  */
  readonly allowAllDomains?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#allow_amp_traffic RecaptchaEnterpriseKey#allow_amp_traffic}
  */
  readonly allowAmpTraffic?: boolean | cdktf.IResolvable;
  /**
  * Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#allowed_domains RecaptchaEnterpriseKey#allowed_domains}
  */
  readonly allowedDomains?: string[];
  /**
  * Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#challenge_security_preference RecaptchaEnterpriseKey#challenge_security_preference}
  */
  readonly challengeSecurityPreference?: string;
  /**
  * Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key#integration_type RecaptchaEnterpriseKey#integration_type}
  */
  readonly integrationType: string;
}

export function recaptchaEnterpriseKeyWebSettingsToTerraform(struct?: RecaptchaEnterpriseKeyWebSettingsOutputReference | RecaptchaEnterpriseKeyWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all_domains: cdktf.booleanToTerraform(struct!.allowAllDomains),
    allow_amp_traffic: cdktf.booleanToTerraform(struct!.allowAmpTraffic),
    allowed_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedDomains),
    challenge_security_preference: cdktf.stringToTerraform(struct!.challengeSecurityPreference),
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
  }
}

export class RecaptchaEnterpriseKeyWebSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecaptchaEnterpriseKeyWebSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAllDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllDomains = this._allowAllDomains;
    }
    if (this._allowAmpTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAmpTraffic = this._allowAmpTraffic;
    }
    if (this._allowedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDomains = this._allowedDomains;
    }
    if (this._challengeSecurityPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeSecurityPreference = this._challengeSecurityPreference;
    }
    if (this._integrationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationType = this._integrationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecaptchaEnterpriseKeyWebSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAllDomains = undefined;
      this._allowAmpTraffic = undefined;
      this._allowedDomains = undefined;
      this._challengeSecurityPreference = undefined;
      this._integrationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAllDomains = value.allowAllDomains;
      this._allowAmpTraffic = value.allowAmpTraffic;
      this._allowedDomains = value.allowedDomains;
      this._challengeSecurityPreference = value.challengeSecurityPreference;
      this._integrationType = value.integrationType;
    }
  }

  // allow_all_domains - computed: false, optional: true, required: false
  private _allowAllDomains?: boolean | cdktf.IResolvable; 
  public get allowAllDomains() {
    return this.getBooleanAttribute('allow_all_domains');
  }
  public set allowAllDomains(value: boolean | cdktf.IResolvable) {
    this._allowAllDomains = value;
  }
  public resetAllowAllDomains() {
    this._allowAllDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllDomainsInput() {
    return this._allowAllDomains;
  }

  // allow_amp_traffic - computed: false, optional: true, required: false
  private _allowAmpTraffic?: boolean | cdktf.IResolvable; 
  public get allowAmpTraffic() {
    return this.getBooleanAttribute('allow_amp_traffic');
  }
  public set allowAmpTraffic(value: boolean | cdktf.IResolvable) {
    this._allowAmpTraffic = value;
  }
  public resetAllowAmpTraffic() {
    this._allowAmpTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAmpTrafficInput() {
    return this._allowAmpTraffic;
  }

  // allowed_domains - computed: false, optional: true, required: false
  private _allowedDomains?: string[]; 
  public get allowedDomains() {
    return this.getListAttribute('allowed_domains');
  }
  public set allowedDomains(value: string[]) {
    this._allowedDomains = value;
  }
  public resetAllowedDomains() {
    this._allowedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains;
  }

  // challenge_security_preference - computed: true, optional: true, required: false
  private _challengeSecurityPreference?: string; 
  public get challengeSecurityPreference() {
    return this.getStringAttribute('challenge_security_preference');
  }
  public set challengeSecurityPreference(value: string) {
    this._challengeSecurityPreference = value;
  }
  public resetChallengeSecurityPreference() {
    this._challengeSecurityPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeSecurityPreferenceInput() {
    return this._challengeSecurityPreference;
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key google_recaptcha_enterprise_key}
*/
export class RecaptchaEnterpriseKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_recaptcha_enterprise_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/recaptcha_enterprise_key google_recaptcha_enterprise_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RecaptchaEnterpriseKeyConfig
  */
  public constructor(scope: Construct, id: string, config: RecaptchaEnterpriseKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_recaptcha_enterprise_key',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._project = config.project;
    this._androidSettings.internalValue = config.androidSettings;
    this._iosSettings.internalValue = config.iosSettings;
    this._testingOptions.internalValue = config.testingOptions;
    this._timeouts.internalValue = config.timeouts;
    this._webSettings.internalValue = config.webSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // android_settings - computed: false, optional: true, required: false
  private _androidSettings = new RecaptchaEnterpriseKeyAndroidSettingsOutputReference(this, "android_settings");
  public get androidSettings() {
    return this._androidSettings;
  }
  public putAndroidSettings(value: RecaptchaEnterpriseKeyAndroidSettings) {
    this._androidSettings.internalValue = value;
  }
  public resetAndroidSettings() {
    this._androidSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get androidSettingsInput() {
    return this._androidSettings.internalValue;
  }

  // ios_settings - computed: false, optional: true, required: false
  private _iosSettings = new RecaptchaEnterpriseKeyIosSettingsOutputReference(this, "ios_settings");
  public get iosSettings() {
    return this._iosSettings;
  }
  public putIosSettings(value: RecaptchaEnterpriseKeyIosSettings) {
    this._iosSettings.internalValue = value;
  }
  public resetIosSettings() {
    this._iosSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iosSettingsInput() {
    return this._iosSettings.internalValue;
  }

  // testing_options - computed: false, optional: true, required: false
  private _testingOptions = new RecaptchaEnterpriseKeyTestingOptionsOutputReference(this, "testing_options");
  public get testingOptions() {
    return this._testingOptions;
  }
  public putTestingOptions(value: RecaptchaEnterpriseKeyTestingOptions) {
    this._testingOptions.internalValue = value;
  }
  public resetTestingOptions() {
    this._testingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testingOptionsInput() {
    return this._testingOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RecaptchaEnterpriseKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RecaptchaEnterpriseKeyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // web_settings - computed: false, optional: true, required: false
  private _webSettings = new RecaptchaEnterpriseKeyWebSettingsOutputReference(this, "web_settings");
  public get webSettings() {
    return this._webSettings;
  }
  public putWebSettings(value: RecaptchaEnterpriseKeyWebSettings) {
    this._webSettings.internalValue = value;
  }
  public resetWebSettings() {
    this._webSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSettingsInput() {
    return this._webSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      project: cdktf.stringToTerraform(this._project),
      android_settings: recaptchaEnterpriseKeyAndroidSettingsToTerraform(this._androidSettings.internalValue),
      ios_settings: recaptchaEnterpriseKeyIosSettingsToTerraform(this._iosSettings.internalValue),
      testing_options: recaptchaEnterpriseKeyTestingOptionsToTerraform(this._testingOptions.internalValue),
      timeouts: recaptchaEnterpriseKeyTimeoutsToTerraform(this._timeouts.internalValue),
      web_settings: recaptchaEnterpriseKeyWebSettingsToTerraform(this._webSettings.internalValue),
    };
  }
}
