# `data_google_container_attached_install_manifest`

Refer to the Terraform Registory for docs: [`data_google_container_attached_install_manifest`](https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest).

# `dataGoogleContainerAttachedInstallManifest` Submodule <a name="`dataGoogleContainerAttachedInstallManifest` Submodule" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleContainerAttachedInstallManifest <a name="DataGoogleContainerAttachedInstallManifest" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest google_container_attached_install_manifest}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_container_attached_install_manifest.DataGoogleContainerAttachedInstallManifest;

DataGoogleContainerAttachedInstallManifest.Builder.create(Construct scope, java.lang.String id)
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
    .clusterId(java.lang.String)
    .location(java.lang.String)
    .platformVersion(java.lang.String)
    .project(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#cluster_id DataGoogleContainerAttachedInstallManifest#cluster_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#location DataGoogleContainerAttachedInstallManifest#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#platform_version DataGoogleContainerAttachedInstallManifest#platform_version}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#project DataGoogleContainerAttachedInstallManifest#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#id DataGoogleContainerAttachedInstallManifest#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#cluster_id DataGoogleContainerAttachedInstallManifest#cluster_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#location DataGoogleContainerAttachedInstallManifest#location}.

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.platformVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#platform_version DataGoogleContainerAttachedInstallManifest#platform_version}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#project DataGoogleContainerAttachedInstallManifest#project}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#id DataGoogleContainerAttachedInstallManifest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_container_attached_install_manifest.DataGoogleContainerAttachedInstallManifest;

DataGoogleContainerAttachedInstallManifest.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_container_attached_install_manifest.DataGoogleContainerAttachedInstallManifest;

DataGoogleContainerAttachedInstallManifest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_container_attached_install_manifest.DataGoogleContainerAttachedInstallManifest;

DataGoogleContainerAttachedInstallManifest.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.manifest">manifest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.platformVersionInput">platformVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.manifest"></a>

```java
public java.lang.String getManifest();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.platformVersionInput"></a>

```java
public java.lang.String getPlatformVersionInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleContainerAttachedInstallManifestConfig <a name="DataGoogleContainerAttachedInstallManifestConfig" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_container_attached_install_manifest.DataGoogleContainerAttachedInstallManifestConfig;

DataGoogleContainerAttachedInstallManifestConfig.builder()
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
    .clusterId(java.lang.String)
    .location(java.lang.String)
    .platformVersion(java.lang.String)
    .project(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#cluster_id DataGoogleContainerAttachedInstallManifest#cluster_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#location DataGoogleContainerAttachedInstallManifest#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#platform_version DataGoogleContainerAttachedInstallManifest#platform_version}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#project DataGoogleContainerAttachedInstallManifest#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#id DataGoogleContainerAttachedInstallManifest#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#cluster_id DataGoogleContainerAttachedInstallManifest#cluster_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#location DataGoogleContainerAttachedInstallManifest#location}.

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#platform_version DataGoogleContainerAttachedInstallManifest#platform_version}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#project DataGoogleContainerAttachedInstallManifest#project}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerAttachedInstallManifest.DataGoogleContainerAttachedInstallManifestConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.2/docs/data-sources/container_attached_install_manifest#id DataGoogleContainerAttachedInstallManifest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



