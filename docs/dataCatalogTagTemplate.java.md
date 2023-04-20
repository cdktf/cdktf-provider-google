# `google_data_catalog_tag_template`

Refer to the Terraform Registory for docs: [`google_data_catalog_tag_template`](https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template).

# `dataCatalogTagTemplate` Submodule <a name="`dataCatalogTagTemplate` Submodule" id="@cdktf/provider-google.dataCatalogTagTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogTagTemplate <a name="DataCatalogTagTemplate" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template google_data_catalog_tag_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplate;

DataCatalogTagTemplate.Builder.create(Construct scope, java.lang.String id)
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
    .fields(IResolvable)
    .fields(java.util.List<DataCatalogTagTemplateFields>)
    .tagTemplateId(java.lang.String)
//  .displayName(java.lang.String)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(DataCatalogTagTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.fields">fields</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>></code> | fields block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.tagTemplateId">tagTemplateId</a></code> | <code>java.lang.String</code> | The id of the tag template to create. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for this template. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This confirms the deletion of any possible tags using this template. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#id DataCatalogTagTemplate#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#project DataCatalogTagTemplate#project}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Template location region. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.fields"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>>

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#fields DataCatalogTagTemplate#fields}

---

##### `tagTemplateId`<sup>Required</sup> <a name="tagTemplateId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.tagTemplateId"></a>

- *Type:* java.lang.String

The id of the tag template to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#tag_template_id DataCatalogTagTemplate#tag_template_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#display_name DataCatalogTagTemplate#display_name}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.forceDelete"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This confirms the deletion of any possible tags using this template.

Must be set to true in order to delete the tag template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#force_delete DataCatalogTagTemplate#force_delete}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#id DataCatalogTagTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#project DataCatalogTagTemplate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Template location region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#region DataCatalogTagTemplate#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#timeouts DataCatalogTagTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFields` <a name="putFields" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putFields"></a>

