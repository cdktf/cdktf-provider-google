# `dataLossPreventionInspectTemplate` Submodule <a name="`dataLossPreventionInspectTemplate` Submodule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLossPreventionInspectTemplate <a name="DataLossPreventionInspectTemplate" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template google_data_loss_prevention_inspect_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplate;

DataLossPreventionInspectTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .inspectConfig(DataLossPreventionInspectTemplateInspectConfig)
//  .timeouts(DataLossPreventionInspectTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the inspect template in any of the following formats:. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the inspect template. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User set display name of the inspect template. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#id DataLossPreventionInspectTemplate#id}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.inspectConfig">inspectConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig">DataLossPreventionInspectTemplateInspectConfig</a></code> | inspect_config block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts">DataLossPreventionInspectTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent of the inspect template in any of the following formats:.

'projects/{{project}}'
'projects/{{project}}/locations/{{location}}'
'organizations/{{organization_id}}'
'organizations/{{organization_id}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#parent DataLossPreventionInspectTemplate#parent}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the inspect template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#description DataLossPreventionInspectTemplate#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User set display name of the inspect template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#display_name DataLossPreventionInspectTemplate#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#id DataLossPreventionInspectTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inspectConfig`<sup>Optional</sup> <a name="inspectConfig" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.inspectConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig">DataLossPreventionInspectTemplateInspectConfig</a>

inspect_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#inspect_config DataLossPreventionInspectTemplate#inspect_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts">DataLossPreventionInspectTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#timeouts DataLossPreventionInspectTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.putInspectConfig">putInspectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetInspectConfig">resetInspectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putInspectConfig` <a name="putInspectConfig" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.putInspectConfig"></a>

