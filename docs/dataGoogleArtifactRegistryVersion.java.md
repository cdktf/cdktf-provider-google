# `dataGoogleArtifactRegistryVersion` Submodule <a name="`dataGoogleArtifactRegistryVersion` Submodule" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryVersion <a name="DataGoogleArtifactRegistryVersion" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version google_artifact_registry_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_version.DataGoogleArtifactRegistryVersion;

DataGoogleArtifactRegistryVersion.Builder.create(Construct scope, java.lang.String id)
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
    .packageName(java.lang.String)
    .repositoryId(java.lang.String)
    .versionName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .view(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#location DataGoogleArtifactRegistryVersion#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.packageName">packageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#package_name DataGoogleArtifactRegistryVersion#package_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#repository_id DataGoogleArtifactRegistryVersion#repository_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.versionName">versionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#version_name DataGoogleArtifactRegistryVersion#version_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#id DataGoogleArtifactRegistryVersion#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#project DataGoogleArtifactRegistryVersion#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.view">view</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#view DataGoogleArtifactRegistryVersion#view}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#location DataGoogleArtifactRegistryVersion#location}.

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.packageName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#package_name DataGoogleArtifactRegistryVersion#package_name}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#repository_id DataGoogleArtifactRegistryVersion#repository_id}.

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.versionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#version_name DataGoogleArtifactRegistryVersion#version_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#id DataGoogleArtifactRegistryVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#project DataGoogleArtifactRegistryVersion#project}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.Initializer.parameter.view"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#view DataGoogleArtifactRegistryVersion#view}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetView">resetView</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetProject"></a>

```java
public void resetProject()
```

##### `resetView` <a name="resetView" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.resetView"></a>

```java
public void resetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleArtifactRegistryVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_version.DataGoogleArtifactRegistryVersion;

DataGoogleArtifactRegistryVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_version.DataGoogleArtifactRegistryVersion;

DataGoogleArtifactRegistryVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_version.DataGoogleArtifactRegistryVersion;

DataGoogleArtifactRegistryVersion.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_version.DataGoogleArtifactRegistryVersion;

DataGoogleArtifactRegistryVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleArtifactRegistryVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleArtifactRegistryVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleArtifactRegistryVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleArtifactRegistryVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.annotations">annotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.relatedTags">relatedTags</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList">DataGoogleArtifactRegistryVersionRelatedTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.packageNameInput">packageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.versionNameInput">versionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.viewInput">viewInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.packageName">packageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.versionName">versionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.view">view</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.annotations"></a>

```java
public StringMap getAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `relatedTags`<sup>Required</sup> <a name="relatedTags" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.relatedTags"></a>

```java
public DataGoogleArtifactRegistryVersionRelatedTagsList getRelatedTags();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList">DataGoogleArtifactRegistryVersionRelatedTagsList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `packageNameInput`<sup>Optional</sup> <a name="packageNameInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.packageNameInput"></a>

```java
public java.lang.String getPackageNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `versionNameInput`<sup>Optional</sup> <a name="versionNameInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.versionNameInput"></a>

```java
public java.lang.String getVersionNameInput();
```

- *Type:* java.lang.String

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.viewInput"></a>

```java
public java.lang.String getViewInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.packageName"></a>

```java
public java.lang.String getPackageName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.view"></a>

```java
public java.lang.String getView();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryVersionConfig <a name="DataGoogleArtifactRegistryVersionConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_version.DataGoogleArtifactRegistryVersionConfig;

DataGoogleArtifactRegistryVersionConfig.builder()
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
    .packageName(java.lang.String)
    .repositoryId(java.lang.String)
    .versionName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .view(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#location DataGoogleArtifactRegistryVersion#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.packageName">packageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#package_name DataGoogleArtifactRegistryVersion#package_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#repository_id DataGoogleArtifactRegistryVersion#repository_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.versionName">versionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#version_name DataGoogleArtifactRegistryVersion#version_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#id DataGoogleArtifactRegistryVersion#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#project DataGoogleArtifactRegistryVersion#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.view">view</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#view DataGoogleArtifactRegistryVersion#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#location DataGoogleArtifactRegistryVersion#location}.

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.packageName"></a>

```java
public java.lang.String getPackageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#package_name DataGoogleArtifactRegistryVersion#package_name}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#repository_id DataGoogleArtifactRegistryVersion#repository_id}.

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#version_name DataGoogleArtifactRegistryVersion#version_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#id DataGoogleArtifactRegistryVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#project DataGoogleArtifactRegistryVersion#project}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionConfig.property.view"></a>

```java
public java.lang.String getView();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/artifact_registry_version#view DataGoogleArtifactRegistryVersion#view}.

---

### DataGoogleArtifactRegistryVersionRelatedTags <a name="DataGoogleArtifactRegistryVersionRelatedTags" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_version.DataGoogleArtifactRegistryVersionRelatedTags;

DataGoogleArtifactRegistryVersionRelatedTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryVersionRelatedTagsList <a name="DataGoogleArtifactRegistryVersionRelatedTagsList" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_version.DataGoogleArtifactRegistryVersionRelatedTagsList;

new DataGoogleArtifactRegistryVersionRelatedTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.get"></a>

```java
public DataGoogleArtifactRegistryVersionRelatedTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryVersionRelatedTagsOutputReference <a name="DataGoogleArtifactRegistryVersionRelatedTagsOutputReference" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_artifact_registry_version.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference;

new DataGoogleArtifactRegistryVersionRelatedTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTags">DataGoogleArtifactRegistryVersionRelatedTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTagsOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryVersionRelatedTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryVersion.DataGoogleArtifactRegistryVersionRelatedTags">DataGoogleArtifactRegistryVersionRelatedTags</a>

---



