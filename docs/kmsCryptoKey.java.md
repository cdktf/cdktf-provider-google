# `google_kms_crypto_key`

Refer to the Terraform Registory for docs: [`google_kms_crypto_key`](https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key).

# `kmsCryptoKey` Submodule <a name="`kmsCryptoKey` Submodule" id="@cdktf/provider-google.kmsCryptoKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsCryptoKey <a name="KmsCryptoKey" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key google_kms_crypto_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.kms_crypto_key.KmsCryptoKey;

KmsCryptoKey.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .keyRing(java.lang.String)
    .name(java.lang.String)
//  .destroyScheduledDuration(java.lang.String)
//  .id(java.lang.String)
//  .importOnly(java.lang.Boolean)
//  .importOnly(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .purpose(java.lang.String)
//  .rotationPeriod(java.lang.String)
//  .skipInitialVersionCreation(java.lang.Boolean)
//  .skipInitialVersionCreation(IResolvable)
//  .timeouts(KmsCryptoKeyTimeouts)
//  .versionTemplate(KmsCryptoKeyVersionTemplate)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.keyRing">keyRing</a></code> | <code>java.lang.String</code> | The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name for the CryptoKey. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.destroyScheduledDuration">destroyScheduledDuration</a></code> | <code>java.lang.String</code> | The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#id KmsCryptoKey#id}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.importOnly">importOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this key may contain imported versions only. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels with user-defined metadata to apply to this resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.purpose">purpose</a></code> | <code>java.lang.String</code> | The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT". |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.String</code> | Every time this period passes, generate a new CryptoKeyVersion and set it as the primary. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.skipInitialVersionCreation">skipInitialVersionCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the request will create a CryptoKey without any CryptoKeyVersions. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.versionTemplate">versionTemplate</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a></code> | version_template block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.keyRing"></a>

- *Type:* java.lang.String

The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#key_ring KmsCryptoKey#key_ring}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name for the CryptoKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#name KmsCryptoKey#name}

---

##### `destroyScheduledDuration`<sup>Optional</sup> <a name="destroyScheduledDuration" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.destroyScheduledDuration"></a>

- *Type:* java.lang.String

The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.

If not specified at creation time, the default duration is 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#destroy_scheduled_duration KmsCryptoKey#destroy_scheduled_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#id KmsCryptoKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importOnly`<sup>Optional</sup> <a name="importOnly" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.importOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this key may contain imported versions only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#import_only KmsCryptoKey#import_only}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels with user-defined metadata to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#labels KmsCryptoKey#labels}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.purpose"></a>

- *Type:* java.lang.String

The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#purpose KmsCryptoKey#purpose}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.rotationPeriod"></a>

- *Type:* java.lang.String

Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.

The first rotation will take place after the specified period. The rotation period has
the format of a decimal number with up to 9 fractional digits, followed by the
letter 's' (seconds). It must be greater than a day (ie, 86400).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#rotation_period KmsCryptoKey#rotation_period}

---

##### `skipInitialVersionCreation`<sup>Optional</sup> <a name="skipInitialVersionCreation" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.skipInitialVersionCreation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the request will create a CryptoKey without any CryptoKeyVersions.

You must use the 'google_kms_key_ring_import_job' resource to import the CryptoKeyVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#skip_initial_version_creation KmsCryptoKey#skip_initial_version_creation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#timeouts KmsCryptoKey#timeouts}

---

##### `versionTemplate`<sup>Optional</sup> <a name="versionTemplate" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.Initializer.parameter.versionTemplate"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a>

version_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#version_template KmsCryptoKey#version_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putVersionTemplate">putVersionTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetDestroyScheduledDuration">resetDestroyScheduledDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetImportOnly">resetImportOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetSkipInitialVersionCreation">resetSkipInitialVersionCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetVersionTemplate">resetVersionTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putTimeouts"></a>

