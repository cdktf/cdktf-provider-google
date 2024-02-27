# `dataGoogleDnsManagedZones` Submodule <a name="`dataGoogleDnsManagedZones` Submodule" id="@cdktf/provider-google.dataGoogleDnsManagedZones"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDnsManagedZones <a name="DataGoogleDnsManagedZones" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/dns_managed_zones google_dns_managed_zones}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_dns_managed_zones.DataGoogleDnsManagedZones;

DataGoogleDnsManagedZones.Builder.create(Construct scope, java.lang.String id)
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
//  .managedZones(IResolvable)
//  .managedZones(java.util.List<DataGoogleDnsManagedZonesManagedZones>)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.managedZones">managedZones</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZones">DataGoogleDnsManagedZonesManagedZones</a>></code> | managed_zones block. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project for the Google Cloud. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedZones`<sup>Optional</sup> <a name="managedZones" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.managedZones"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZones">DataGoogleDnsManagedZonesManagedZones</a>>

managed_zones block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/dns_managed_zones#managed_zones DataGoogleDnsManagedZones#managed_zones}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project for the Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/dns_managed_zones#project DataGoogleDnsManagedZones#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.putManagedZones">putManagedZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.resetManagedZones">resetManagedZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putManagedZones` <a name="putManagedZones" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.putManagedZones"></a>

```java
public void putManagedZones(IResolvable OR java.util.List<DataGoogleDnsManagedZonesManagedZones> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.putManagedZones.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZones">DataGoogleDnsManagedZonesManagedZones</a>>

---

##### `resetManagedZones` <a name="resetManagedZones" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.resetManagedZones"></a>

```java
public void resetManagedZones()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleDnsManagedZones resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_dns_managed_zones.DataGoogleDnsManagedZones;

DataGoogleDnsManagedZones.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_dns_managed_zones.DataGoogleDnsManagedZones;

DataGoogleDnsManagedZones.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_dns_managed_zones.DataGoogleDnsManagedZones;

DataGoogleDnsManagedZones.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_dns_managed_zones.DataGoogleDnsManagedZones;

DataGoogleDnsManagedZones.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleDnsManagedZones.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleDnsManagedZones resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleDnsManagedZones to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleDnsManagedZones that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/dns_managed_zones#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleDnsManagedZones to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.managedZones">managedZones</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList">DataGoogleDnsManagedZonesManagedZonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.managedZonesInput">managedZonesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZones">DataGoogleDnsManagedZonesManagedZones</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedZones`<sup>Required</sup> <a name="managedZones" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.managedZones"></a>

```java
public DataGoogleDnsManagedZonesManagedZonesList getManagedZones();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList">DataGoogleDnsManagedZonesManagedZonesList</a>

---

##### `managedZonesInput`<sup>Optional</sup> <a name="managedZonesInput" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.managedZonesInput"></a>

```java
public java.lang.Object getManagedZonesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZones">DataGoogleDnsManagedZonesManagedZones</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZones.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDnsManagedZonesConfig <a name="DataGoogleDnsManagedZonesConfig" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_dns_managed_zones.DataGoogleDnsManagedZonesConfig;

DataGoogleDnsManagedZonesConfig.builder()
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
//  .managedZones(IResolvable)
//  .managedZones(java.util.List<DataGoogleDnsManagedZonesManagedZones>)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.managedZones">managedZones</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZones">DataGoogleDnsManagedZonesManagedZones</a>></code> | managed_zones block. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project for the Google Cloud. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedZones`<sup>Optional</sup> <a name="managedZones" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.managedZones"></a>

```java
public java.lang.Object getManagedZones();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZones">DataGoogleDnsManagedZonesManagedZones</a>>

managed_zones block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/dns_managed_zones#managed_zones DataGoogleDnsManagedZones#managed_zones}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project for the Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/dns_managed_zones#project DataGoogleDnsManagedZones#project}

---

### DataGoogleDnsManagedZonesManagedZones <a name="DataGoogleDnsManagedZonesManagedZones" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZones.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_dns_managed_zones.DataGoogleDnsManagedZonesManagedZones;

DataGoogleDnsManagedZonesManagedZones.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleDnsManagedZonesManagedZonesList <a name="DataGoogleDnsManagedZonesManagedZonesList" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_dns_managed_zones.DataGoogleDnsManagedZonesManagedZonesList;

new DataGoogleDnsManagedZonesManagedZonesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.get"></a>

```java
public DataGoogleDnsManagedZonesManagedZonesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZones">DataGoogleDnsManagedZonesManagedZones</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZones">DataGoogleDnsManagedZonesManagedZones</a>>

---


### DataGoogleDnsManagedZonesManagedZonesOutputReference <a name="DataGoogleDnsManagedZonesManagedZonesOutputReference" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_dns_managed_zones.DataGoogleDnsManagedZonesManagedZonesOutputReference;

new DataGoogleDnsManagedZonesManagedZonesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.managedZoneId">managedZoneId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.nameServers">nameServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZones">DataGoogleDnsManagedZonesManagedZones</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedZoneId`<sup>Required</sup> <a name="managedZoneId" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.managedZoneId"></a>

```java
public java.lang.Number getManagedZoneId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameServers`<sup>Required</sup> <a name="nameServers" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.nameServers"></a>

```java
public java.util.List<java.lang.String> getNameServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZonesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataGoogleDnsManagedZones.DataGoogleDnsManagedZonesManagedZones">DataGoogleDnsManagedZonesManagedZones</a>

---



