# `dataGoogleDataprocMetastoreDatabaseIamPolicy` Submodule <a name="`dataGoogleDataprocMetastoreDatabaseIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDataprocMetastoreDatabaseIamPolicy <a name="DataGoogleDataprocMetastoreDatabaseIamPolicy" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy google_dataproc_metastore_database_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_dataproc_metastore_database_iam_policy.DataGoogleDataprocMetastoreDatabaseIamPolicy;

DataGoogleDataprocMetastoreDatabaseIamPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .database(java.lang.String)
    .serviceId(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#database DataGoogleDataprocMetastoreDatabaseIamPolicy#database}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.serviceId">serviceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#service_id DataGoogleDataprocMetastoreDatabaseIamPolicy#service_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#id DataGoogleDataprocMetastoreDatabaseIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#location DataGoogleDataprocMetastoreDatabaseIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#project DataGoogleDataprocMetastoreDatabaseIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.database"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#database DataGoogleDataprocMetastoreDatabaseIamPolicy#database}.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.serviceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#service_id DataGoogleDataprocMetastoreDatabaseIamPolicy#service_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#id DataGoogleDataprocMetastoreDatabaseIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#location DataGoogleDataprocMetastoreDatabaseIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#project DataGoogleDataprocMetastoreDatabaseIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleDataprocMetastoreDatabaseIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_dataproc_metastore_database_iam_policy.DataGoogleDataprocMetastoreDatabaseIamPolicy;

DataGoogleDataprocMetastoreDatabaseIamPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_dataproc_metastore_database_iam_policy.DataGoogleDataprocMetastoreDatabaseIamPolicy;

DataGoogleDataprocMetastoreDatabaseIamPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_dataproc_metastore_database_iam_policy.DataGoogleDataprocMetastoreDatabaseIamPolicy;

DataGoogleDataprocMetastoreDatabaseIamPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_dataproc_metastore_database_iam_policy.DataGoogleDataprocMetastoreDatabaseIamPolicy;

DataGoogleDataprocMetastoreDatabaseIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleDataprocMetastoreDatabaseIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleDataprocMetastoreDatabaseIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleDataprocMetastoreDatabaseIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleDataprocMetastoreDatabaseIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleDataprocMetastoreDatabaseIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.policyData">policyData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.policyData"></a>

```java
public java.lang.String getPolicyData();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDataprocMetastoreDatabaseIamPolicyConfig <a name="DataGoogleDataprocMetastoreDatabaseIamPolicyConfig" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_dataproc_metastore_database_iam_policy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig;

DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.builder()
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
    .database(java.lang.String)
    .serviceId(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#database DataGoogleDataprocMetastoreDatabaseIamPolicy#database}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#service_id DataGoogleDataprocMetastoreDatabaseIamPolicy#service_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#id DataGoogleDataprocMetastoreDatabaseIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#location DataGoogleDataprocMetastoreDatabaseIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#project DataGoogleDataprocMetastoreDatabaseIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#database DataGoogleDataprocMetastoreDatabaseIamPolicy#database}.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#service_id DataGoogleDataprocMetastoreDatabaseIamPolicy#service_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#id DataGoogleDataprocMetastoreDatabaseIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#location DataGoogleDataprocMetastoreDatabaseIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleDataprocMetastoreDatabaseIamPolicy.DataGoogleDataprocMetastoreDatabaseIamPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/data-sources/dataproc_metastore_database_iam_policy#project DataGoogleDataprocMetastoreDatabaseIamPolicy#project}.

---



