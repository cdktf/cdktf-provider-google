# `dataGoogleCloudfunctions2Function` Submodule <a name="`dataGoogleCloudfunctions2Function` Submodule" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudfunctions2Function <a name="DataGoogleCloudfunctions2Function" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloudfunctions2_function google_cloudfunctions2_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2Function;

DataGoogleCloudfunctions2Function.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of this cloud function. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the function. Function names must be unique globally and match pattern 'projects/* /locations/* /functions/*'. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloudfunctions2_function#id DataGoogleCloudfunctions2Function#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloudfunctions2_function#project DataGoogleCloudfunctions2Function#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of this cloud function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloudfunctions2_function#location DataGoogleCloudfunctions2Function#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A user-defined name of the function. Function names must be unique globally and match pattern 'projects/* /locations/* /functions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloudfunctions2_function#name DataGoogleCloudfunctions2Function#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloudfunctions2_function#id DataGoogleCloudfunctions2Function#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloudfunctions2_function#project DataGoogleCloudfunctions2Function#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudfunctions2Function resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2Function;

DataGoogleCloudfunctions2Function.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2Function;

DataGoogleCloudfunctions2Function.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2Function;

DataGoogleCloudfunctions2Function.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2Function;

DataGoogleCloudfunctions2Function.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleCloudfunctions2Function.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleCloudfunctions2Function resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleCloudfunctions2Function to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleCloudfunctions2Function that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloudfunctions2_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudfunctions2Function to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.buildConfig">buildConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList">DataGoogleCloudfunctions2FunctionBuildConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.eventTrigger">eventTrigger</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList">DataGoogleCloudfunctions2FunctionEventTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.serviceConfig">serviceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList">DataGoogleCloudfunctions2FunctionServiceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `buildConfig`<sup>Required</sup> <a name="buildConfig" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.buildConfig"></a>

```java
public DataGoogleCloudfunctions2FunctionBuildConfigList getBuildConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList">DataGoogleCloudfunctions2FunctionBuildConfigList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `eventTrigger`<sup>Required</sup> <a name="eventTrigger" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.eventTrigger"></a>

```java
public DataGoogleCloudfunctions2FunctionEventTriggerList getEventTrigger();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList">DataGoogleCloudfunctions2FunctionEventTriggerList</a>

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `serviceConfig`<sup>Required</sup> <a name="serviceConfig" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.serviceConfig"></a>

```java
public DataGoogleCloudfunctions2FunctionServiceConfigList getServiceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList">DataGoogleCloudfunctions2FunctionServiceConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudfunctions2FunctionBuildConfig <a name="DataGoogleCloudfunctions2FunctionBuildConfig" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionBuildConfig;

DataGoogleCloudfunctions2FunctionBuildConfig.builder()
    .build();
```


### DataGoogleCloudfunctions2FunctionBuildConfigSource <a name="DataGoogleCloudfunctions2FunctionBuildConfigSource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionBuildConfigSource;

DataGoogleCloudfunctions2FunctionBuildConfigSource.builder()
    .build();
```


### DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource;

DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.builder()
    .build();
```


### DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource;

DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource.builder()
    .build();
```


### DataGoogleCloudfunctions2FunctionConfig <a name="DataGoogleCloudfunctions2FunctionConfig" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionConfig;

DataGoogleCloudfunctions2FunctionConfig.builder()
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of this cloud function. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the function. Function names must be unique globally and match pattern 'projects/* /locations/* /functions/*'. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloudfunctions2_function#id DataGoogleCloudfunctions2Function#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloudfunctions2_function#project DataGoogleCloudfunctions2Function#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of this cloud function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloudfunctions2_function#location DataGoogleCloudfunctions2Function#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-defined name of the function. Function names must be unique globally and match pattern 'projects/* /locations/* /functions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloudfunctions2_function#name DataGoogleCloudfunctions2Function#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloudfunctions2_function#id DataGoogleCloudfunctions2Function#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/cloudfunctions2_function#project DataGoogleCloudfunctions2Function#project}.

---

### DataGoogleCloudfunctions2FunctionEventTrigger <a name="DataGoogleCloudfunctions2FunctionEventTrigger" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTrigger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionEventTrigger;

DataGoogleCloudfunctions2FunctionEventTrigger.builder()
    .build();
```