```java
public void putInspectConfig(DataLossPreventionInspectTemplateInspectConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.putInspectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig">DataLossPreventionInspectTemplateInspectConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.putTimeouts"></a>

```java
public void putTimeouts(DataLossPreventionInspectTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts">DataLossPreventionInspectTemplateTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetInspectConfig` <a name="resetInspectConfig" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetInspectConfig"></a>

```java
public void resetInspectConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplate;

DataLossPreventionInspectTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplate;

DataLossPreventionInspectTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplate;

DataLossPreventionInspectTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.inspectConfig">inspectConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference">DataLossPreventionInspectTemplateInspectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference">DataLossPreventionInspectTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.inspectConfigInput">inspectConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig">DataLossPreventionInspectTemplateInspectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts">DataLossPreventionInspectTemplateTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `inspectConfig`<sup>Required</sup> <a name="inspectConfig" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.inspectConfig"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigOutputReference getInspectConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference">DataLossPreventionInspectTemplateInspectConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.timeouts"></a>

```java
public DataLossPreventionInspectTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference">DataLossPreventionInspectTemplateTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inspectConfigInput`<sup>Optional</sup> <a name="inspectConfigInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.inspectConfigInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfig getInspectConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig">DataLossPreventionInspectTemplateInspectConfig</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts">DataLossPreventionInspectTemplateTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataLossPreventionInspectTemplateConfig <a name="DataLossPreventionInspectTemplateConfig" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateConfig;

DataLossPreventionInspectTemplateConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .inspectConfig(DataLossPreventionInspectTemplateInspectConfig)
//  .timeouts(DataLossPreventionInspectTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the inspect template in any of the following formats:. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the inspect template. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User set display name of the inspect template. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#id DataLossPreventionInspectTemplate#id}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.inspectConfig">inspectConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig">DataLossPreventionInspectTemplateInspectConfig</a></code> | inspect_config block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts">DataLossPreventionInspectTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent of the inspect template in any of the following formats:.

'projects/{{project}}'
'projects/{{project}}/locations/{{location}}'
'organizations/{{organization_id}}'
'organizations/{{organization_id}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#parent DataLossPreventionInspectTemplate#parent}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the inspect template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#description DataLossPreventionInspectTemplate#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User set display name of the inspect template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#display_name DataLossPreventionInspectTemplate#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#id DataLossPreventionInspectTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inspectConfig`<sup>Optional</sup> <a name="inspectConfig" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.inspectConfig"></a>

```java
public DataLossPreventionInspectTemplateInspectConfig getInspectConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig">DataLossPreventionInspectTemplateInspectConfig</a>

inspect_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#inspect_config DataLossPreventionInspectTemplate#inspect_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.timeouts"></a>

```java
public DataLossPreventionInspectTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts">DataLossPreventionInspectTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#timeouts DataLossPreventionInspectTemplate#timeouts}

---

### DataLossPreventionInspectTemplateInspectConfig <a name="DataLossPreventionInspectTemplateInspectConfig" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfig;

DataLossPreventionInspectTemplateInspectConfig.builder()
//  .contentOptions(java.util.List<java.lang.String>)
//  .customInfoTypes(IResolvable)
//  .customInfoTypes(java.util.List<DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes>)
//  .excludeInfoTypes(java.lang.Boolean)
//  .excludeInfoTypes(IResolvable)
//  .includeQuote(java.lang.Boolean)
//  .includeQuote(IResolvable)
//  .infoTypes(IResolvable)
//  .infoTypes(java.util.List<DataLossPreventionInspectTemplateInspectConfigInfoTypes>)
//  .limits(DataLossPreventionInspectTemplateInspectConfigLimits)
//  .minLikelihood(java.lang.String)
//  .ruleSet(IResolvable)
//  .ruleSet(java.util.List<DataLossPreventionInspectTemplateInspectConfigRuleSet>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.contentOptions">contentOptions</a></code> | <code>java.util.List<java.lang.String></code> | List of options defining data content to scan. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.customInfoTypes">customInfoTypes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes</a>></code> | custom_info_types block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.excludeInfoTypes">excludeInfoTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, excludes type information of the findings. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.includeQuote">includeQuote</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, a contextual quote from the data that triggered a finding is included in the response. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.infoTypes">infoTypes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes">DataLossPreventionInspectTemplateInspectConfigInfoTypes</a>></code> | info_types block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits">DataLossPreventionInspectTemplateInspectConfigLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.minLikelihood">minLikelihood</a></code> | <code>java.lang.String</code> | Only returns findings equal or above this threshold. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.ruleSet">ruleSet</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet">DataLossPreventionInspectTemplateInspectConfigRuleSet</a>></code> | rule_set block. |

---

##### `contentOptions`<sup>Optional</sup> <a name="contentOptions" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.contentOptions"></a>

```java
public java.util.List<java.lang.String> getContentOptions();
```

- *Type:* java.util.List<java.lang.String>

List of options defining data content to scan.

If empty, text, images, and other content will be included. Possible values: ["CONTENT_TEXT", "CONTENT_IMAGE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#content_options DataLossPreventionInspectTemplate#content_options}

---

##### `customInfoTypes`<sup>Optional</sup> <a name="customInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.customInfoTypes"></a>

```java
public java.lang.Object getCustomInfoTypes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes</a>>

custom_info_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#custom_info_types DataLossPreventionInspectTemplate#custom_info_types}

---

##### `excludeInfoTypes`<sup>Optional</sup> <a name="excludeInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.excludeInfoTypes"></a>

```java
public java.lang.Object getExcludeInfoTypes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, excludes type information of the findings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#exclude_info_types DataLossPreventionInspectTemplate#exclude_info_types}

---

##### `includeQuote`<sup>Optional</sup> <a name="includeQuote" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.includeQuote"></a>

```java
public java.lang.Object getIncludeQuote();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, a contextual quote from the data that triggered a finding is included in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#include_quote DataLossPreventionInspectTemplate#include_quote}

---

##### `infoTypes`<sup>Optional</sup> <a name="infoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.infoTypes"></a>

```java
public java.lang.Object getInfoTypes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes">DataLossPreventionInspectTemplateInspectConfigInfoTypes</a>>

info_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#info_types DataLossPreventionInspectTemplate#info_types}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.limits"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigLimits getLimits();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits">DataLossPreventionInspectTemplateInspectConfigLimits</a>

limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#limits DataLossPreventionInspectTemplate#limits}

---

##### `minLikelihood`<sup>Optional</sup> <a name="minLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.minLikelihood"></a>

```java
public java.lang.String getMinLikelihood();
```

- *Type:* java.lang.String

Only returns findings equal or above this threshold.

See https://cloud.google.com/dlp/docs/likelihood for more info Default value: "POSSIBLE" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#min_likelihood DataLossPreventionInspectTemplate#min_likelihood}

---

##### `ruleSet`<sup>Optional</sup> <a name="ruleSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.ruleSet"></a>

```java
public java.lang.Object getRuleSet();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet">DataLossPreventionInspectTemplateInspectConfigRuleSet</a>>

rule_set block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#rule_set DataLossPreventionInspectTemplate#rule_set}

---

### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes;

DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.builder()
    .infoType(DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType)
//  .dictionary(DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary)
//  .exclusionType(java.lang.String)
//  .likelihood(java.lang.String)
//  .regex(DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex)
//  .storedType(DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.infoType">infoType</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a></code> | info_type block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.dictionary">dictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a></code> | dictionary block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.exclusionType">exclusionType</a></code> | <code>java.lang.String</code> | If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.likelihood">likelihood</a></code> | <code>java.lang.String</code> | Likelihood to return for this CustomInfoType. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.regex">regex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a></code> | regex block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.storedType">storedType</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a></code> | stored_type block. |

---

##### `infoType`<sup>Required</sup> <a name="infoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.infoType"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType getInfoType();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a>

info_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#info_type DataLossPreventionInspectTemplate#info_type}

---

##### `dictionary`<sup>Optional</sup> <a name="dictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.dictionary"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary getDictionary();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a>

dictionary block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#dictionary DataLossPreventionInspectTemplate#dictionary}

---

##### `exclusionType`<sup>Optional</sup> <a name="exclusionType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.exclusionType"></a>

```java
public java.lang.String getExclusionType();
```

- *Type:* java.lang.String

If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned.

It still can be used for rules matching. Possible values: ["EXCLUSION_TYPE_EXCLUDE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#exclusion_type DataLossPreventionInspectTemplate#exclusion_type}

---

##### `likelihood`<sup>Optional</sup> <a name="likelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.likelihood"></a>

```java
public java.lang.String getLikelihood();
```

- *Type:* java.lang.String

Likelihood to return for this CustomInfoType.

This base value can be altered by a detection rule if the finding meets the criteria
specified by the rule. Default value: "VERY_LIKELY" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#likelihood DataLossPreventionInspectTemplate#likelihood}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.regex"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex getRegex();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a>

regex block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#regex DataLossPreventionInspectTemplate#regex}

---

##### `storedType`<sup>Optional</sup> <a name="storedType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.storedType"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType getStoredType();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a>

stored_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#stored_type DataLossPreventionInspectTemplate#stored_type}

---

### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary;

DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary.builder()
//  .cloudStoragePath(DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath)
//  .wordList(DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary.property.cloudStoragePath">cloudStoragePath</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a></code> | cloud_storage_path block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary.property.wordList">wordList</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a></code> | word_list block. |

---

##### `cloudStoragePath`<sup>Optional</sup> <a name="cloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary.property.cloudStoragePath"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath getCloudStoragePath();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a>

cloud_storage_path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#cloud_storage_path DataLossPreventionInspectTemplate#cloud_storage_path}

---

##### `wordList`<sup>Optional</sup> <a name="wordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary.property.wordList"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList getWordList();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a>

word_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#word_list DataLossPreventionInspectTemplate#word_list}

---

### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath;

DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath.builder()
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath.property.path">path</a></code> | <code>java.lang.String</code> | A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#path DataLossPreventionInspectTemplate#path}

---

### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList;

DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList.builder()
    .words(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList.property.words">words</a></code> | <code>java.util.List<java.lang.String></code> | Words or phrases defining the dictionary. |

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList.property.words"></a>

```java
public java.util.List<java.lang.String> getWords();
```

- *Type:* java.util.List<java.lang.String>

Words or phrases defining the dictionary.

The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#words DataLossPreventionInspectTemplate#words}

---

### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType;

DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType.property.name">name</a></code> | <code>java.lang.String</code> | Name of the information type. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the information type.

Either a name of your choosing when creating a CustomInfoType, or one of the names
listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}

---

### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex;

DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex.builder()
    .pattern(java.lang.String)
//  .groupIndexes(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex.property.pattern">pattern</a></code> | <code>java.lang.String</code> | Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex.property.groupIndexes">groupIndexes</a></code> | <code>java.util.List<java.lang.Number></code> | The index of the submatch to extract as findings. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#pattern DataLossPreventionInspectTemplate#pattern}

---

##### `groupIndexes`<sup>Optional</sup> <a name="groupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex.property.groupIndexes"></a>

```java
public java.util.List<java.lang.Number> getGroupIndexes();
```

- *Type:* java.util.List<java.lang.Number>

The index of the submatch to extract as findings.

When not specified, the entire match is returned. No more than 3 may be included.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#group_indexes DataLossPreventionInspectTemplate#group_indexes}

---

### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType;

DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType.property.name">name</a></code> | <code>java.lang.String</code> | Resource name of the requested StoredInfoType, for example 'organizations/433245324/storedInfoTypes/432452342' or 'projects/project-id/storedInfoTypes/432452342'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Resource name of the requested StoredInfoType, for example 'organizations/433245324/storedInfoTypes/432452342' or 'projects/project-id/storedInfoTypes/432452342'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}

---

### DataLossPreventionInspectTemplateInspectConfigInfoTypes <a name="DataLossPreventionInspectTemplateInspectConfigInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigInfoTypes;

DataLossPreventionInspectTemplateInspectConfigInfoTypes.builder()
    .name(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes.property.name">name</a></code> | <code>java.lang.String</code> | Name of the information type. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes.property.version">version</a></code> | <code>java.lang.String</code> | Version of the information type to use. By default, the version is set to stable. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the information type.

Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Version of the information type to use. By default, the version is set to stable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#version DataLossPreventionInspectTemplate#version}

---

### DataLossPreventionInspectTemplateInspectConfigLimits <a name="DataLossPreventionInspectTemplateInspectConfigLimits" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigLimits;

DataLossPreventionInspectTemplateInspectConfigLimits.builder()
    .maxFindingsPerItem(java.lang.Number)
    .maxFindingsPerRequest(java.lang.Number)
//  .maxFindingsPerInfoType(IResolvable)
//  .maxFindingsPerInfoType(java.util.List<DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerItem">maxFindingsPerItem</a></code> | <code>java.lang.Number</code> | Max number of findings that will be returned for each item scanned. The maximum returned is 2000. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerRequest">maxFindingsPerRequest</a></code> | <code>java.lang.Number</code> | Max number of findings that will be returned per request/job. The maximum returned is 2000. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerInfoType">maxFindingsPerInfoType</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType</a>></code> | max_findings_per_info_type block. |

---

##### `maxFindingsPerItem`<sup>Required</sup> <a name="maxFindingsPerItem" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerItem"></a>

```java
public java.lang.Number getMaxFindingsPerItem();
```

- *Type:* java.lang.Number

Max number of findings that will be returned for each item scanned. The maximum returned is 2000.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#max_findings_per_item DataLossPreventionInspectTemplate#max_findings_per_item}

---

##### `maxFindingsPerRequest`<sup>Required</sup> <a name="maxFindingsPerRequest" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerRequest"></a>

```java
public java.lang.Number getMaxFindingsPerRequest();
```

- *Type:* java.lang.Number

Max number of findings that will be returned per request/job. The maximum returned is 2000.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#max_findings_per_request DataLossPreventionInspectTemplate#max_findings_per_request}

---

##### `maxFindingsPerInfoType`<sup>Optional</sup> <a name="maxFindingsPerInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerInfoType"></a>

```java
public java.lang.Object getMaxFindingsPerInfoType();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType</a>>

max_findings_per_info_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#max_findings_per_info_type DataLossPreventionInspectTemplate#max_findings_per_info_type}

---

### DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType <a name="DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType;

DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType.builder()
    .infoType(DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType)
    .maxFindings(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType.property.infoType">infoType</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a></code> | info_type block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType.property.maxFindings">maxFindings</a></code> | <code>java.lang.Number</code> | Max findings limit for the given infoType. |

---

##### `infoType`<sup>Required</sup> <a name="infoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType.property.infoType"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType getInfoType();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a>

info_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#info_type DataLossPreventionInspectTemplate#info_type}

---

##### `maxFindings`<sup>Required</sup> <a name="maxFindings" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType.property.maxFindings"></a>

```java
public java.lang.Number getMaxFindings();
```

- *Type:* java.lang.Number

Max findings limit for the given infoType.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#max_findings DataLossPreventionInspectTemplate#max_findings}

---

### DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType <a name="DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType;

DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType.property.name">name</a></code> | <code>java.lang.String</code> | Name of the information type. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the information type.

Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSet <a name="DataLossPreventionInspectTemplateInspectConfigRuleSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSet;

DataLossPreventionInspectTemplateInspectConfigRuleSet.builder()
    .infoTypes(IResolvable)
    .infoTypes(java.util.List<DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes>)
    .rules(IResolvable)
    .rules(java.util.List<DataLossPreventionInspectTemplateInspectConfigRuleSetRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet.property.infoTypes">infoTypes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes</a>></code> | info_types block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules">DataLossPreventionInspectTemplateInspectConfigRuleSetRules</a>></code> | rules block. |

---

##### `infoTypes`<sup>Required</sup> <a name="infoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet.property.infoTypes"></a>

```java
public java.lang.Object getInfoTypes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes</a>>

info_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#info_types DataLossPreventionInspectTemplate#info_types}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules">DataLossPreventionInspectTemplateInspectConfigRuleSetRules</a>>

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#rules DataLossPreventionInspectTemplate#rules}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes;

DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes.property.name">name</a></code> | <code>java.lang.String</code> | Name of the information type. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the information type.

Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRules <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRules" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRules;

DataLossPreventionInspectTemplateInspectConfigRuleSetRules.builder()
//  .exclusionRule(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule)
//  .hotwordRule(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules.property.exclusionRule">exclusionRule</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a></code> | exclusion_rule block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules.property.hotwordRule">hotwordRule</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a></code> | hotword_rule block. |

---

##### `exclusionRule`<sup>Optional</sup> <a name="exclusionRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules.property.exclusionRule"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule getExclusionRule();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a>

exclusion_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#exclusion_rule DataLossPreventionInspectTemplate#exclusion_rule}

---

##### `hotwordRule`<sup>Optional</sup> <a name="hotwordRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules.property.hotwordRule"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule getHotwordRule();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a>

hotword_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#hotword_rule DataLossPreventionInspectTemplate#hotword_rule}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule;

DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.builder()
    .matchingType(java.lang.String)
//  .dictionary(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary)
//  .excludeInfoTypes(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes)
//  .regex(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.matchingType">matchingType</a></code> | <code>java.lang.String</code> | How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType Possible values: ["MATCHING_TYPE_FULL_MATCH", "MATCHING_TYPE_PARTIAL_MATCH", "MATCHING_TYPE_INVERSE_MATCH"]. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.dictionary">dictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a></code> | dictionary block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.excludeInfoTypes">excludeInfoTypes</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a></code> | exclude_info_types block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.regex">regex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a></code> | regex block. |

---

##### `matchingType`<sup>Required</sup> <a name="matchingType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.matchingType"></a>

```java
public java.lang.String getMatchingType();
```

- *Type:* java.lang.String

How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType Possible values: ["MATCHING_TYPE_FULL_MATCH", "MATCHING_TYPE_PARTIAL_MATCH", "MATCHING_TYPE_INVERSE_MATCH"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#matching_type DataLossPreventionInspectTemplate#matching_type}

---

##### `dictionary`<sup>Optional</sup> <a name="dictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.dictionary"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary getDictionary();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a>

dictionary block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#dictionary DataLossPreventionInspectTemplate#dictionary}

---

##### `excludeInfoTypes`<sup>Optional</sup> <a name="excludeInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.excludeInfoTypes"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes getExcludeInfoTypes();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a>

exclude_info_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#exclude_info_types DataLossPreventionInspectTemplate#exclude_info_types}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.regex"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex getRegex();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a>

regex block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#regex DataLossPreventionInspectTemplate#regex}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary;

DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary.builder()
//  .cloudStoragePath(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath)
//  .wordList(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary.property.cloudStoragePath">cloudStoragePath</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a></code> | cloud_storage_path block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary.property.wordList">wordList</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a></code> | word_list block. |

---

##### `cloudStoragePath`<sup>Optional</sup> <a name="cloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary.property.cloudStoragePath"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath getCloudStoragePath();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a>

cloud_storage_path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#cloud_storage_path DataLossPreventionInspectTemplate#cloud_storage_path}

---

##### `wordList`<sup>Optional</sup> <a name="wordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary.property.wordList"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList getWordList();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a>

word_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#word_list DataLossPreventionInspectTemplate#word_list}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath;

DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath.builder()
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath.property.path">path</a></code> | <code>java.lang.String</code> | A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#path DataLossPreventionInspectTemplate#path}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList;

DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList.builder()
    .words(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList.property.words">words</a></code> | <code>java.util.List<java.lang.String></code> | Words or phrases defining the dictionary. |

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList.property.words"></a>

```java
public java.util.List<java.lang.String> getWords();
```

- *Type:* java.util.List<java.lang.String>

Words or phrases defining the dictionary.

The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#words DataLossPreventionInspectTemplate#words}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes;

DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes.builder()
    .infoTypes(IResolvable)
    .infoTypes(java.util.List<DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes.property.infoTypes">infoTypes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes</a>></code> | info_types block. |

---

##### `infoTypes`<sup>Required</sup> <a name="infoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes.property.infoTypes"></a>

```java
public java.lang.Object getInfoTypes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes</a>>

info_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#info_types DataLossPreventionInspectTemplate#info_types}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes;

DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes.property.name">name</a></code> | <code>java.lang.String</code> | Name of the information type. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the information type.

Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex;

DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex.builder()
    .pattern(java.lang.String)
//  .groupIndexes(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex.property.pattern">pattern</a></code> | <code>java.lang.String</code> | Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex.property.groupIndexes">groupIndexes</a></code> | <code>java.util.List<java.lang.Number></code> | The index of the submatch to extract as findings. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#pattern DataLossPreventionInspectTemplate#pattern}

---

##### `groupIndexes`<sup>Optional</sup> <a name="groupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex.property.groupIndexes"></a>

```java
public java.util.List<java.lang.Number> getGroupIndexes();
```

- *Type:* java.util.List<java.lang.Number>

The index of the submatch to extract as findings.

When not specified, the entire match is returned. No more than 3 may be included.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#group_indexes DataLossPreventionInspectTemplate#group_indexes}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule;

DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.builder()
    .hotwordRegex(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex)
    .likelihoodAdjustment(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment)
    .proximity(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.hotwordRegex">hotwordRegex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a></code> | hotword_regex block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.likelihoodAdjustment">likelihoodAdjustment</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a></code> | likelihood_adjustment block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.proximity">proximity</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a></code> | proximity block. |

---

##### `hotwordRegex`<sup>Required</sup> <a name="hotwordRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.hotwordRegex"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex getHotwordRegex();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a>

hotword_regex block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#hotword_regex DataLossPreventionInspectTemplate#hotword_regex}

---

##### `likelihoodAdjustment`<sup>Required</sup> <a name="likelihoodAdjustment" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.likelihoodAdjustment"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment getLikelihoodAdjustment();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a>

likelihood_adjustment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#likelihood_adjustment DataLossPreventionInspectTemplate#likelihood_adjustment}

---

##### `proximity`<sup>Required</sup> <a name="proximity" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.proximity"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity getProximity();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a>

proximity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#proximity DataLossPreventionInspectTemplate#proximity}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex;

DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex.builder()
    .pattern(java.lang.String)
//  .groupIndexes(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex.property.pattern">pattern</a></code> | <code>java.lang.String</code> | Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex.property.groupIndexes">groupIndexes</a></code> | <code>java.util.List<java.lang.Number></code> | The index of the submatch to extract as findings. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#pattern DataLossPreventionInspectTemplate#pattern}

---

##### `groupIndexes`<sup>Optional</sup> <a name="groupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex.property.groupIndexes"></a>

```java
public java.util.List<java.lang.Number> getGroupIndexes();
```

- *Type:* java.util.List<java.lang.Number>

The index of the submatch to extract as findings.

When not specified,
the entire match is returned. No more than 3 may be included.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#group_indexes DataLossPreventionInspectTemplate#group_indexes}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment;

DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment.builder()
//  .fixedLikelihood(java.lang.String)
//  .relativeLikelihood(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment.property.fixedLikelihood">fixedLikelihood</a></code> | <code>java.lang.String</code> | Set the likelihood of a finding to a fixed value. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment.property.relativeLikelihood">relativeLikelihood</a></code> | <code>java.lang.Number</code> | Increase or decrease the likelihood by the specified number of levels. |

---

##### `fixedLikelihood`<sup>Optional</sup> <a name="fixedLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment.property.fixedLikelihood"></a>

```java
public java.lang.String getFixedLikelihood();
```

- *Type:* java.lang.String

Set the likelihood of a finding to a fixed value.

Either this or relative_likelihood can be set. Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#fixed_likelihood DataLossPreventionInspectTemplate#fixed_likelihood}

---

##### `relativeLikelihood`<sup>Optional</sup> <a name="relativeLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment.property.relativeLikelihood"></a>

```java
public java.lang.Number getRelativeLikelihood();
```

- *Type:* java.lang.Number

Increase or decrease the likelihood by the specified number of levels.

For example,
if a finding would be POSSIBLE without the detection rule and relativeLikelihood is 1,
then it is upgraded to LIKELY, while a value of -1 would downgrade it to UNLIKELY.
Likelihood may never drop below VERY_UNLIKELY or exceed VERY_LIKELY, so applying an
adjustment of 1 followed by an adjustment of -1 when base likelihood is VERY_LIKELY
will result in a final likelihood of LIKELY. Either this or fixed_likelihood can be set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#relative_likelihood DataLossPreventionInspectTemplate#relative_likelihood}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity;

DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity.builder()
//  .windowAfter(java.lang.Number)
//  .windowBefore(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity.property.windowAfter">windowAfter</a></code> | <code>java.lang.Number</code> | Number of characters after the finding to consider. Either this or window_before must be specified. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity.property.windowBefore">windowBefore</a></code> | <code>java.lang.Number</code> | Number of characters before the finding to consider. Either this or window_after must be specified. |

---

##### `windowAfter`<sup>Optional</sup> <a name="windowAfter" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity.property.windowAfter"></a>

```java
public java.lang.Number getWindowAfter();
```

- *Type:* java.lang.Number

Number of characters after the finding to consider. Either this or window_before must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#window_after DataLossPreventionInspectTemplate#window_after}

---

##### `windowBefore`<sup>Optional</sup> <a name="windowBefore" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity.property.windowBefore"></a>

```java
public java.lang.Number getWindowBefore();
```

- *Type:* java.lang.Number

Number of characters before the finding to consider. Either this or window_after must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#window_before DataLossPreventionInspectTemplate#window_before}

---

### DataLossPreventionInspectTemplateTimeouts <a name="DataLossPreventionInspectTemplateTimeouts" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateTimeouts;

DataLossPreventionInspectTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#create DataLossPreventionInspectTemplate#create}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#delete DataLossPreventionInspectTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#update DataLossPreventionInspectTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#create DataLossPreventionInspectTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#delete DataLossPreventionInspectTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#update DataLossPreventionInspectTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference;

new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a>

---


### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference;

new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putCloudStoragePath">putCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putWordList">putWordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resetCloudStoragePath">resetCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resetWordList">resetWordList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudStoragePath` <a name="putCloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putCloudStoragePath"></a>

```java
public void putCloudStoragePath(DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putCloudStoragePath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a>

---

##### `putWordList` <a name="putWordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putWordList"></a>

```java
public void putWordList(DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putWordList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a>

---

##### `resetCloudStoragePath` <a name="resetCloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resetCloudStoragePath"></a>

```java
public void resetCloudStoragePath()
```

##### `resetWordList` <a name="resetWordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resetWordList"></a>

```java
public void resetWordList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.cloudStoragePath">cloudStoragePath</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.wordList">wordList</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.cloudStoragePathInput">cloudStoragePathInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.wordListInput">wordListInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudStoragePath`<sup>Required</sup> <a name="cloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.cloudStoragePath"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference getCloudStoragePath();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference</a>

---

##### `wordList`<sup>Required</sup> <a name="wordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.wordList"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference getWordList();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference</a>

---

##### `cloudStoragePathInput`<sup>Optional</sup> <a name="cloudStoragePathInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.cloudStoragePathInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath getCloudStoragePathInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a>

---

##### `wordListInput`<sup>Optional</sup> <a name="wordListInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.wordListInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList getWordListInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a>

---


### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference;

new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.wordsInput">wordsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.words">words</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `wordsInput`<sup>Optional</sup> <a name="wordsInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.wordsInput"></a>

```java
public java.util.List<java.lang.String> getWordsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.words"></a>

```java
public java.util.List<java.lang.String> getWords();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a>

---


### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference;

new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a>

---


### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList;

new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.get"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes</a>>

---


### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference;

new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putDictionary">putDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putInfoType">putInfoType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putRegex">putRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putStoredType">putStoredType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetDictionary">resetDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetExclusionType">resetExclusionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetLikelihood">resetLikelihood</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetStoredType">resetStoredType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDictionary` <a name="putDictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putDictionary"></a>

```java
public void putDictionary(DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putDictionary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a>

---

##### `putInfoType` <a name="putInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putInfoType"></a>

```java
public void putInfoType(DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putInfoType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a>

---

##### `putRegex` <a name="putRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putRegex"></a>

```java
public void putRegex(DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putRegex.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a>

---

##### `putStoredType` <a name="putStoredType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putStoredType"></a>

```java
public void putStoredType(DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putStoredType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a>

---

##### `resetDictionary` <a name="resetDictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetDictionary"></a>

```java
public void resetDictionary()
```

##### `resetExclusionType` <a name="resetExclusionType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetExclusionType"></a>

```java
public void resetExclusionType()
```

##### `resetLikelihood` <a name="resetLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetLikelihood"></a>

```java
public void resetLikelihood()
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetStoredType` <a name="resetStoredType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetStoredType"></a>

```java
public void resetStoredType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.dictionary">dictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.infoType">infoType</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.regex">regex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.storedType">storedType</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.dictionaryInput">dictionaryInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.exclusionTypeInput">exclusionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.infoTypeInput">infoTypeInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.likelihoodInput">likelihoodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.regexInput">regexInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.storedTypeInput">storedTypeInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.exclusionType">exclusionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.likelihood">likelihood</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dictionary`<sup>Required</sup> <a name="dictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.dictionary"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference getDictionary();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference</a>

---

##### `infoType`<sup>Required</sup> <a name="infoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.infoType"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference getInfoType();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference</a>

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.regex"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference getRegex();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference</a>

---

##### `storedType`<sup>Required</sup> <a name="storedType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.storedType"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference getStoredType();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference</a>

---

##### `dictionaryInput`<sup>Optional</sup> <a name="dictionaryInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.dictionaryInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary getDictionaryInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a>

---

##### `exclusionTypeInput`<sup>Optional</sup> <a name="exclusionTypeInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.exclusionTypeInput"></a>

```java
public java.lang.String getExclusionTypeInput();
```

- *Type:* java.lang.String

---

##### `infoTypeInput`<sup>Optional</sup> <a name="infoTypeInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.infoTypeInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType getInfoTypeInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a>

---

##### `likelihoodInput`<sup>Optional</sup> <a name="likelihoodInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.likelihoodInput"></a>

```java
public java.lang.String getLikelihoodInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.regexInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex getRegexInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a>

---

##### `storedTypeInput`<sup>Optional</sup> <a name="storedTypeInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.storedTypeInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType getStoredTypeInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a>

---

##### `exclusionType`<sup>Required</sup> <a name="exclusionType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.exclusionType"></a>

```java
public java.lang.String getExclusionType();
```

- *Type:* java.lang.String

---

##### `likelihood`<sup>Required</sup> <a name="likelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.likelihood"></a>

```java
public java.lang.String getLikelihood();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes</a> OR com.hashicorp.cdktf.IResolvable

---


### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference;

new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.resetGroupIndexes">resetGroupIndexes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupIndexes` <a name="resetGroupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.resetGroupIndexes"></a>

```java
public void resetGroupIndexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.groupIndexesInput">groupIndexesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.groupIndexes">groupIndexes</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupIndexesInput`<sup>Optional</sup> <a name="groupIndexesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.groupIndexesInput"></a>

```java
public java.util.List<java.lang.Number> getGroupIndexesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `groupIndexes`<sup>Required</sup> <a name="groupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.groupIndexes"></a>

```java
public java.util.List<java.lang.Number> getGroupIndexes();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a>

---


### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference;

new DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a>

---


### DataLossPreventionInspectTemplateInspectConfigInfoTypesList <a name="DataLossPreventionInspectTemplateInspectConfigInfoTypesList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigInfoTypesList;

new DataLossPreventionInspectTemplateInspectConfigInfoTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.get"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes">DataLossPreventionInspectTemplateInspectConfigInfoTypes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes">DataLossPreventionInspectTemplateInspectConfigInfoTypes</a>>

---


### DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference;

new DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes">DataLossPreventionInspectTemplateInspectConfigInfoTypes</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes">DataLossPreventionInspectTemplateInspectConfigInfoTypes</a> OR com.hashicorp.cdktf.IResolvable

---


### DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference;

new DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a>

---


### DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList <a name="DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList;

new DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.get"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType</a>>

---


### DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference;

new DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.putInfoType">putInfoType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInfoType` <a name="putInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.putInfoType"></a>

```java
public void putInfoType(DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.putInfoType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.infoType">infoType</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.infoTypeInput">infoTypeInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.maxFindingsInput">maxFindingsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.maxFindings">maxFindings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `infoType`<sup>Required</sup> <a name="infoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.infoType"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference getInfoType();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference</a>

---

##### `infoTypeInput`<sup>Optional</sup> <a name="infoTypeInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.infoTypeInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType getInfoTypeInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a>

---

##### `maxFindingsInput`<sup>Optional</sup> <a name="maxFindingsInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.maxFindingsInput"></a>

```java
public java.lang.Number getMaxFindingsInput();
```

- *Type:* java.lang.Number

---

##### `maxFindings`<sup>Required</sup> <a name="maxFindings" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.maxFindings"></a>

```java
public java.lang.Number getMaxFindings();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType</a> OR com.hashicorp.cdktf.IResolvable

---


### DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference;

new DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.putMaxFindingsPerInfoType">putMaxFindingsPerInfoType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.resetMaxFindingsPerInfoType">resetMaxFindingsPerInfoType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaxFindingsPerInfoType` <a name="putMaxFindingsPerInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.putMaxFindingsPerInfoType"></a>

```java
public void putMaxFindingsPerInfoType(IResolvable OR java.util.List<DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.putMaxFindingsPerInfoType.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType</a>>

---

##### `resetMaxFindingsPerInfoType` <a name="resetMaxFindingsPerInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.resetMaxFindingsPerInfoType"></a>

```java
public void resetMaxFindingsPerInfoType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerInfoType">maxFindingsPerInfoType</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerInfoTypeInput">maxFindingsPerInfoTypeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerItemInput">maxFindingsPerItemInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerRequestInput">maxFindingsPerRequestInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerItem">maxFindingsPerItem</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerRequest">maxFindingsPerRequest</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits">DataLossPreventionInspectTemplateInspectConfigLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxFindingsPerInfoType`<sup>Required</sup> <a name="maxFindingsPerInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerInfoType"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList getMaxFindingsPerInfoType();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList</a>

---

##### `maxFindingsPerInfoTypeInput`<sup>Optional</sup> <a name="maxFindingsPerInfoTypeInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerInfoTypeInput"></a>

```java
public java.lang.Object getMaxFindingsPerInfoTypeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType</a>>

---

##### `maxFindingsPerItemInput`<sup>Optional</sup> <a name="maxFindingsPerItemInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerItemInput"></a>

```java
public java.lang.Number getMaxFindingsPerItemInput();
```

- *Type:* java.lang.Number

---

##### `maxFindingsPerRequestInput`<sup>Optional</sup> <a name="maxFindingsPerRequestInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerRequestInput"></a>

```java
public java.lang.Number getMaxFindingsPerRequestInput();
```

- *Type:* java.lang.Number

---

##### `maxFindingsPerItem`<sup>Required</sup> <a name="maxFindingsPerItem" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerItem"></a>

```java
public java.lang.Number getMaxFindingsPerItem();
```

- *Type:* java.lang.Number

---

##### `maxFindingsPerRequest`<sup>Required</sup> <a name="maxFindingsPerRequest" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerRequest"></a>

```java
public java.lang.Number getMaxFindingsPerRequest();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigLimits getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits">DataLossPreventionInspectTemplateInspectConfigLimits</a>

---


### DataLossPreventionInspectTemplateInspectConfigOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigOutputReference;

new DataLossPreventionInspectTemplateInspectConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putCustomInfoTypes">putCustomInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putInfoTypes">putInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putLimits">putLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putRuleSet">putRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetContentOptions">resetContentOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetCustomInfoTypes">resetCustomInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetExcludeInfoTypes">resetExcludeInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetIncludeQuote">resetIncludeQuote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetInfoTypes">resetInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetMinLikelihood">resetMinLikelihood</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetRuleSet">resetRuleSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomInfoTypes` <a name="putCustomInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putCustomInfoTypes"></a>

```java
public void putCustomInfoTypes(IResolvable OR java.util.List<DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putCustomInfoTypes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes</a>>

---

##### `putInfoTypes` <a name="putInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putInfoTypes"></a>

```java
public void putInfoTypes(IResolvable OR java.util.List<DataLossPreventionInspectTemplateInspectConfigInfoTypes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putInfoTypes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes">DataLossPreventionInspectTemplateInspectConfigInfoTypes</a>>

---

##### `putLimits` <a name="putLimits" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putLimits"></a>

```java
public void putLimits(DataLossPreventionInspectTemplateInspectConfigLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits">DataLossPreventionInspectTemplateInspectConfigLimits</a>

---

##### `putRuleSet` <a name="putRuleSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putRuleSet"></a>

```java
public void putRuleSet(IResolvable OR java.util.List<DataLossPreventionInspectTemplateInspectConfigRuleSet> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putRuleSet.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet">DataLossPreventionInspectTemplateInspectConfigRuleSet</a>>

---

##### `resetContentOptions` <a name="resetContentOptions" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetContentOptions"></a>

```java
public void resetContentOptions()
```

##### `resetCustomInfoTypes` <a name="resetCustomInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetCustomInfoTypes"></a>

```java
public void resetCustomInfoTypes()
```

##### `resetExcludeInfoTypes` <a name="resetExcludeInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetExcludeInfoTypes"></a>

```java
public void resetExcludeInfoTypes()
```

##### `resetIncludeQuote` <a name="resetIncludeQuote" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetIncludeQuote"></a>

```java
public void resetIncludeQuote()
```

##### `resetInfoTypes` <a name="resetInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetInfoTypes"></a>

```java
public void resetInfoTypes()
```

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetLimits"></a>

```java
public void resetLimits()
```

##### `resetMinLikelihood` <a name="resetMinLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetMinLikelihood"></a>

```java
public void resetMinLikelihood()
```

##### `resetRuleSet` <a name="resetRuleSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetRuleSet"></a>

```java
public void resetRuleSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.customInfoTypes">customInfoTypes</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.infoTypes">infoTypes</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList">DataLossPreventionInspectTemplateInspectConfigInfoTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference">DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.ruleSet">ruleSet</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList">DataLossPreventionInspectTemplateInspectConfigRuleSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.contentOptionsInput">contentOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.customInfoTypesInput">customInfoTypesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.excludeInfoTypesInput">excludeInfoTypesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.includeQuoteInput">includeQuoteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.infoTypesInput">infoTypesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes">DataLossPreventionInspectTemplateInspectConfigInfoTypes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.limitsInput">limitsInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits">DataLossPreventionInspectTemplateInspectConfigLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.minLikelihoodInput">minLikelihoodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.ruleSetInput">ruleSetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet">DataLossPreventionInspectTemplateInspectConfigRuleSet</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.contentOptions">contentOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.excludeInfoTypes">excludeInfoTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.includeQuote">includeQuote</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.minLikelihood">minLikelihood</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig">DataLossPreventionInspectTemplateInspectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customInfoTypes`<sup>Required</sup> <a name="customInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.customInfoTypes"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList getCustomInfoTypes();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList</a>

---

##### `infoTypes`<sup>Required</sup> <a name="infoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.infoTypes"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigInfoTypesList getInfoTypes();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList">DataLossPreventionInspectTemplateInspectConfigInfoTypesList</a>

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.limits"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference getLimits();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference">DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference</a>

---

##### `ruleSet`<sup>Required</sup> <a name="ruleSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.ruleSet"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetList getRuleSet();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList">DataLossPreventionInspectTemplateInspectConfigRuleSetList</a>

---

##### `contentOptionsInput`<sup>Optional</sup> <a name="contentOptionsInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.contentOptionsInput"></a>

```java
public java.util.List<java.lang.String> getContentOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customInfoTypesInput`<sup>Optional</sup> <a name="customInfoTypesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.customInfoTypesInput"></a>

```java
public java.lang.Object getCustomInfoTypesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes</a>>

---

##### `excludeInfoTypesInput`<sup>Optional</sup> <a name="excludeInfoTypesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.excludeInfoTypesInput"></a>

```java
public java.lang.Object getExcludeInfoTypesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeQuoteInput`<sup>Optional</sup> <a name="includeQuoteInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.includeQuoteInput"></a>

```java
public java.lang.Object getIncludeQuoteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `infoTypesInput`<sup>Optional</sup> <a name="infoTypesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.infoTypesInput"></a>

```java
public java.lang.Object getInfoTypesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes">DataLossPreventionInspectTemplateInspectConfigInfoTypes</a>>

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.limitsInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigLimits getLimitsInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits">DataLossPreventionInspectTemplateInspectConfigLimits</a>

---

##### `minLikelihoodInput`<sup>Optional</sup> <a name="minLikelihoodInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.minLikelihoodInput"></a>

```java
public java.lang.String getMinLikelihoodInput();
```

- *Type:* java.lang.String

---

##### `ruleSetInput`<sup>Optional</sup> <a name="ruleSetInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.ruleSetInput"></a>

```java
public java.lang.Object getRuleSetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet">DataLossPreventionInspectTemplateInspectConfigRuleSet</a>>

---

##### `contentOptions`<sup>Required</sup> <a name="contentOptions" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.contentOptions"></a>

```java
public java.util.List<java.lang.String> getContentOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeInfoTypes`<sup>Required</sup> <a name="excludeInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.excludeInfoTypes"></a>

```java
public java.lang.Object getExcludeInfoTypes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeQuote`<sup>Required</sup> <a name="includeQuote" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.includeQuote"></a>

```java
public java.lang.Object getIncludeQuote();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minLikelihood`<sup>Required</sup> <a name="minLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.minLikelihood"></a>

```java
public java.lang.String getMinLikelihood();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig">DataLossPreventionInspectTemplateInspectConfig</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList;

new DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.get"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes</a>>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference;

new DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes</a> OR com.hashicorp.cdktf.IResolvable

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetList <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetList;

new DataLossPreventionInspectTemplateInspectConfigRuleSetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.get"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet">DataLossPreventionInspectTemplateInspectConfigRuleSet</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet">DataLossPreventionInspectTemplateInspectConfigRuleSet</a>>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference;

new DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putInfoTypes">putInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putRules">putRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInfoTypes` <a name="putInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putInfoTypes"></a>

```java
public void putInfoTypes(IResolvable OR java.util.List<DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putInfoTypes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes</a>>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<DataLossPreventionInspectTemplateInspectConfigRuleSetRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules">DataLossPreventionInspectTemplateInspectConfigRuleSetRules</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.infoTypes">infoTypes</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList">DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.infoTypesInput">infoTypesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules">DataLossPreventionInspectTemplateInspectConfigRuleSetRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet">DataLossPreventionInspectTemplateInspectConfigRuleSet</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `infoTypes`<sup>Required</sup> <a name="infoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.infoTypes"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList getInfoTypes();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList">DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.rules"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList</a>

---

##### `infoTypesInput`<sup>Optional</sup> <a name="infoTypesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.infoTypesInput"></a>

```java
public java.lang.Object getInfoTypesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes</a>>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules">DataLossPreventionInspectTemplateInspectConfigRuleSetRules</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet">DataLossPreventionInspectTemplateInspectConfigRuleSet</a> OR com.hashicorp.cdktf.IResolvable

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference;

new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference;

new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putCloudStoragePath">putCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putWordList">putWordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resetCloudStoragePath">resetCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resetWordList">resetWordList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudStoragePath` <a name="putCloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putCloudStoragePath"></a>

```java
public void putCloudStoragePath(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putCloudStoragePath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a>

---

##### `putWordList` <a name="putWordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putWordList"></a>

```java
public void putWordList(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putWordList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a>

---

##### `resetCloudStoragePath` <a name="resetCloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resetCloudStoragePath"></a>

```java
public void resetCloudStoragePath()
```

##### `resetWordList` <a name="resetWordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resetWordList"></a>

```java
public void resetWordList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.cloudStoragePath">cloudStoragePath</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.wordList">wordList</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.cloudStoragePathInput">cloudStoragePathInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.wordListInput">wordListInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudStoragePath`<sup>Required</sup> <a name="cloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.cloudStoragePath"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference getCloudStoragePath();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference</a>

---

##### `wordList`<sup>Required</sup> <a name="wordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.wordList"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference getWordList();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference</a>

---

##### `cloudStoragePathInput`<sup>Optional</sup> <a name="cloudStoragePathInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.cloudStoragePathInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath getCloudStoragePathInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a>

---

##### `wordListInput`<sup>Optional</sup> <a name="wordListInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.wordListInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList getWordListInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference;

new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.wordsInput">wordsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.words">words</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `wordsInput`<sup>Optional</sup> <a name="wordsInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.wordsInput"></a>

```java
public java.util.List<java.lang.String> getWordsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.words"></a>

```java
public java.util.List<java.lang.String> getWords();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList;

new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.get"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes</a>>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference;

new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes</a> OR com.hashicorp.cdktf.IResolvable

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference;

new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.putInfoTypes">putInfoTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInfoTypes` <a name="putInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.putInfoTypes"></a>

```java
public void putInfoTypes(IResolvable OR java.util.List<DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.putInfoTypes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.infoTypes">infoTypes</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.infoTypesInput">infoTypesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `infoTypes`<sup>Required</sup> <a name="infoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.infoTypes"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList getInfoTypes();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList</a>

---

##### `infoTypesInput`<sup>Optional</sup> <a name="infoTypesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.infoTypesInput"></a>

```java
public java.lang.Object getInfoTypesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference;

new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putDictionary">putDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putExcludeInfoTypes">putExcludeInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putRegex">putRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetDictionary">resetDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetExcludeInfoTypes">resetExcludeInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDictionary` <a name="putDictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putDictionary"></a>

```java
public void putDictionary(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putDictionary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a>

---

##### `putExcludeInfoTypes` <a name="putExcludeInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putExcludeInfoTypes"></a>

```java
public void putExcludeInfoTypes(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putExcludeInfoTypes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a>

---

##### `putRegex` <a name="putRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putRegex"></a>

```java
public void putRegex(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putRegex.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a>

---

##### `resetDictionary` <a name="resetDictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetDictionary"></a>

```java
public void resetDictionary()
```

##### `resetExcludeInfoTypes` <a name="resetExcludeInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetExcludeInfoTypes"></a>

```java
public void resetExcludeInfoTypes()
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.dictionary">dictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.excludeInfoTypes">excludeInfoTypes</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.regex">regex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.dictionaryInput">dictionaryInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.excludeInfoTypesInput">excludeInfoTypesInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.matchingTypeInput">matchingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.regexInput">regexInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.matchingType">matchingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dictionary`<sup>Required</sup> <a name="dictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.dictionary"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference getDictionary();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference</a>

---

##### `excludeInfoTypes`<sup>Required</sup> <a name="excludeInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.excludeInfoTypes"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference getExcludeInfoTypes();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference</a>

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.regex"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference getRegex();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference</a>

---

##### `dictionaryInput`<sup>Optional</sup> <a name="dictionaryInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.dictionaryInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary getDictionaryInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a>

---

##### `excludeInfoTypesInput`<sup>Optional</sup> <a name="excludeInfoTypesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.excludeInfoTypesInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes getExcludeInfoTypesInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a>

---

##### `matchingTypeInput`<sup>Optional</sup> <a name="matchingTypeInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.matchingTypeInput"></a>

```java
public java.lang.String getMatchingTypeInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.regexInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex getRegexInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a>

---

##### `matchingType`<sup>Required</sup> <a name="matchingType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.matchingType"></a>

```java
public java.lang.String getMatchingType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference;

new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.resetGroupIndexes">resetGroupIndexes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupIndexes` <a name="resetGroupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.resetGroupIndexes"></a>

```java
public void resetGroupIndexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.groupIndexesInput">groupIndexesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.groupIndexes">groupIndexes</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupIndexesInput`<sup>Optional</sup> <a name="groupIndexesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.groupIndexesInput"></a>

```java
public java.util.List<java.lang.Number> getGroupIndexesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `groupIndexes`<sup>Required</sup> <a name="groupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.groupIndexes"></a>

```java
public java.util.List<java.lang.Number> getGroupIndexes();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference;

new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.resetGroupIndexes">resetGroupIndexes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupIndexes` <a name="resetGroupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.resetGroupIndexes"></a>

```java
public void resetGroupIndexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.groupIndexesInput">groupIndexesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.groupIndexes">groupIndexes</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupIndexesInput`<sup>Optional</sup> <a name="groupIndexesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.groupIndexesInput"></a>

```java
public java.util.List<java.lang.Number> getGroupIndexesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `groupIndexes`<sup>Required</sup> <a name="groupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.groupIndexes"></a>

```java
public java.util.List<java.lang.Number> getGroupIndexes();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference;

new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resetFixedLikelihood">resetFixedLikelihood</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resetRelativeLikelihood">resetRelativeLikelihood</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixedLikelihood` <a name="resetFixedLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resetFixedLikelihood"></a>

```java
public void resetFixedLikelihood()
```

##### `resetRelativeLikelihood` <a name="resetRelativeLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resetRelativeLikelihood"></a>

```java
public void resetRelativeLikelihood()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fixedLikelihoodInput">fixedLikelihoodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.relativeLikelihoodInput">relativeLikelihoodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fixedLikelihood">fixedLikelihood</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.relativeLikelihood">relativeLikelihood</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedLikelihoodInput`<sup>Optional</sup> <a name="fixedLikelihoodInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fixedLikelihoodInput"></a>

```java
public java.lang.String getFixedLikelihoodInput();
```

- *Type:* java.lang.String

---

##### `relativeLikelihoodInput`<sup>Optional</sup> <a name="relativeLikelihoodInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.relativeLikelihoodInput"></a>

```java
public java.lang.Number getRelativeLikelihoodInput();
```

- *Type:* java.lang.Number

---

##### `fixedLikelihood`<sup>Required</sup> <a name="fixedLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fixedLikelihood"></a>

```java
public java.lang.String getFixedLikelihood();
```

- *Type:* java.lang.String

---

##### `relativeLikelihood`<sup>Required</sup> <a name="relativeLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.relativeLikelihood"></a>

```java
public java.lang.Number getRelativeLikelihood();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference;

new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putHotwordRegex">putHotwordRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putLikelihoodAdjustment">putLikelihoodAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putProximity">putProximity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHotwordRegex` <a name="putHotwordRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putHotwordRegex"></a>

```java
public void putHotwordRegex(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putHotwordRegex.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a>

---

##### `putLikelihoodAdjustment` <a name="putLikelihoodAdjustment" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putLikelihoodAdjustment"></a>

```java
public void putLikelihoodAdjustment(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putLikelihoodAdjustment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a>

---

##### `putProximity` <a name="putProximity" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putProximity"></a>

```java
public void putProximity(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putProximity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.hotwordRegex">hotwordRegex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.likelihoodAdjustment">likelihoodAdjustment</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.proximity">proximity</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.hotwordRegexInput">hotwordRegexInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.likelihoodAdjustmentInput">likelihoodAdjustmentInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.proximityInput">proximityInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hotwordRegex`<sup>Required</sup> <a name="hotwordRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.hotwordRegex"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference getHotwordRegex();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference</a>

---

##### `likelihoodAdjustment`<sup>Required</sup> <a name="likelihoodAdjustment" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.likelihoodAdjustment"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference getLikelihoodAdjustment();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference</a>

---

##### `proximity`<sup>Required</sup> <a name="proximity" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.proximity"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference getProximity();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference</a>

---

##### `hotwordRegexInput`<sup>Optional</sup> <a name="hotwordRegexInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.hotwordRegexInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex getHotwordRegexInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a>

---

##### `likelihoodAdjustmentInput`<sup>Optional</sup> <a name="likelihoodAdjustmentInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.likelihoodAdjustmentInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment getLikelihoodAdjustmentInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a>

---

##### `proximityInput`<sup>Optional</sup> <a name="proximityInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.proximityInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity getProximityInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference;

new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resetWindowAfter">resetWindowAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resetWindowBefore">resetWindowBefore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWindowAfter` <a name="resetWindowAfter" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resetWindowAfter"></a>

```java
public void resetWindowAfter()
```

##### `resetWindowBefore` <a name="resetWindowBefore" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resetWindowBefore"></a>

```java
public void resetWindowBefore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowAfterInput">windowAfterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowBeforeInput">windowBeforeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowAfter">windowAfter</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowBefore">windowBefore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `windowAfterInput`<sup>Optional</sup> <a name="windowAfterInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowAfterInput"></a>

```java
public java.lang.Number getWindowAfterInput();
```

- *Type:* java.lang.Number

---

##### `windowBeforeInput`<sup>Optional</sup> <a name="windowBeforeInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowBeforeInput"></a>

```java
public java.lang.Number getWindowBeforeInput();
```

- *Type:* java.lang.Number

---

##### `windowAfter`<sup>Required</sup> <a name="windowAfter" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowAfter"></a>

```java
public java.lang.Number getWindowAfter();
```

- *Type:* java.lang.Number

---

##### `windowBefore`<sup>Required</sup> <a name="windowBefore" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowBefore"></a>

```java
public java.lang.Number getWindowBefore();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.internalValue"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList;

new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.get"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules">DataLossPreventionInspectTemplateInspectConfigRuleSetRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules">DataLossPreventionInspectTemplateInspectConfigRuleSetRules</a>>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference;

new DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putExclusionRule">putExclusionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putHotwordRule">putHotwordRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resetExclusionRule">resetExclusionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resetHotwordRule">resetHotwordRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusionRule` <a name="putExclusionRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putExclusionRule"></a>

```java
public void putExclusionRule(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putExclusionRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a>

---

##### `putHotwordRule` <a name="putHotwordRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putHotwordRule"></a>

```java
public void putHotwordRule(DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putHotwordRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a>

---

##### `resetExclusionRule` <a name="resetExclusionRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resetExclusionRule"></a>

```java
public void resetExclusionRule()
```

##### `resetHotwordRule` <a name="resetHotwordRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resetHotwordRule"></a>

```java
public void resetHotwordRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.exclusionRule">exclusionRule</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.hotwordRule">hotwordRule</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.exclusionRuleInput">exclusionRuleInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.hotwordRuleInput">hotwordRuleInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules">DataLossPreventionInspectTemplateInspectConfigRuleSetRules</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclusionRule`<sup>Required</sup> <a name="exclusionRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.exclusionRule"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference getExclusionRule();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference</a>

---

##### `hotwordRule`<sup>Required</sup> <a name="hotwordRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.hotwordRule"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference getHotwordRule();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference</a>

---

##### `exclusionRuleInput`<sup>Optional</sup> <a name="exclusionRuleInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.exclusionRuleInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule getExclusionRuleInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a>

---

##### `hotwordRuleInput`<sup>Optional</sup> <a name="hotwordRuleInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.hotwordRuleInput"></a>

```java
public DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule getHotwordRuleInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules">DataLossPreventionInspectTemplateInspectConfigRuleSetRules</a> OR com.hashicorp.cdktf.IResolvable

---


### DataLossPreventionInspectTemplateTimeoutsOutputReference <a name="DataLossPreventionInspectTemplateTimeoutsOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_loss_prevention_inspect_template.DataLossPreventionInspectTemplateTimeoutsOutputReference;

new DataLossPreventionInspectTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts">DataLossPreventionInspectTemplateTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts">DataLossPreventionInspectTemplateTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



