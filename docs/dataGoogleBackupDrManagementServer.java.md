# `dataGoogleBackupDrManagementServer` Submodule <a name="`dataGoogleBackupDrManagementServer` Submodule" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrManagementServer <a name="DataGoogleBackupDrManagementServer" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_management_server google_backup_dr_management_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_backup_dr_management_server.DataGoogleBackupDrManagementServer;

DataGoogleBackupDrManagementServer.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the management server (management console). |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_management_server#id DataGoogleBackupDrManagementServer#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the management server (management console).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_management_server#location DataGoogleBackupDrManagementServer#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_management_server#id DataGoogleBackupDrManagementServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBackupDrManagementServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_backup_dr_management_server.DataGoogleBackupDrManagementServer;

DataGoogleBackupDrManagementServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_backup_dr_management_server.DataGoogleBackupDrManagementServer;

DataGoogleBackupDrManagementServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_backup_dr_management_server.DataGoogleBackupDrManagementServer;

DataGoogleBackupDrManagementServer.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_backup_dr_management_server.DataGoogleBackupDrManagementServer;

DataGoogleBackupDrManagementServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleBackupDrManagementServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleBackupDrManagementServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleBackupDrManagementServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleBackupDrManagementServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_management_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrManagementServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.managementUri">managementUri</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList">DataGoogleBackupDrManagementServerManagementUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList">DataGoogleBackupDrManagementServerNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.oauth2ClientId">oauth2ClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `managementUri`<sup>Required</sup> <a name="managementUri" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.managementUri"></a>

```java
public DataGoogleBackupDrManagementServerManagementUriList getManagementUri();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList">DataGoogleBackupDrManagementServerManagementUriList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.networks"></a>

```java
public DataGoogleBackupDrManagementServerNetworksList getNetworks();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList">DataGoogleBackupDrManagementServerNetworksList</a>

---

##### `oauth2ClientId`<sup>Required</sup> <a name="oauth2ClientId" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.oauth2ClientId"></a>

```java
public java.lang.String getOauth2ClientId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrManagementServerConfig <a name="DataGoogleBackupDrManagementServerConfig" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_backup_dr_management_server.DataGoogleBackupDrManagementServerConfig;

DataGoogleBackupDrManagementServerConfig.builder()
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
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the management server (management console). |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_management_server#id DataGoogleBackupDrManagementServer#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the management server (management console).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_management_server#location DataGoogleBackupDrManagementServer#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_management_server#id DataGoogleBackupDrManagementServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleBackupDrManagementServerManagementUri <a name="DataGoogleBackupDrManagementServerManagementUri" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUri.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_backup_dr_management_server.DataGoogleBackupDrManagementServerManagementUri;

DataGoogleBackupDrManagementServerManagementUri.builder()
    .build();
```


### DataGoogleBackupDrManagementServerNetworks <a name="DataGoogleBackupDrManagementServerNetworks" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_backup_dr_management_server.DataGoogleBackupDrManagementServerNetworks;

DataGoogleBackupDrManagementServerNetworks.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrManagementServerManagementUriList <a name="DataGoogleBackupDrManagementServerManagementUriList" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_backup_dr_management_server.DataGoogleBackupDrManagementServerManagementUriList;

new DataGoogleBackupDrManagementServerManagementUriList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.get"></a>

```java
public DataGoogleBackupDrManagementServerManagementUriOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrManagementServerManagementUriOutputReference <a name="DataGoogleBackupDrManagementServerManagementUriOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_backup_dr_management_server.DataGoogleBackupDrManagementServerManagementUriOutputReference;

new DataGoogleBackupDrManagementServerManagementUriOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.api">api</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.webUi">webUi</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUri">DataGoogleBackupDrManagementServerManagementUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.api"></a>

```java
public java.lang.String getApi();
```

- *Type:* java.lang.String

---

##### `webUi`<sup>Required</sup> <a name="webUi" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.webUi"></a>

```java
public java.lang.String getWebUi();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrManagementServerManagementUri getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUri">DataGoogleBackupDrManagementServerManagementUri</a>

---


### DataGoogleBackupDrManagementServerNetworksList <a name="DataGoogleBackupDrManagementServerNetworksList" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_backup_dr_management_server.DataGoogleBackupDrManagementServerNetworksList;

new DataGoogleBackupDrManagementServerNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.get"></a>

```java
public DataGoogleBackupDrManagementServerNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrManagementServerNetworksOutputReference <a name="DataGoogleBackupDrManagementServerNetworksOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_backup_dr_management_server.DataGoogleBackupDrManagementServerNetworksOutputReference;

new DataGoogleBackupDrManagementServerNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.peeringMode">peeringMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworks">DataGoogleBackupDrManagementServerNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `peeringMode`<sup>Required</sup> <a name="peeringMode" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.peeringMode"></a>

```java
public java.lang.String getPeeringMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrManagementServerNetworks getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworks">DataGoogleBackupDrManagementServerNetworks</a>

---



