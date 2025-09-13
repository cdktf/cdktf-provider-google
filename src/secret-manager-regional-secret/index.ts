/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretManagerRegionalSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom metadata about the regional secret.
  * 
  * Annotations are distinct from various forms of labels. Annotations exist to allow
  * client tools to store their own state information without requiring a database.
  * 
  * Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of
  * maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and
  * may have dashes (-), underscores (_), dots (.), and alphanumerics in between these
  * symbols.
  * 
  * The total size of annotation keys and values must be less than 16KiB.
  * 
  * An object containing a list of "key": value pairs. Example:
  * { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#annotations SecretManagerRegionalSecret#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Whether Terraform will be prevented from destroying the regional secret. Defaults to false.
  * When the field is set to true in Terraform state, a 'terraform apply'
  * or 'terraform destroy' that would delete the federation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#deletion_protection SecretManagerRegionalSecret#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Timestamp in UTC when the regional secret is scheduled to expire. This is always provided on
  * output, regardless of what was sent on input. A timestamp in RFC3339 UTC "Zulu" format, with
  * nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
  * "2014-10-02T15:01:23.045123456Z". Only one of 'expire_time' or 'ttl' can be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#expire_time SecretManagerRegionalSecret#expire_time}
  */
  readonly expireTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#id SecretManagerRegionalSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels assigned to this regional secret.
  * 
  * Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
  * and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}
  * 
  * Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
  * and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
  * 
  * No more than 64 labels can be assigned to a given resource.
  * 
  * An object containing a list of "key": value pairs. Example:
  * { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#labels SecretManagerRegionalSecret#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the regional secret. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#location SecretManagerRegionalSecret#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#project SecretManagerRegionalSecret#project}
  */
  readonly project?: string;
  /**
  * This must be unique within the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#secret_id SecretManagerRegionalSecret#secret_id}
  */
  readonly secretId: string;
  /**
  * A map of resource manager tags.
  * Resource manager tag keys and values have the same definition as resource manager tags.
  * Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/{tag_value_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#tags SecretManagerRegionalSecret#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The TTL for the regional secret. A duration in seconds with up to nine fractional digits,
  * terminated by 's'. Example: "3.5s". Only one of 'ttl' or 'expire_time' can be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#ttl SecretManagerRegionalSecret#ttl}
  */
  readonly ttl?: string;
  /**
  * Mapping from version alias to version name.
  * 
  * A version alias is a string with a maximum length of 63 characters and can contain
  * uppercase and lowercase letters, numerals, and the hyphen (-) and underscore ('_')
  * characters. An alias string must start with a letter and cannot be the string
  * 'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret.
  * 
  * An object containing a list of "key": value pairs. Example:
  * { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#version_aliases SecretManagerRegionalSecret#version_aliases}
  */
  readonly versionAliases?: { [key: string]: string };
  /**
  * Secret Version TTL after destruction request.
  * This is a part of the delayed delete feature on Secret Version.
  * For secret with versionDestroyTtl>0, version destruction doesn't happen immediately
  * on calling destroy instead the version goes to a disabled state and
  * the actual destruction happens after this TTL expires. It must be atleast 24h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#version_destroy_ttl SecretManagerRegionalSecret#version_destroy_ttl}
  */
  readonly versionDestroyTtl?: string;
  /**
  * customer_managed_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#customer_managed_encryption SecretManagerRegionalSecret#customer_managed_encryption}
  */
  readonly customerManagedEncryption?: SecretManagerRegionalSecretCustomerManagedEncryption;
  /**
  * rotation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#rotation SecretManagerRegionalSecret#rotation}
  */
  readonly rotation?: SecretManagerRegionalSecretRotation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#timeouts SecretManagerRegionalSecret#timeouts}
  */
  readonly timeouts?: SecretManagerRegionalSecretTimeouts;
  /**
  * topics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#topics SecretManagerRegionalSecret#topics}
  */
  readonly topics?: SecretManagerRegionalSecretTopics[] | cdktf.IResolvable;
}
export interface SecretManagerRegionalSecretCustomerManagedEncryption {
  /**
  * The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#kms_key_name SecretManagerRegionalSecret#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function secretManagerRegionalSecretCustomerManagedEncryptionToTerraform(struct?: SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference | SecretManagerRegionalSecretCustomerManagedEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function secretManagerRegionalSecretCustomerManagedEncryptionToHclTerraform(struct?: SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference | SecretManagerRegionalSecretCustomerManagedEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretManagerRegionalSecretCustomerManagedEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretManagerRegionalSecretCustomerManagedEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface SecretManagerRegionalSecretRotation {
  /**
  * Timestamp in UTC at which the Secret is scheduled to rotate.
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
  * fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#next_rotation_time SecretManagerRegionalSecret#next_rotation_time}
  */
  readonly nextRotationTime?: string;
  /**
  * The Duration between rotation notifications. Must be in seconds and at least 3600s (1h)
  * and at most 3153600000s (100 years). If rotationPeriod is set, 'next_rotation_time' must
  * be set. 'next_rotation_time' will be advanced by this period when the service
  * automatically sends rotation notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#rotation_period SecretManagerRegionalSecret#rotation_period}
  */
  readonly rotationPeriod?: string;
}

