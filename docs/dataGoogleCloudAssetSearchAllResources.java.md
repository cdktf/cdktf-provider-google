# `dataGoogleCloudAssetSearchAllResources` Submodule <a name="`dataGoogleCloudAssetSearchAllResources` Submodule" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudAssetSearchAllResources <a name="DataGoogleCloudAssetSearchAllResources" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources google_cloud_asset_search_all_resources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_asset_search_all_resources.DataGoogleCloudAssetSearchAllResources;

DataGoogleCloudAssetSearchAllResources.Builder.create(Construct scope, java.lang.String id)
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
    .scope(java.lang.String)
//  .assetTypes(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .query(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#scope DataGoogleCloudAssetSearchAllResources#scope}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.assetTypes">assetTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#asset_types DataGoogleCloudAssetSearchAllResources#asset_types}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#id DataGoogleCloudAssetSearchAllResources#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#query DataGoogleCloudAssetSearchAllResources#query}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#scope DataGoogleCloudAssetSearchAllResources#scope}.

---

##### `assetTypes`<sup>Optional</sup> <a name="assetTypes" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.assetTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#asset_types DataGoogleCloudAssetSearchAllResources#asset_types}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#id DataGoogleCloudAssetSearchAllResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.query"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#query DataGoogleCloudAssetSearchAllResources#query}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetAssetTypes">resetAssetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAssetTypes` <a name="resetAssetTypes" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetAssetTypes"></a>

```java
public void resetAssetTypes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetId"></a>

```java
public void resetId()
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetQuery"></a>

```java
public void resetQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudAssetSearchAllResources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_asset_search_all_resources.DataGoogleCloudAssetSearchAllResources;

DataGoogleCloudAssetSearchAllResources.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_asset_search_all_resources.DataGoogleCloudAssetSearchAllResources;

DataGoogleCloudAssetSearchAllResources.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_asset_search_all_resources.DataGoogleCloudAssetSearchAllResources;

DataGoogleCloudAssetSearchAllResources.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_asset_search_all_resources.DataGoogleCloudAssetSearchAllResources;

DataGoogleCloudAssetSearchAllResources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleCloudAssetSearchAllResources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleCloudAssetSearchAllResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleCloudAssetSearchAllResources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleCloudAssetSearchAllResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudAssetSearchAllResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.results">results</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList">DataGoogleCloudAssetSearchAllResourcesResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.assetTypesInput">assetTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.assetTypes">assetTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.results"></a>

```java
public DataGoogleCloudAssetSearchAllResourcesResultsList getResults();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList">DataGoogleCloudAssetSearchAllResourcesResultsList</a>

---

##### `assetTypesInput`<sup>Optional</sup> <a name="assetTypesInput" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.assetTypesInput"></a>

```java
public java.util.List<java.lang.String> getAssetTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `assetTypes`<sup>Required</sup> <a name="assetTypes" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.assetTypes"></a>

```java
public java.util.List<java.lang.String> getAssetTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudAssetSearchAllResourcesConfig <a name="DataGoogleCloudAssetSearchAllResourcesConfig" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_asset_search_all_resources.DataGoogleCloudAssetSearchAllResourcesConfig;

DataGoogleCloudAssetSearchAllResourcesConfig.builder()
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
    .scope(java.lang.String)
//  .assetTypes(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#scope DataGoogleCloudAssetSearchAllResources#scope}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.assetTypes">assetTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#asset_types DataGoogleCloudAssetSearchAllResources#asset_types}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#id DataGoogleCloudAssetSearchAllResources#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#query DataGoogleCloudAssetSearchAllResources#query}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#scope DataGoogleCloudAssetSearchAllResources#scope}.

---

##### `assetTypes`<sup>Optional</sup> <a name="assetTypes" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.assetTypes"></a>

```java
public java.util.List<java.lang.String> getAssetTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#asset_types DataGoogleCloudAssetSearchAllResources#asset_types}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#id DataGoogleCloudAssetSearchAllResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/cloud_asset_search_all_resources#query DataGoogleCloudAssetSearchAllResources#query}.

---

### DataGoogleCloudAssetSearchAllResourcesResults <a name="DataGoogleCloudAssetSearchAllResourcesResults" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_asset_search_all_resources.DataGoogleCloudAssetSearchAllResourcesResults;

DataGoogleCloudAssetSearchAllResourcesResults.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudAssetSearchAllResourcesResultsList <a name="DataGoogleCloudAssetSearchAllResourcesResultsList" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_asset_search_all_resources.DataGoogleCloudAssetSearchAllResourcesResultsList;

new DataGoogleCloudAssetSearchAllResourcesResultsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.get"></a>

```java
public DataGoogleCloudAssetSearchAllResourcesResultsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudAssetSearchAllResourcesResultsOutputReference <a name="DataGoogleCloudAssetSearchAllResourcesResultsOutputReference" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_asset_search_all_resources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference;

new DataGoogleCloudAssetSearchAllResourcesResultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.assetType">assetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.folders">folders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.kmsKeys">kmsKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.networkTags">networkTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.parentAssetType">parentAssetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.parentFullResourceName">parentFullResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults">DataGoogleCloudAssetSearchAllResourcesResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.assetType"></a>

```java
public java.lang.String getAssetType();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `folders`<sup>Required</sup> <a name="folders" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.folders"></a>

```java
public java.util.List<java.lang.String> getFolders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kmsKeys`<sup>Required</sup> <a name="kmsKeys" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.kmsKeys"></a>

```java
public java.util.List<java.lang.String> getKmsKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkTags`<sup>Required</sup> <a name="networkTags" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.networkTags"></a>

```java
public java.util.List<java.lang.String> getNetworkTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `parentAssetType`<sup>Required</sup> <a name="parentAssetType" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.parentAssetType"></a>

```java
public java.lang.String getParentAssetType();
```

- *Type:* java.lang.String

---

##### `parentFullResourceName`<sup>Required</sup> <a name="parentFullResourceName" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.parentFullResourceName"></a>

```java
public java.lang.String getParentFullResourceName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudAssetSearchAllResourcesResults getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults">DataGoogleCloudAssetSearchAllResourcesResults</a>

---



