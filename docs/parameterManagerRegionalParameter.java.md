# `parameterManagerRegionalParameter` Submodule <a name="`parameterManagerRegionalParameter` Submodule" id="@cdktf/provider-google.parameterManagerRegionalParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ParameterManagerRegionalParameter <a name="ParameterManagerRegionalParameter" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter google_parameter_manager_regional_parameter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.parameter_manager_regional_parameter.ParameterManagerRegionalParameter;

ParameterManagerRegionalParameter.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .parameterId(java.lang.String)
//  .format(java.lang.String)
//  .id(java.lang.String)
//  .kmsKey(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(ParameterManagerRegionalParameterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the regional parameter. eg us-central1. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.parameterId">parameterId</a></code> | <code>java.lang.String</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.format">format</a></code> | <code>java.lang.String</code> | The format type of the regional parameter. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"]. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#id ParameterManagerRegionalParameter#id}. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The resource name of the Cloud KMS CryptoKey used to encrypt regional parameter version payload. Format 'projects/{{project}}/locations/{{location}}/keyRings/{{key_ring}}/cryptoKeys/{{crypto_key}}'. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels assigned to this regional Parameter. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#project ParameterManagerRegionalParameter#project}. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts">ParameterManagerRegionalParameterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the regional parameter. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#location ParameterManagerRegionalParameter#location}

---

##### `parameterId`<sup>Required</sup> <a name="parameterId" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.parameterId"></a>

- *Type:* java.lang.String

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#parameter_id ParameterManagerRegionalParameter#parameter_id}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.format"></a>

- *Type:* java.lang.String

The format type of the regional parameter. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#format ParameterManagerRegionalParameter#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#id ParameterManagerRegionalParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

The resource name of the Cloud KMS CryptoKey used to encrypt regional parameter version payload. Format 'projects/{{project}}/locations/{{location}}/keyRings/{{key_ring}}/cryptoKeys/{{crypto_key}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#kms_key ParameterManagerRegionalParameter#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels assigned to this regional Parameter.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#labels ParameterManagerRegionalParameter#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#project ParameterManagerRegionalParameter#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts">ParameterManagerRegionalParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#timeouts ParameterManagerRegionalParameter#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.putTimeouts"></a>

```java
public void putTimeouts(ParameterManagerRegionalParameterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts">ParameterManagerRegionalParameterTimeouts</a>

---

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ParameterManagerRegionalParameter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.parameter_manager_regional_parameter.ParameterManagerRegionalParameter;

ParameterManagerRegionalParameter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.parameter_manager_regional_parameter.ParameterManagerRegionalParameter;

ParameterManagerRegionalParameter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.parameter_manager_regional_parameter.ParameterManagerRegionalParameter;

ParameterManagerRegionalParameter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.parameter_manager_regional_parameter.ParameterManagerRegionalParameter;

ParameterManagerRegionalParameter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ParameterManagerRegionalParameter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ParameterManagerRegionalParameter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ParameterManagerRegionalParameter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ParameterManagerRegionalParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ParameterManagerRegionalParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.policyMember">policyMember</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList">ParameterManagerRegionalParameterPolicyMemberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference">ParameterManagerRegionalParameterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.parameterIdInput">parameterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts">ParameterManagerRegionalParameterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.parameterId">parameterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyMember`<sup>Required</sup> <a name="policyMember" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.policyMember"></a>

```java
public ParameterManagerRegionalParameterPolicyMemberList getPolicyMember();
```

- *Type:* <a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList">ParameterManagerRegionalParameterPolicyMemberList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.timeouts"></a>

```java
public ParameterManagerRegionalParameterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference">ParameterManagerRegionalParameterTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `parameterIdInput`<sup>Optional</sup> <a name="parameterIdInput" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.parameterIdInput"></a>

```java
public java.lang.String getParameterIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts">ParameterManagerRegionalParameterTimeouts</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `parameterId`<sup>Required</sup> <a name="parameterId" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.parameterId"></a>

