# `dataGoogleCloudIdentityGroupLookup` Submodule <a name="`dataGoogleCloudIdentityGroupLookup` Submodule" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudIdentityGroupLookup <a name="DataGoogleCloudIdentityGroupLookup" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/cloud_identity_group_lookup google_cloud_identity_group_lookup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_lookup.DataGoogleCloudIdentityGroupLookup;

DataGoogleCloudIdentityGroupLookup.Builder.create(Construct scope, java.lang.String id)
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
    .groupKey(DataGoogleCloudIdentityGroupLookupGroupKey)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.groupKey">groupKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | group_key block. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupKey`<sup>Required</sup> <a name="groupKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.groupKey"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

group_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/cloud_identity_group_lookup#group_key DataGoogleCloudIdentityGroupLookup#group_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.putGroupKey">putGroupKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putGroupKey` <a name="putGroupKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.putGroupKey"></a>

```java
public void putGroupKey(DataGoogleCloudIdentityGroupLookupGroupKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.putGroupKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudIdentityGroupLookup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_lookup.DataGoogleCloudIdentityGroupLookup;

DataGoogleCloudIdentityGroupLookup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_lookup.DataGoogleCloudIdentityGroupLookup;

DataGoogleCloudIdentityGroupLookup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_lookup.DataGoogleCloudIdentityGroupLookup;

DataGoogleCloudIdentityGroupLookup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_lookup.DataGoogleCloudIdentityGroupLookup;

DataGoogleCloudIdentityGroupLookup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleCloudIdentityGroupLookup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleCloudIdentityGroupLookup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleCloudIdentityGroupLookup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleCloudIdentityGroupLookup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/cloud_identity_group_lookup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudIdentityGroupLookup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKey">groupKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference">DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKeyInput">groupKeyInput</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `groupKey`<sup>Required</sup> <a name="groupKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKey"></a>

```java
public DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference getGroupKey();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference">DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `groupKeyInput`<sup>Optional</sup> <a name="groupKeyInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKeyInput"></a>

```java
public DataGoogleCloudIdentityGroupLookupGroupKey getGroupKeyInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudIdentityGroupLookupConfig <a name="DataGoogleCloudIdentityGroupLookupConfig" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_lookup.DataGoogleCloudIdentityGroupLookupConfig;

DataGoogleCloudIdentityGroupLookupConfig.builder()
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
    .groupKey(DataGoogleCloudIdentityGroupLookupGroupKey)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.groupKey">groupKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | group_key block. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupKey`<sup>Required</sup> <a name="groupKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.groupKey"></a>

```java
public DataGoogleCloudIdentityGroupLookupGroupKey getGroupKey();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

group_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/cloud_identity_group_lookup#group_key DataGoogleCloudIdentityGroupLookup#group_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudIdentityGroupLookupGroupKey <a name="DataGoogleCloudIdentityGroupLookupGroupKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_lookup.DataGoogleCloudIdentityGroupLookupGroupKey;

DataGoogleCloudIdentityGroupLookupGroupKey.builder()
    .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the entity. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace in which the entity exists. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the entity.

For Google-managed entities, the id should be the email address of an existing group or user.
For external-identity-mapped entities, the id must be a string conforming to the Identity Source's requirements.
Must be unique within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity such as a Google user or a Google Group.
If specified, the EntityKey represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of identitysources/{identity_source}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/cloud_identity_group_lookup#namespace DataGoogleCloudIdentityGroupLookup#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference <a name="DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_identity_group_lookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference;

new DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudIdentityGroupLookupGroupKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

---