export function secretManagerRegionalSecretRotationToTerraform(struct?: SecretManagerRegionalSecretRotationOutputReference | SecretManagerRegionalSecretRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_rotation_time: cdktf.stringToTerraform(struct!.nextRotationTime),
    rotation_period: cdktf.stringToTerraform(struct!.rotationPeriod),
  }
}


export function secretManagerRegionalSecretRotationToHclTerraform(struct?: SecretManagerRegionalSecretRotationOutputReference | SecretManagerRegionalSecretRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_rotation_time: {
      value: cdktf.stringToHclTerraform(struct!.nextRotationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotation_period: {
      value: cdktf.stringToHclTerraform(struct!.rotationPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretManagerRegionalSecretRotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretManagerRegionalSecretRotation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextRotationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextRotationTime = this._nextRotationTime;
    }
    if (this._rotationPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationPeriod = this._rotationPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretManagerRegionalSecretRotation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nextRotationTime = undefined;
      this._rotationPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nextRotationTime = value.nextRotationTime;
      this._rotationPeriod = value.rotationPeriod;
    }
  }

  // next_rotation_time - computed: false, optional: true, required: false
  private _nextRotationTime?: string; 
  public get nextRotationTime() {
    return this.getStringAttribute('next_rotation_time');
  }
  public set nextRotationTime(value: string) {
    this._nextRotationTime = value;
  }
  public resetNextRotationTime() {
    this._nextRotationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextRotationTimeInput() {
    return this._nextRotationTime;
  }

  // rotation_period - computed: false, optional: true, required: false
  private _rotationPeriod?: string; 
  public get rotationPeriod() {
    return this.getStringAttribute('rotation_period');
  }
  public set rotationPeriod(value: string) {
    this._rotationPeriod = value;
  }
  public resetRotationPeriod() {
    this._rotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }
}
export interface SecretManagerRegionalSecretTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#create SecretManagerRegionalSecret#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#delete SecretManagerRegionalSecret#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#update SecretManagerRegionalSecret#update}
  */
  readonly update?: string;
}

export function secretManagerRegionalSecretTimeoutsToTerraform(struct?: SecretManagerRegionalSecretTimeouts | cdktf.IResolvable): any {
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


export function secretManagerRegionalSecretTimeoutsToHclTerraform(struct?: SecretManagerRegionalSecretTimeouts | cdktf.IResolvable): any {
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

export class SecretManagerRegionalSecretTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretManagerRegionalSecretTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecretManagerRegionalSecretTimeouts | cdktf.IResolvable | undefined) {
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
export interface SecretManagerRegionalSecretTopics {
  /**
  * The resource name of the Pub/Sub topic that will be published to, in the following format:
  * projects/* /topics/*. For publication to succeed, the Secret Manager Service
  * Agent service account must have pubsub.publisher permissions on the topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#name SecretManagerRegionalSecret#name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly name: string;
}

export function secretManagerRegionalSecretTopicsToTerraform(struct?: SecretManagerRegionalSecretTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function secretManagerRegionalSecretTopicsToHclTerraform(struct?: SecretManagerRegionalSecretTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretManagerRegionalSecretTopicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecretManagerRegionalSecretTopics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretManagerRegionalSecretTopics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class SecretManagerRegionalSecretTopicsList extends cdktf.ComplexList {
  public internalValue? : SecretManagerRegionalSecretTopics[] | cdktf.IResolvable

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
  public get(index: number): SecretManagerRegionalSecretTopicsOutputReference {
    return new SecretManagerRegionalSecretTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret google_secret_manager_regional_secret}
*/
export class SecretManagerRegionalSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_secret_manager_regional_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretManagerRegionalSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretManagerRegionalSecret to import
  * @param importFromId The id of the existing SecretManagerRegionalSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretManagerRegionalSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_secret_manager_regional_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/secret_manager_regional_secret google_secret_manager_regional_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretManagerRegionalSecretConfig
  */
  public constructor(scope: Construct, id: string, config: SecretManagerRegionalSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'google_secret_manager_regional_secret',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.3',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._deletionProtection = config.deletionProtection;
    this._expireTime = config.expireTime;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._secretId = config.secretId;
    this._tags = config.tags;
    this._ttl = config.ttl;
    this._versionAliases = config.versionAliases;
    this._versionDestroyTtl = config.versionDestroyTtl;
    this._customerManagedEncryption.internalValue = config.customerManagedEncryption;
    this._rotation.internalValue = config.rotation;
    this._timeouts.internalValue = config.timeouts;
    this._topics.internalValue = config.topics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // expire_time - computed: true, optional: true, required: false
  private _expireTime?: string; 
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
  public set expireTime(value: string) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
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

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // version_aliases - computed: false, optional: true, required: false
  private _versionAliases?: { [key: string]: string }; 
  public get versionAliases() {
    return this.getStringMapAttribute('version_aliases');
  }
  public set versionAliases(value: { [key: string]: string }) {
    this._versionAliases = value;
  }
  public resetVersionAliases() {
    this._versionAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionAliasesInput() {
    return this._versionAliases;
  }

  // version_destroy_ttl - computed: false, optional: true, required: false
  private _versionDestroyTtl?: string; 
  public get versionDestroyTtl() {
    return this.getStringAttribute('version_destroy_ttl');
  }
  public set versionDestroyTtl(value: string) {
    this._versionDestroyTtl = value;
  }
  public resetVersionDestroyTtl() {
    this._versionDestroyTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionDestroyTtlInput() {
    return this._versionDestroyTtl;
  }

  // customer_managed_encryption - computed: false, optional: true, required: false
  private _customerManagedEncryption = new SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference(this, "customer_managed_encryption");
  public get customerManagedEncryption() {
    return this._customerManagedEncryption;
  }
  public putCustomerManagedEncryption(value: SecretManagerRegionalSecretCustomerManagedEncryption) {
    this._customerManagedEncryption.internalValue = value;
  }
  public resetCustomerManagedEncryption() {
    this._customerManagedEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedEncryptionInput() {
    return this._customerManagedEncryption.internalValue;
  }

  // rotation - computed: false, optional: true, required: false
  private _rotation = new SecretManagerRegionalSecretRotationOutputReference(this, "rotation");
  public get rotation() {
    return this._rotation;
  }
  public putRotation(value: SecretManagerRegionalSecretRotation) {
    this._rotation.internalValue = value;
  }
  public resetRotation() {
    this._rotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationInput() {
    return this._rotation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecretManagerRegionalSecretTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecretManagerRegionalSecretTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // topics - computed: false, optional: true, required: false
  private _topics = new SecretManagerRegionalSecretTopicsList(this, "topics", false);
  public get topics() {
    return this._topics;
  }
  public putTopics(value: SecretManagerRegionalSecretTopics[] | cdktf.IResolvable) {
    this._topics.internalValue = value;
  }
  public resetTopics() {
    this._topics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      expire_time: cdktf.stringToTerraform(this._expireTime),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      secret_id: cdktf.stringToTerraform(this._secretId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      ttl: cdktf.stringToTerraform(this._ttl),
      version_aliases: cdktf.hashMapper(cdktf.stringToTerraform)(this._versionAliases),
      version_destroy_ttl: cdktf.stringToTerraform(this._versionDestroyTtl),
      customer_managed_encryption: secretManagerRegionalSecretCustomerManagedEncryptionToTerraform(this._customerManagedEncryption.internalValue),
      rotation: secretManagerRegionalSecretRotationToTerraform(this._rotation.internalValue),
      timeouts: secretManagerRegionalSecretTimeoutsToTerraform(this._timeouts.internalValue),
      topics: cdktf.listMapper(secretManagerRegionalSecretTopicsToTerraform, true)(this._topics.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expire_time: {
        value: cdktf.stringToHclTerraform(this._expireTime),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_aliases: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._versionAliases),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      version_destroy_ttl: {
        value: cdktf.stringToHclTerraform(this._versionDestroyTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_managed_encryption: {
        value: secretManagerRegionalSecretCustomerManagedEncryptionToHclTerraform(this._customerManagedEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretManagerRegionalSecretCustomerManagedEncryptionList",
      },
      rotation: {
        value: secretManagerRegionalSecretRotationToHclTerraform(this._rotation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretManagerRegionalSecretRotationList",
      },
      timeouts: {
        value: secretManagerRegionalSecretTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretManagerRegionalSecretTimeouts",
      },
      topics: {
        value: cdktf.listMapperHcl(secretManagerRegionalSecretTopicsToHclTerraform, true)(this._topics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretManagerRegionalSecretTopicsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