### DataGoogleCloudfunctions2FunctionEventTriggerEventFilters <a name="DataGoogleCloudfunctions2FunctionEventTriggerEventFilters" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionEventTriggerEventFilters;

DataGoogleCloudfunctions2FunctionEventTriggerEventFilters.builder()
    .build();
```


### DataGoogleCloudfunctions2FunctionServiceConfig <a name="DataGoogleCloudfunctions2FunctionServiceConfig" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionServiceConfig;

DataGoogleCloudfunctions2FunctionServiceConfig.builder()
    .build();
```


### DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables;

DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.builder()
    .build();
```


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes;

DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes.builder()
    .build();
```


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions;

DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudfunctions2FunctionBuildConfigList <a name="DataGoogleCloudfunctions2FunctionBuildConfigList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionBuildConfigList;

new DataGoogleCloudfunctions2FunctionBuildConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.get"></a>

```java
public DataGoogleCloudfunctions2FunctionBuildConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudfunctions2FunctionBuildConfigOutputReference <a name="DataGoogleCloudfunctions2FunctionBuildConfigOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference;

new DataGoogleCloudfunctions2FunctionBuildConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.buildAttribute">buildAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepository">dockerRepository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.entryPoint">entryPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.workerPool">workerPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfig">DataGoogleCloudfunctions2FunctionBuildConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.buildAttribute"></a>

```java
public java.lang.String getBuildAttribute();
```

- *Type:* java.lang.String

---

##### `dockerRepository`<sup>Required</sup> <a name="dockerRepository" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepository"></a>

```java
public java.lang.String getDockerRepository();
```

- *Type:* java.lang.String

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.entryPoint"></a>

```java
public java.lang.String getEntryPoint();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariables"></a>

```java
public StringMap getEnvironmentVariables();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.source"></a>

```java
public DataGoogleCloudfunctions2FunctionBuildConfigSourceList getSource();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceList</a>

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.workerPool"></a>

```java
public java.lang.String getWorkerPool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudfunctions2FunctionBuildConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfig">DataGoogleCloudfunctions2FunctionBuildConfig</a>

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceList <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList;

new DataGoogleCloudfunctions2FunctionBuildConfigSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.get"></a>

```java
public DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference;

new DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSource">repoSource</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSource">storageSource</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSource">DataGoogleCloudfunctions2FunctionBuildConfigSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repoSource`<sup>Required</sup> <a name="repoSource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSource"></a>

```java
public DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList getRepoSource();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList</a>

---

##### `storageSource`<sup>Required</sup> <a name="storageSource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSource"></a>

```java
public DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList getStorageSource();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudfunctions2FunctionBuildConfigSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSource">DataGoogleCloudfunctions2FunctionBuildConfigSource</a>

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList;

new DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.get"></a>

```java
public DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference;

new DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchName">branchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dir">dir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegex">invertRegex</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoName">repoName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagName">tagName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource">DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegex"></a>

```java
public IResolvable getInvertRegex();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoName"></a>

```java
public java.lang.String getRepoName();
```

- *Type:* java.lang.String

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagName"></a>

```java
public java.lang.String getTagName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource">DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource</a>

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList;

new DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.get"></a>

```java
public DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference;

new DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource">DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource">DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource</a>

---


### DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList <a name="DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList;

new DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.get"></a>

```java
public DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference <a name="DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference;

new DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFilters">DataGoogleCloudfunctions2FunctionEventTriggerEventFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudfunctions2FunctionEventTriggerEventFilters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFilters">DataGoogleCloudfunctions2FunctionEventTriggerEventFilters</a>

---


### DataGoogleCloudfunctions2FunctionEventTriggerList <a name="DataGoogleCloudfunctions2FunctionEventTriggerList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionEventTriggerList;

new DataGoogleCloudfunctions2FunctionEventTriggerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.get"></a>

```java
public DataGoogleCloudfunctions2FunctionEventTriggerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudfunctions2FunctionEventTriggerOutputReference <a name="DataGoogleCloudfunctions2FunctionEventTriggerOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference;

