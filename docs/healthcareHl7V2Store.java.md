# `google_healthcare_hl7_v2_store`

Refer to the Terraform Registory for docs: [`google_healthcare_hl7_v2_store`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store).

# `healthcareHl7V2Store` Submodule <a name="`healthcareHl7V2Store` Submodule" id="@cdktf/provider-google.healthcareHl7V2Store"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareHl7V2Store <a name="HealthcareHl7V2Store" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store google_healthcare_hl7_v2_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_hl7_v2_store.HealthcareHl7V2Store;

HealthcareHl7V2Store.Builder.create(Construct scope, java.lang.String id)
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
    .dataset(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .notificationConfig(HealthcareHl7V2StoreNotificationConfig)
//  .notificationConfigs(IResolvable)
//  .notificationConfigs(java.util.List<HealthcareHl7V2StoreNotificationConfigs>)
//  .parserConfig(HealthcareHl7V2StoreParserConfig)
//  .timeouts(HealthcareHl7V2StoreTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.dataset">dataset</a></code> | <code>java.lang.String</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name for the Hl7V2Store. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#id HealthcareHl7V2Store#id}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-supplied key-value pairs used to organize HL7v2 stores. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.notificationConfigs">notificationConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>></code> | notification_configs block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.parserConfig">parserConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a></code> | parser_config block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.dataset"></a>

- *Type:* java.lang.String

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#dataset HealthcareHl7V2Store#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name for the Hl7V2Store.

* Changing this property may recreate the Hl7v2 store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#name HealthcareHl7V2Store#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#id HealthcareHl7V2Store#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-supplied key-value pairs used to organize HL7v2 stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#labels HealthcareHl7V2Store#labels}

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.notificationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#notification_config HealthcareHl7V2Store#notification_config}

---

##### `notificationConfigs`<sup>Optional</sup> <a name="notificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.notificationConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>>

notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#notification_configs HealthcareHl7V2Store#notification_configs}

---

##### `parserConfig`<sup>Optional</sup> <a name="parserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.parserConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

parser_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#parser_config HealthcareHl7V2Store#parser_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#timeouts HealthcareHl7V2Store#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfig">putNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfigs">putNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putParserConfig">putParserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetNotificationConfig">resetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetNotificationConfigs">resetNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetParserConfig">resetParserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putNotificationConfig` <a name="putNotificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfig"></a>

```java
public void putNotificationConfig(HealthcareHl7V2StoreNotificationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

---

##### `putNotificationConfigs` <a name="putNotificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfigs"></a>

```java
public void putNotificationConfigs(IResolvable OR java.util.List<HealthcareHl7V2StoreNotificationConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>>

---

##### `putParserConfig` <a name="putParserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putParserConfig"></a>

```java
public void putParserConfig(HealthcareHl7V2StoreParserConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putParserConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putTimeouts"></a>

```java
public void putTimeouts(HealthcareHl7V2StoreTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNotificationConfig` <a name="resetNotificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetNotificationConfig"></a>

```java
public void resetNotificationConfig()
```

##### `resetNotificationConfigs` <a name="resetNotificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetNotificationConfigs"></a>

```java
public void resetNotificationConfigs()
```

##### `resetParserConfig` <a name="resetParserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetParserConfig"></a>

```java
public void resetParserConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_hl7_v2_store.HealthcareHl7V2Store;

HealthcareHl7V2Store.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_hl7_v2_store.HealthcareHl7V2Store;

HealthcareHl7V2Store.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_hl7_v2_store.HealthcareHl7V2Store;

HealthcareHl7V2Store.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference">HealthcareHl7V2StoreNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigs">notificationConfigs</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList">HealthcareHl7V2StoreNotificationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.parserConfig">parserConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference">HealthcareHl7V2StoreParserConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference">HealthcareHl7V2StoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.datasetInput">datasetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigInput">notificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigsInput">notificationConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.parserConfigInput">parserConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `notificationConfig`<sup>Required</sup> <a name="notificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfig"></a>

```java
public HealthcareHl7V2StoreNotificationConfigOutputReference getNotificationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference">HealthcareHl7V2StoreNotificationConfigOutputReference</a>

---

##### `notificationConfigs`<sup>Required</sup> <a name="notificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigs"></a>

```java
public HealthcareHl7V2StoreNotificationConfigsList getNotificationConfigs();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList">HealthcareHl7V2StoreNotificationConfigsList</a>

---

##### `parserConfig`<sup>Required</sup> <a name="parserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.parserConfig"></a>

```java
public HealthcareHl7V2StoreParserConfigOutputReference getParserConfig();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference">HealthcareHl7V2StoreParserConfigOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.timeouts"></a>

```java
public HealthcareHl7V2StoreTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference">HealthcareHl7V2StoreTimeoutsOutputReference</a>

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.datasetInput"></a>

```java
public java.lang.String getDatasetInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationConfigInput`<sup>Optional</sup> <a name="notificationConfigInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigInput"></a>

```java
public HealthcareHl7V2StoreNotificationConfig getNotificationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

---

##### `notificationConfigsInput`<sup>Optional</sup> <a name="notificationConfigsInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigsInput"></a>

```java
public java.lang.Object getNotificationConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>>

---

##### `parserConfigInput`<sup>Optional</sup> <a name="parserConfigInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.parserConfigInput"></a>

```java
public HealthcareHl7V2StoreParserConfig getParserConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareHl7V2StoreConfig <a name="HealthcareHl7V2StoreConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_hl7_v2_store.HealthcareHl7V2StoreConfig;

HealthcareHl7V2StoreConfig.builder()
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
    .dataset(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .notificationConfig(HealthcareHl7V2StoreNotificationConfig)
//  .notificationConfigs(IResolvable)
//  .notificationConfigs(java.util.List<HealthcareHl7V2StoreNotificationConfigs>)
//  .parserConfig(HealthcareHl7V2StoreParserConfig)
//  .timeouts(HealthcareHl7V2StoreTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.dataset">dataset</a></code> | <code>java.lang.String</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name for the Hl7V2Store. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#id HealthcareHl7V2Store#id}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-supplied key-value pairs used to organize HL7v2 stores. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.notificationConfigs">notificationConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>></code> | notification_configs block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.parserConfig">parserConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a></code> | parser_config block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#dataset HealthcareHl7V2Store#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name for the Hl7V2Store.

* Changing this property may recreate the Hl7v2 store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#name HealthcareHl7V2Store#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#id HealthcareHl7V2Store#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-supplied key-value pairs used to organize HL7v2 stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#labels HealthcareHl7V2Store#labels}

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.notificationConfig"></a>

```java
public HealthcareHl7V2StoreNotificationConfig getNotificationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#notification_config HealthcareHl7V2Store#notification_config}

---

##### `notificationConfigs`<sup>Optional</sup> <a name="notificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.notificationConfigs"></a>

```java
public java.lang.Object getNotificationConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>>

notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#notification_configs HealthcareHl7V2Store#notification_configs}

---

##### `parserConfig`<sup>Optional</sup> <a name="parserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.parserConfig"></a>

```java
public HealthcareHl7V2StoreParserConfig getParserConfig();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

parser_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#parser_config HealthcareHl7V2Store#parser_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.timeouts"></a>

```java
public HealthcareHl7V2StoreTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#timeouts HealthcareHl7V2Store#timeouts}

---

### HealthcareHl7V2StoreNotificationConfig <a name="HealthcareHl7V2StoreNotificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_hl7_v2_store.HealthcareHl7V2StoreNotificationConfig;

HealthcareHl7V2StoreNotificationConfig.builder()
    .pubsubTopic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#pubsub_topic HealthcareHl7V2Store#pubsub_topic}

---

### HealthcareHl7V2StoreNotificationConfigs <a name="HealthcareHl7V2StoreNotificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_hl7_v2_store.HealthcareHl7V2StoreNotificationConfigs;

HealthcareHl7V2StoreNotificationConfigs.builder()
    .pubsubTopic(java.lang.String)
//  .filter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.property.filter">filter</a></code> | <code>java.lang.String</code> | Restricts notifications sent for messages matching a filter. If this is empty, all messages are matched. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings. |

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

If a notification cannot be published to Cloud Pub/Sub, errors will be logged to Stackdriver

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#pubsub_topic HealthcareHl7V2Store#pubsub_topic}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Restricts notifications sent for messages matching a filter. If this is empty, all messages are matched. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings.

Fields/functions available for filtering are:

messageType, from the MSH-9.1 field. For example, NOT messageType = "ADT".
send_date or sendDate, the YYYY-MM-DD date the message was sent in the dataset's timeZone, from the MSH-7 segment. For example, send_date < "2017-01-02".
sendTime, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, sendTime < "2017-01-02T00:00:00-05:00".
sendFacility, the care center that the message came from, from the MSH-4 segment. For example, sendFacility = "ABC".
PatientId(value, type), which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, PatientId("123456", "MRN").
labels.x, a string value of the label with key x as set using the Message.labels map. For example, labels."priority"="high". The operator :* can be used to assert the existence of a label. For example, labels."priority":*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#filter HealthcareHl7V2Store#filter}

---

### HealthcareHl7V2StoreParserConfig <a name="HealthcareHl7V2StoreParserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_hl7_v2_store.HealthcareHl7V2StoreParserConfig;

HealthcareHl7V2StoreParserConfig.builder()
//  .allowNullHeader(java.lang.Boolean)
//  .allowNullHeader(IResolvable)
//  .schema(java.lang.String)
//  .segmentTerminator(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.allowNullHeader">allowNullHeader</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether messages with no header are allowed. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | JSON encoded string for schemas used to parse messages in this store if schematized parsing is desired. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.segmentTerminator">segmentTerminator</a></code> | <code>java.lang.String</code> | Byte(s) to be used as the segment terminator. If this is unset, '\r' will be used as segment terminator. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.version">version</a></code> | <code>java.lang.String</code> | The version of the unschematized parser to be used when a custom 'schema' is not set. |

---

##### `allowNullHeader`<sup>Optional</sup> <a name="allowNullHeader" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.allowNullHeader"></a>

```java
public java.lang.Object getAllowNullHeader();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether messages with no header are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#allow_null_header HealthcareHl7V2Store#allow_null_header}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

JSON encoded string for schemas used to parse messages in this store if schematized parsing is desired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#schema HealthcareHl7V2Store#schema}

---

##### `segmentTerminator`<sup>Optional</sup> <a name="segmentTerminator" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.segmentTerminator"></a>

```java
public java.lang.String getSegmentTerminator();
```

- *Type:* java.lang.String

Byte(s) to be used as the segment terminator. If this is unset, '\r' will be used as segment terminator.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#segment_terminator HealthcareHl7V2Store#segment_terminator}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version of the unschematized parser to be used when a custom 'schema' is not set.

Default value: "V1" Possible values: ["V1", "V2", "V3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#version HealthcareHl7V2Store#version}

---

### HealthcareHl7V2StoreTimeouts <a name="HealthcareHl7V2StoreTimeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_hl7_v2_store.HealthcareHl7V2StoreTimeouts;

HealthcareHl7V2StoreTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#create HealthcareHl7V2Store#create}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#delete HealthcareHl7V2Store#delete}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#update HealthcareHl7V2Store#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#create HealthcareHl7V2Store#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#delete HealthcareHl7V2Store#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/healthcare_hl7_v2_store#update HealthcareHl7V2Store#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareHl7V2StoreNotificationConfigOutputReference <a name="HealthcareHl7V2StoreNotificationConfigOutputReference" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_hl7_v2_store.HealthcareHl7V2StoreNotificationConfigOutputReference;

new HealthcareHl7V2StoreNotificationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```java
public java.lang.String getPubsubTopicInput();
```

- *Type:* java.lang.String

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.internalValue"></a>

```java
public HealthcareHl7V2StoreNotificationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

---


### HealthcareHl7V2StoreNotificationConfigsList <a name="HealthcareHl7V2StoreNotificationConfigsList" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_hl7_v2_store.HealthcareHl7V2StoreNotificationConfigsList;

new HealthcareHl7V2StoreNotificationConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.get"></a>

```java
public HealthcareHl7V2StoreNotificationConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a>>

---


### HealthcareHl7V2StoreNotificationConfigsOutputReference <a name="HealthcareHl7V2StoreNotificationConfigsOutputReference" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_hl7_v2_store.HealthcareHl7V2StoreNotificationConfigsOutputReference;

new HealthcareHl7V2StoreNotificationConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resetFilter"></a>

```java
public void resetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.pubsubTopicInput"></a>

```java
public java.lang.String getPubsubTopicInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs">HealthcareHl7V2StoreNotificationConfigs</a> OR com.hashicorp.cdktf.IResolvable

---


### HealthcareHl7V2StoreParserConfigOutputReference <a name="HealthcareHl7V2StoreParserConfigOutputReference" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_hl7_v2_store.HealthcareHl7V2StoreParserConfigOutputReference;

new HealthcareHl7V2StoreParserConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetAllowNullHeader">resetAllowNullHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetSegmentTerminator">resetSegmentTerminator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowNullHeader` <a name="resetAllowNullHeader" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetAllowNullHeader"></a>

```java
public void resetAllowNullHeader()
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetSegmentTerminator` <a name="resetSegmentTerminator" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetSegmentTerminator"></a>

```java
public void resetSegmentTerminator()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.allowNullHeaderInput">allowNullHeaderInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.segmentTerminatorInput">segmentTerminatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.allowNullHeader">allowNullHeader</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.segmentTerminator">segmentTerminator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowNullHeaderInput`<sup>Optional</sup> <a name="allowNullHeaderInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.allowNullHeaderInput"></a>

```java
public java.lang.Object getAllowNullHeaderInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `segmentTerminatorInput`<sup>Optional</sup> <a name="segmentTerminatorInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.segmentTerminatorInput"></a>

```java
public java.lang.String getSegmentTerminatorInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `allowNullHeader`<sup>Required</sup> <a name="allowNullHeader" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.allowNullHeader"></a>

```java
public java.lang.Object getAllowNullHeader();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `segmentTerminator`<sup>Required</sup> <a name="segmentTerminator" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.segmentTerminator"></a>

```java
public java.lang.String getSegmentTerminator();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.internalValue"></a>

```java
public HealthcareHl7V2StoreParserConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

---


### HealthcareHl7V2StoreTimeoutsOutputReference <a name="HealthcareHl7V2StoreTimeoutsOutputReference" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_hl7_v2_store.HealthcareHl7V2StoreTimeoutsOutputReference;

new HealthcareHl7V2StoreTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