```java
public java.lang.String getParameterId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ParameterManagerRegionalParameterConfig <a name="ParameterManagerRegionalParameterConfig" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.parameter_manager_regional_parameter.ParameterManagerRegionalParameterConfig;

ParameterManagerRegionalParameterConfig.builder()
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
    .location(java.lang.String)
    .parameterId(java.lang.String)
//  .format(java.lang.String)
//  .id(java.lang.String)
//  .kmsKey(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(ParameterManagerRegionalParameterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the regional parameter. eg us-central1. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.parameterId">parameterId</a></code> | <code>java.lang.String</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.format">format</a></code> | <code>java.lang.String</code> | The format type of the regional parameter. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"]. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#id ParameterManagerRegionalParameter#id}. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The resource name of the Cloud KMS CryptoKey used to encrypt regional parameter version payload. Format 'projects/{{project}}/locations/{{location}}/keyRings/{{key_ring}}/cryptoKeys/{{crypto_key}}'. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels assigned to this regional Parameter. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#project ParameterManagerRegionalParameter#project}. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts">ParameterManagerRegionalParameterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the regional parameter. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#location ParameterManagerRegionalParameter#location}

---

##### `parameterId`<sup>Required</sup> <a name="parameterId" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.parameterId"></a>

```java
public java.lang.String getParameterId();
```

- *Type:* java.lang.String

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#parameter_id ParameterManagerRegionalParameter#parameter_id}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

The format type of the regional parameter. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#format ParameterManagerRegionalParameter#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#id ParameterManagerRegionalParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The resource name of the Cloud KMS CryptoKey used to encrypt regional parameter version payload. Format 'projects/{{project}}/locations/{{location}}/keyRings/{{key_ring}}/cryptoKeys/{{crypto_key}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#kms_key ParameterManagerRegionalParameter#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels assigned to this regional Parameter.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#labels ParameterManagerRegionalParameter#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#project ParameterManagerRegionalParameter#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterConfig.property.timeouts"></a>

```java
public ParameterManagerRegionalParameterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts">ParameterManagerRegionalParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#timeouts ParameterManagerRegionalParameter#timeouts}

---

### ParameterManagerRegionalParameterPolicyMember <a name="ParameterManagerRegionalParameterPolicyMember" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMember"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.parameter_manager_regional_parameter.ParameterManagerRegionalParameterPolicyMember;

ParameterManagerRegionalParameterPolicyMember.builder()
    .build();
```


### ParameterManagerRegionalParameterTimeouts <a name="ParameterManagerRegionalParameterTimeouts" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.parameter_manager_regional_parameter.ParameterManagerRegionalParameterTimeouts;

ParameterManagerRegionalParameterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#create ParameterManagerRegionalParameter#create}. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#delete ParameterManagerRegionalParameter#delete}. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#update ParameterManagerRegionalParameter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#create ParameterManagerRegionalParameter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#delete ParameterManagerRegionalParameter#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/parameter_manager_regional_parameter#update ParameterManagerRegionalParameter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ParameterManagerRegionalParameterPolicyMemberList <a name="ParameterManagerRegionalParameterPolicyMemberList" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.parameter_manager_regional_parameter.ParameterManagerRegionalParameterPolicyMemberList;

new ParameterManagerRegionalParameterPolicyMemberList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.get"></a>

```java
public ParameterManagerRegionalParameterPolicyMemberOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ParameterManagerRegionalParameterPolicyMemberOutputReference <a name="ParameterManagerRegionalParameterPolicyMemberOutputReference" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.parameter_manager_regional_parameter.ParameterManagerRegionalParameterPolicyMemberOutputReference;

new ParameterManagerRegionalParameterPolicyMemberOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyNamePrincipal">iamPolicyNamePrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyUidPrincipal">iamPolicyUidPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMember">ParameterManagerRegionalParameterPolicyMember</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iamPolicyNamePrincipal`<sup>Required</sup> <a name="iamPolicyNamePrincipal" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyNamePrincipal"></a>

```java
public java.lang.String getIamPolicyNamePrincipal();
```

- *Type:* java.lang.String

---

##### `iamPolicyUidPrincipal`<sup>Required</sup> <a name="iamPolicyUidPrincipal" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyUidPrincipal"></a>

```java
public java.lang.String getIamPolicyUidPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMemberOutputReference.property.internalValue"></a>

```java
public ParameterManagerRegionalParameterPolicyMember getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterPolicyMember">ParameterManagerRegionalParameterPolicyMember</a>

---


### ParameterManagerRegionalParameterTimeoutsOutputReference <a name="ParameterManagerRegionalParameterTimeoutsOutputReference" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.parameter_manager_regional_parameter.ParameterManagerRegionalParameterTimeoutsOutputReference;

new ParameterManagerRegionalParameterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts">ParameterManagerRegionalParameterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.parameterManagerRegionalParameter.ParameterManagerRegionalParameterTimeouts">ParameterManagerRegionalParameterTimeouts</a>

---