```java
public void putFields(IResolvable OR java.util.List<DataCatalogTagTemplateFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putFields.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putTimeouts"></a>

```java
public void putTimeouts(DataCatalogTagTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetForceDelete"></a>

```java
public void resetForceDelete()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplate;

DataCatalogTagTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplate;

DataCatalogTagTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplate;

DataCatalogTagTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fields">fields</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList">DataCatalogTagTemplateFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference">DataCatalogTagTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fieldsInput">fieldsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forceDeleteInput">forceDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tagTemplateIdInput">tagTemplateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tagTemplateId">tagTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fields"></a>

```java
public DataCatalogTagTemplateFieldsList getFields();
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList">DataCatalogTagTemplateFieldsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.timeouts"></a>

```java
public DataCatalogTagTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference">DataCatalogTagTemplateTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.fieldsInput"></a>

```java
public java.lang.Object getFieldsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>>

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forceDeleteInput"></a>

```java
public java.lang.Object getForceDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagTemplateIdInput`<sup>Optional</sup> <a name="tagTemplateIdInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tagTemplateIdInput"></a>

```java
public java.lang.String getTagTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tagTemplateId`<sup>Required</sup> <a name="tagTemplateId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tagTemplateId"></a>

```java
public java.lang.String getTagTemplateId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogTagTemplateConfig <a name="DataCatalogTagTemplateConfig" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplateConfig;

DataCatalogTagTemplateConfig.builder()
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
    .fields(IResolvable)
    .fields(java.util.List<DataCatalogTagTemplateFields>)
    .tagTemplateId(java.lang.String)
//  .displayName(java.lang.String)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(DataCatalogTagTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.fields">fields</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>></code> | fields block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.tagTemplateId">tagTemplateId</a></code> | <code>java.lang.String</code> | The id of the tag template to create. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for this template. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This confirms the deletion of any possible tags using this template. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#id DataCatalogTagTemplate#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#project DataCatalogTagTemplate#project}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.region">region</a></code> | <code>java.lang.String</code> | Template location region. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.fields"></a>

```java
public java.lang.Object getFields();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>>

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#fields DataCatalogTagTemplate#fields}

---

##### `tagTemplateId`<sup>Required</sup> <a name="tagTemplateId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.tagTemplateId"></a>

```java
public java.lang.String getTagTemplateId();
```

- *Type:* java.lang.String

The id of the tag template to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#tag_template_id DataCatalogTagTemplate#tag_template_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#display_name DataCatalogTagTemplate#display_name}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This confirms the deletion of any possible tags using this template.

Must be set to true in order to delete the tag template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#force_delete DataCatalogTagTemplate#force_delete}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#id DataCatalogTagTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#project DataCatalogTagTemplate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Template location region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#region DataCatalogTagTemplate#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateConfig.property.timeouts"></a>

```java
public DataCatalogTagTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#timeouts DataCatalogTagTemplate#timeouts}

---

### DataCatalogTagTemplateFields <a name="DataCatalogTagTemplateFields" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplateFields;

DataCatalogTagTemplateFields.builder()
    .fieldId(java.lang.String)
    .type(DataCatalogTagTemplateFieldsType)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .isRequired(java.lang.Boolean)
//  .isRequired(IResolvable)
//  .order(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.fieldId">fieldId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#field_id DataCatalogTagTemplate#field_id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.type">type</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a></code> | type block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.description">description</a></code> | <code>java.lang.String</code> | A description for this field. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for this field. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.isRequired">isRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this is a required field. Defaults to false. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.order">order</a></code> | <code>java.lang.Number</code> | The order of this field with respect to other fields in this tag template. |

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.fieldId"></a>

```java
public java.lang.String getFieldId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#field_id DataCatalogTagTemplate#field_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.type"></a>

```java
public DataCatalogTagTemplateFieldsType getType();
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a>

type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#type DataCatalogTagTemplate#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#description DataCatalogTagTemplate#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#display_name DataCatalogTagTemplate#display_name}

---

##### `isRequired`<sup>Optional</sup> <a name="isRequired" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.isRequired"></a>

```java
public java.lang.Object getIsRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this is a required field. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#is_required DataCatalogTagTemplate#is_required}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

The order of this field with respect to other fields in this tag template.

A higher value indicates a more important field. The value can be negative.
Multiple fields can have the same order, and field orders within a tag do not have to be sequential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#order DataCatalogTagTemplate#order}

---

### DataCatalogTagTemplateFieldsType <a name="DataCatalogTagTemplateFieldsType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplateFieldsType;

DataCatalogTagTemplateFieldsType.builder()
//  .enumType(DataCatalogTagTemplateFieldsTypeEnumType)
//  .primitiveType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType.property.enumType">enumType</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a></code> | enum_type block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType.property.primitiveType">primitiveType</a></code> | <code>java.lang.String</code> | Represents primitive types - string, bool etc. |

---

##### `enumType`<sup>Optional</sup> <a name="enumType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType.property.enumType"></a>

```java
public DataCatalogTagTemplateFieldsTypeEnumType getEnumType();
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a>

enum_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#enum_type DataCatalogTagTemplate#enum_type}

---

##### `primitiveType`<sup>Optional</sup> <a name="primitiveType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType.property.primitiveType"></a>

```java
public java.lang.String getPrimitiveType();
```

- *Type:* java.lang.String

Represents primitive types - string, bool etc.

Exactly one of 'primitive_type' or 'enum_type' must be set Possible values: ["DOUBLE", "STRING", "BOOL", "TIMESTAMP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#primitive_type DataCatalogTagTemplate#primitive_type}

---

### DataCatalogTagTemplateFieldsTypeEnumType <a name="DataCatalogTagTemplateFieldsTypeEnumType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplateFieldsTypeEnumType;

DataCatalogTagTemplateFieldsTypeEnumType.builder()
    .allowedValues(IResolvable)
    .allowedValues(java.util.List<DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>></code> | allowed_values block. |

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType.property.allowedValues"></a>

```java
public java.lang.Object getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>>

allowed_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#allowed_values DataCatalogTagTemplate#allowed_values}

---

### DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues <a name="DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues;

DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues.builder()
    .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the enum value. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#display_name DataCatalogTagTemplate#display_name}

---

### DataCatalogTagTemplateTimeouts <a name="DataCatalogTagTemplateTimeouts" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplateTimeouts;

DataCatalogTagTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#create DataCatalogTagTemplate#create}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#delete DataCatalogTagTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#update DataCatalogTagTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#create DataCatalogTagTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#delete DataCatalogTagTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/data_catalog_tag_template#update DataCatalogTagTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogTagTemplateFieldsList <a name="DataCatalogTagTemplateFieldsList" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplateFieldsList;

new DataCatalogTagTemplateFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.get"></a>

```java
public DataCatalogTagTemplateFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a>>

---


### DataCatalogTagTemplateFieldsOutputReference <a name="DataCatalogTagTemplateFieldsOutputReference" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplateFieldsOutputReference;

new DataCatalogTagTemplateFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.putType">putType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetIsRequired">resetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetOrder">resetOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putType` <a name="putType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.putType"></a>

```java
public void putType(DataCatalogTagTemplateFieldsType value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.putType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetIsRequired` <a name="resetIsRequired" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetIsRequired"></a>

```java
public void resetIsRequired()
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.resetOrder"></a>

```java
public void resetOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.type">type</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference">DataCatalogTagTemplateFieldsTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fieldIdInput">fieldIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.isRequiredInput">isRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.typeInput">typeInput</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.isRequired">isRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.type"></a>

```java
public DataCatalogTagTemplateFieldsTypeOutputReference getType();
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference">DataCatalogTagTemplateFieldsTypeOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `fieldIdInput`<sup>Optional</sup> <a name="fieldIdInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fieldIdInput"></a>

```java
public java.lang.String getFieldIdInput();
```

- *Type:* java.lang.String

---

##### `isRequiredInput`<sup>Optional</sup> <a name="isRequiredInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.isRequiredInput"></a>

```java
public java.lang.Object getIsRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.typeInput"></a>

```java
public DataCatalogTagTemplateFieldsType getTypeInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.fieldId"></a>

```java
public java.lang.String getFieldId();
```

- *Type:* java.lang.String

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.isRequired"></a>

```java
public java.lang.Object getIsRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFields">DataCatalogTagTemplateFields</a> OR com.hashicorp.cdktf.IResolvable

---


### DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList <a name="DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList;

new DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.get"></a>

```java
public DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>>

---


### DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference <a name="DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference;

new DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a> OR com.hashicorp.cdktf.IResolvable

---


### DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference <a name="DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference;

new DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.putAllowedValues">putAllowedValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedValues` <a name="putAllowedValues" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.putAllowedValues"></a>

```java
public void putAllowedValues(IResolvable OR java.util.List<DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.putAllowedValues.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValues">allowedValues</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValues"></a>

```java
public DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList getAllowedValues();
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList</a>

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValuesInput"></a>

```java
public java.lang.Object getAllowedValuesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.internalValue"></a>

```java
public DataCatalogTagTemplateFieldsTypeEnumType getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a>

---


### DataCatalogTagTemplateFieldsTypeOutputReference <a name="DataCatalogTagTemplateFieldsTypeOutputReference" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplateFieldsTypeOutputReference;

new DataCatalogTagTemplateFieldsTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.putEnumType">putEnumType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resetEnumType">resetEnumType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resetPrimitiveType">resetPrimitiveType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnumType` <a name="putEnumType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.putEnumType"></a>

```java
public void putEnumType(DataCatalogTagTemplateFieldsTypeEnumType value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.putEnumType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a>

---

##### `resetEnumType` <a name="resetEnumType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resetEnumType"></a>

```java
public void resetEnumType()
```

##### `resetPrimitiveType` <a name="resetPrimitiveType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.resetPrimitiveType"></a>

```java
public void resetPrimitiveType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.enumType">enumType</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference">DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.enumTypeInput">enumTypeInput</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveTypeInput">primitiveTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveType">primitiveType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enumType`<sup>Required</sup> <a name="enumType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.enumType"></a>

```java
public DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference getEnumType();
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference">DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference</a>

---

##### `enumTypeInput`<sup>Optional</sup> <a name="enumTypeInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.enumTypeInput"></a>

```java
public DataCatalogTagTemplateFieldsTypeEnumType getEnumTypeInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeEnumType">DataCatalogTagTemplateFieldsTypeEnumType</a>

---

##### `primitiveTypeInput`<sup>Optional</sup> <a name="primitiveTypeInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveTypeInput"></a>

```java
public java.lang.String getPrimitiveTypeInput();
```

- *Type:* java.lang.String

---

##### `primitiveType`<sup>Required</sup> <a name="primitiveType" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveType"></a>

```java
public java.lang.String getPrimitiveType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsTypeOutputReference.property.internalValue"></a>

```java
public DataCatalogTagTemplateFieldsType getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateFieldsType">DataCatalogTagTemplateFieldsType</a>

---


### DataCatalogTagTemplateTimeoutsOutputReference <a name="DataCatalogTagTemplateTimeoutsOutputReference" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_catalog_tag_template.DataCatalogTagTemplateTimeoutsOutputReference;

new DataCatalogTagTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTagTemplate.DataCatalogTagTemplateTimeouts">DataCatalogTagTemplateTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