```java
public void putTimeouts(KmsCryptoKeyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a>

---

##### `putVersionTemplate` <a name="putVersionTemplate" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putVersionTemplate"></a>

```java
public void putVersionTemplate(KmsCryptoKeyVersionTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.putVersionTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a>

---

##### `resetDestroyScheduledDuration` <a name="resetDestroyScheduledDuration" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetDestroyScheduledDuration"></a>

```java
public void resetDestroyScheduledDuration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetId"></a>

```java
public void resetId()
```

##### `resetImportOnly` <a name="resetImportOnly" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetImportOnly"></a>

```java
public void resetImportOnly()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPurpose` <a name="resetPurpose" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetPurpose"></a>

```java
public void resetPurpose()
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetRotationPeriod"></a>

```java
public void resetRotationPeriod()
```

##### `resetSkipInitialVersionCreation` <a name="resetSkipInitialVersionCreation" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetSkipInitialVersionCreation"></a>

```java
public void resetSkipInitialVersionCreation()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersionTemplate` <a name="resetVersionTemplate" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.resetVersionTemplate"></a>

```java
public void resetVersionTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.kms_crypto_key.KmsCryptoKey;

KmsCryptoKey.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.kms_crypto_key.KmsCryptoKey;

KmsCryptoKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.kms_crypto_key.KmsCryptoKey;

KmsCryptoKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference">KmsCryptoKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.versionTemplate">versionTemplate</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference">KmsCryptoKeyVersionTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.destroyScheduledDurationInput">destroyScheduledDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.importOnlyInput">importOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.keyRingInput">keyRingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.purposeInput">purposeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.skipInitialVersionCreationInput">skipInitialVersionCreationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.versionTemplateInput">versionTemplateInput</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.destroyScheduledDuration">destroyScheduledDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.importOnly">importOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.keyRing">keyRing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.purpose">purpose</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.skipInitialVersionCreation">skipInitialVersionCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.timeouts"></a>

```java
public KmsCryptoKeyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference">KmsCryptoKeyTimeoutsOutputReference</a>

---

##### `versionTemplate`<sup>Required</sup> <a name="versionTemplate" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.versionTemplate"></a>

```java
public KmsCryptoKeyVersionTemplateOutputReference getVersionTemplate();
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference">KmsCryptoKeyVersionTemplateOutputReference</a>

---

##### `destroyScheduledDurationInput`<sup>Optional</sup> <a name="destroyScheduledDurationInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.destroyScheduledDurationInput"></a>

```java
public java.lang.String getDestroyScheduledDurationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importOnlyInput`<sup>Optional</sup> <a name="importOnlyInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.importOnlyInput"></a>

```java
public java.lang.Object getImportOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyRingInput`<sup>Optional</sup> <a name="keyRingInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.keyRingInput"></a>

```java
public java.lang.String getKeyRingInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.purposeInput"></a>

```java
public java.lang.String getPurposeInput();
```

- *Type:* java.lang.String

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.rotationPeriodInput"></a>

```java
public java.lang.String getRotationPeriodInput();
```

- *Type:* java.lang.String

---

##### `skipInitialVersionCreationInput`<sup>Optional</sup> <a name="skipInitialVersionCreationInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.skipInitialVersionCreationInput"></a>

```java
public java.lang.Object getSkipInitialVersionCreationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a>

---

##### `versionTemplateInput`<sup>Optional</sup> <a name="versionTemplateInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.versionTemplateInput"></a>

```java
public KmsCryptoKeyVersionTemplate getVersionTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a>

---

##### `destroyScheduledDuration`<sup>Required</sup> <a name="destroyScheduledDuration" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.destroyScheduledDuration"></a>

```java
public java.lang.String getDestroyScheduledDuration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importOnly`<sup>Required</sup> <a name="importOnly" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.importOnly"></a>

```java
public java.lang.Object getImportOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.keyRing"></a>

```java
public java.lang.String getKeyRing();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.rotationPeriod"></a>

```java
public java.lang.String getRotationPeriod();
```

- *Type:* java.lang.String

---

##### `skipInitialVersionCreation`<sup>Required</sup> <a name="skipInitialVersionCreation" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.skipInitialVersionCreation"></a>

```java
public java.lang.Object getSkipInitialVersionCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KmsCryptoKeyConfig <a name="KmsCryptoKeyConfig" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.kms_crypto_key.KmsCryptoKeyConfig;

KmsCryptoKeyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .keyRing(java.lang.String)
    .name(java.lang.String)
//  .destroyScheduledDuration(java.lang.String)
//  .id(java.lang.String)
//  .importOnly(java.lang.Boolean)
//  .importOnly(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .purpose(java.lang.String)
//  .rotationPeriod(java.lang.String)
//  .skipInitialVersionCreation(java.lang.Boolean)
//  .skipInitialVersionCreation(IResolvable)
//  .timeouts(KmsCryptoKeyTimeouts)
//  .versionTemplate(KmsCryptoKeyVersionTemplate)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.keyRing">keyRing</a></code> | <code>java.lang.String</code> | The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name for the CryptoKey. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.destroyScheduledDuration">destroyScheduledDuration</a></code> | <code>java.lang.String</code> | The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#id KmsCryptoKey#id}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.importOnly">importOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this key may contain imported versions only. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels with user-defined metadata to apply to this resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.purpose">purpose</a></code> | <code>java.lang.String</code> | The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT". |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.String</code> | Every time this period passes, generate a new CryptoKeyVersion and set it as the primary. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.skipInitialVersionCreation">skipInitialVersionCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the request will create a CryptoKey without any CryptoKeyVersions. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.versionTemplate">versionTemplate</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a></code> | version_template block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.keyRing"></a>

```java
public java.lang.String getKeyRing();
```

- *Type:* java.lang.String

The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#key_ring KmsCryptoKey#key_ring}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name for the CryptoKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#name KmsCryptoKey#name}

---

##### `destroyScheduledDuration`<sup>Optional</sup> <a name="destroyScheduledDuration" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.destroyScheduledDuration"></a>

```java
public java.lang.String getDestroyScheduledDuration();
```

- *Type:* java.lang.String

The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.

If not specified at creation time, the default duration is 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#destroy_scheduled_duration KmsCryptoKey#destroy_scheduled_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#id KmsCryptoKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importOnly`<sup>Optional</sup> <a name="importOnly" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.importOnly"></a>

```java
public java.lang.Object getImportOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this key may contain imported versions only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#import_only KmsCryptoKey#import_only}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels with user-defined metadata to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#labels KmsCryptoKey#labels}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#purpose KmsCryptoKey#purpose}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.rotationPeriod"></a>

```java
public java.lang.String getRotationPeriod();
```

- *Type:* java.lang.String

Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.

The first rotation will take place after the specified period. The rotation period has
the format of a decimal number with up to 9 fractional digits, followed by the
letter 's' (seconds). It must be greater than a day (ie, 86400).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#rotation_period KmsCryptoKey#rotation_period}

---

##### `skipInitialVersionCreation`<sup>Optional</sup> <a name="skipInitialVersionCreation" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.skipInitialVersionCreation"></a>

```java
public java.lang.Object getSkipInitialVersionCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the request will create a CryptoKey without any CryptoKeyVersions.

You must use the 'google_kms_key_ring_import_job' resource to import the CryptoKeyVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#skip_initial_version_creation KmsCryptoKey#skip_initial_version_creation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.timeouts"></a>

```java
public KmsCryptoKeyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#timeouts KmsCryptoKey#timeouts}

---

##### `versionTemplate`<sup>Optional</sup> <a name="versionTemplate" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyConfig.property.versionTemplate"></a>

```java
public KmsCryptoKeyVersionTemplate getVersionTemplate();
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a>

version_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#version_template KmsCryptoKey#version_template}

---

### KmsCryptoKeyTimeouts <a name="KmsCryptoKeyTimeouts" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.kms_crypto_key.KmsCryptoKeyTimeouts;

KmsCryptoKeyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#create KmsCryptoKey#create}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#delete KmsCryptoKey#delete}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#update KmsCryptoKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#create KmsCryptoKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#delete KmsCryptoKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#update KmsCryptoKey#update}.

---

### KmsCryptoKeyVersionTemplate <a name="KmsCryptoKeyVersionTemplate" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.kms_crypto_key.KmsCryptoKeyVersionTemplate;

KmsCryptoKeyVersionTemplate.builder()
    .algorithm(java.lang.String)
//  .protectionLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | The algorithm to use when creating a version based on this template. See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate.property.protectionLevel">protectionLevel</a></code> | <code>java.lang.String</code> | The protection level to use when creating a version based on this template. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

The algorithm to use when creating a version based on this template. See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#algorithm KmsCryptoKey#algorithm}

---

##### `protectionLevel`<sup>Optional</sup> <a name="protectionLevel" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate.property.protectionLevel"></a>

```java
public java.lang.String getProtectionLevel();
```

- *Type:* java.lang.String

The protection level to use when creating a version based on this template.

Possible values include "SOFTWARE", "HSM", "EXTERNAL", "EXTERNAL_VPC". Defaults to "SOFTWARE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/kms_crypto_key#protection_level KmsCryptoKey#protection_level}

---

## Classes <a name="Classes" id="Classes"></a>

### KmsCryptoKeyTimeoutsOutputReference <a name="KmsCryptoKeyTimeoutsOutputReference" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.kms_crypto_key.KmsCryptoKeyTimeoutsOutputReference;

new KmsCryptoKeyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyTimeouts">KmsCryptoKeyTimeouts</a>

---


### KmsCryptoKeyVersionTemplateOutputReference <a name="KmsCryptoKeyVersionTemplateOutputReference" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.kms_crypto_key.KmsCryptoKeyVersionTemplateOutputReference;

new KmsCryptoKeyVersionTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.resetProtectionLevel">resetProtectionLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProtectionLevel` <a name="resetProtectionLevel" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.resetProtectionLevel"></a>

```java
public void resetProtectionLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.protectionLevelInput">protectionLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel">protectionLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `protectionLevelInput`<sup>Optional</sup> <a name="protectionLevelInput" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.protectionLevelInput"></a>

```java
public java.lang.String getProtectionLevelInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel"></a>

```java
public java.lang.String getProtectionLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplateOutputReference.property.internalValue"></a>

```java
public KmsCryptoKeyVersionTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKey.KmsCryptoKeyVersionTemplate">KmsCryptoKeyVersionTemplate</a>

---