new DataGoogleCloudfunctions2FunctionEventTriggerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventFilters">eventFilters</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList">DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventType">eventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicy">retryPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.trigger">trigger</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegion">triggerRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTrigger">DataGoogleCloudfunctions2FunctionEventTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventFilters`<sup>Required</sup> <a name="eventFilters" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventFilters"></a>

```java
public DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList getEventFilters();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList">DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList</a>

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicy"></a>

```java
public java.lang.String getRetryPolicy();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.trigger"></a>

```java
public java.lang.String getTrigger();
```

- *Type:* java.lang.String

---

##### `triggerRegion`<sup>Required</sup> <a name="triggerRegion" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegion"></a>

```java
public java.lang.String getTriggerRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudfunctions2FunctionEventTrigger getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTrigger">DataGoogleCloudfunctions2FunctionEventTrigger</a>

---


### DataGoogleCloudfunctions2FunctionServiceConfigList <a name="DataGoogleCloudfunctions2FunctionServiceConfigList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionServiceConfigList;

new DataGoogleCloudfunctions2FunctionServiceConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.get"></a>

```java
public DataGoogleCloudfunctions2FunctionServiceConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudfunctions2FunctionServiceConfigOutputReference <a name="DataGoogleCloudfunctions2FunctionServiceConfigOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference;

new DataGoogleCloudfunctions2FunctionServiceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevision">allTrafficOnLatestRevision</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableCpu">availableCpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableMemory">availableMemory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.gcfUri">gcfUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettings">ingressSettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrency">maxInstanceRequestConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariables">secretEnvironmentVariables</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList">DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumes">secretVolumes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnector">vpcConnector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettings">vpcConnectorEgressSettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfig">DataGoogleCloudfunctions2FunctionServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allTrafficOnLatestRevision`<sup>Required</sup> <a name="allTrafficOnLatestRevision" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevision"></a>

```java
public IResolvable getAllTrafficOnLatestRevision();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `availableCpu`<sup>Required</sup> <a name="availableCpu" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableCpu"></a>

```java
public java.lang.String getAvailableCpu();
```

- *Type:* java.lang.String

---

##### `availableMemory`<sup>Required</sup> <a name="availableMemory" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableMemory"></a>

```java
public java.lang.String getAvailableMemory();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariables"></a>

```java
public StringMap getEnvironmentVariables();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `gcfUri`<sup>Required</sup> <a name="gcfUri" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.gcfUri"></a>

```java
public java.lang.String getGcfUri();
```

- *Type:* java.lang.String

---

##### `ingressSettings`<sup>Required</sup> <a name="ingressSettings" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettings"></a>

```java
public java.lang.String getIngressSettings();
```

- *Type:* java.lang.String

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

---

##### `maxInstanceRequestConcurrency`<sup>Required</sup> <a name="maxInstanceRequestConcurrency" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrency"></a>

```java
public java.lang.Number getMaxInstanceRequestConcurrency();
```

- *Type:* java.lang.Number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

---

##### `secretEnvironmentVariables`<sup>Required</sup> <a name="secretEnvironmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariables"></a>

```java
public DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList getSecretEnvironmentVariables();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList">DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList</a>

---

##### `secretVolumes`<sup>Required</sup> <a name="secretVolumes" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumes"></a>

```java
public DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList getSecretVolumes();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList</a>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `vpcConnector`<sup>Required</sup> <a name="vpcConnector" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnector"></a>

```java
public java.lang.String getVpcConnector();
```

- *Type:* java.lang.String

---

##### `vpcConnectorEgressSettings`<sup>Required</sup> <a name="vpcConnectorEgressSettings" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettings"></a>

```java
public java.lang.String getVpcConnectorEgressSettings();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudfunctions2FunctionServiceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfig">DataGoogleCloudfunctions2FunctionServiceConfig</a>

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList;

new DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get"></a>

```java
public DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference;

new DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList;

new DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.get"></a>

```java
public DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference;

new DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versions"></a>

```java
public DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList getVersions();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes</a>

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList;

new DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get"></a>

```java
public DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudfunctions2_function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference;

new DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>

---



