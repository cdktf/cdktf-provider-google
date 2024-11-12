# `dataGoogleServiceAccountIdToken` Submodule <a name="`dataGoogleServiceAccountIdToken` Submodule" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleServiceAccountIdToken <a name="DataGoogleServiceAccountIdToken" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token google_service_account_id_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_service_account_id_token.DataGoogleServiceAccountIdToken;

DataGoogleServiceAccountIdToken.Builder.create(Construct scope, java.lang.String id)
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
    .targetAudience(java.lang.String)
//  .delegates(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .includeEmail(java.lang.Boolean)
//  .includeEmail(IResolvable)
//  .targetServiceAccount(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.targetAudience">targetAudience</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#target_audience DataGoogleServiceAccountIdToken#target_audience}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.delegates">delegates</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#delegates DataGoogleServiceAccountIdToken#delegates}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#id DataGoogleServiceAccountIdToken#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.includeEmail">includeEmail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#include_email DataGoogleServiceAccountIdToken#include_email}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.targetServiceAccount">targetServiceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#target_service_account DataGoogleServiceAccountIdToken#target_service_account}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `targetAudience`<sup>Required</sup> <a name="targetAudience" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.targetAudience"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#target_audience DataGoogleServiceAccountIdToken#target_audience}.

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.delegates"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#delegates DataGoogleServiceAccountIdToken#delegates}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#id DataGoogleServiceAccountIdToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeEmail`<sup>Optional</sup> <a name="includeEmail" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.includeEmail"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#include_email DataGoogleServiceAccountIdToken#include_email}.

---

##### `targetServiceAccount`<sup>Optional</sup> <a name="targetServiceAccount" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.targetServiceAccount"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#target_service_account DataGoogleServiceAccountIdToken#target_service_account}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetDelegates">resetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetIncludeEmail">resetIncludeEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetTargetServiceAccount">resetTargetServiceAccount</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDelegates` <a name="resetDelegates" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetDelegates"></a>

```java
public void resetDelegates()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeEmail` <a name="resetIncludeEmail" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetIncludeEmail"></a>

```java
public void resetIncludeEmail()
```

##### `resetTargetServiceAccount` <a name="resetTargetServiceAccount" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetTargetServiceAccount"></a>

```java
public void resetTargetServiceAccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleServiceAccountIdToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_service_account_id_token.DataGoogleServiceAccountIdToken;

DataGoogleServiceAccountIdToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_service_account_id_token.DataGoogleServiceAccountIdToken;

DataGoogleServiceAccountIdToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_service_account_id_token.DataGoogleServiceAccountIdToken;

DataGoogleServiceAccountIdToken.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_service_account_id_token.DataGoogleServiceAccountIdToken;

DataGoogleServiceAccountIdToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleServiceAccountIdToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleServiceAccountIdToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleServiceAccountIdToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleServiceAccountIdToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleServiceAccountIdToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.idToken">idToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.delegatesInput">delegatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.includeEmailInput">includeEmailInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetAudienceInput">targetAudienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetServiceAccountInput">targetServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.delegates">delegates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.includeEmail">includeEmail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetAudience">targetAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetServiceAccount">targetServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `idToken`<sup>Required</sup> <a name="idToken" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.idToken"></a>

```java
public java.lang.String getIdToken();
```

- *Type:* java.lang.String

---

##### `delegatesInput`<sup>Optional</sup> <a name="delegatesInput" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.delegatesInput"></a>

```java
public java.util.List<java.lang.String> getDelegatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeEmailInput`<sup>Optional</sup> <a name="includeEmailInput" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.includeEmailInput"></a>

```java
public java.lang.Object getIncludeEmailInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetAudienceInput`<sup>Optional</sup> <a name="targetAudienceInput" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetAudienceInput"></a>

```java
public java.lang.String getTargetAudienceInput();
```

- *Type:* java.lang.String

---

##### `targetServiceAccountInput`<sup>Optional</sup> <a name="targetServiceAccountInput" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetServiceAccountInput"></a>

```java
public java.lang.String getTargetServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `delegates`<sup>Required</sup> <a name="delegates" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.delegates"></a>

```java
public java.util.List<java.lang.String> getDelegates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeEmail`<sup>Required</sup> <a name="includeEmail" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.includeEmail"></a>

```java
public java.lang.Object getIncludeEmail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetAudience`<sup>Required</sup> <a name="targetAudience" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetAudience"></a>

```java
public java.lang.String getTargetAudience();
```

- *Type:* java.lang.String

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetServiceAccount"></a>

```java
public java.lang.String getTargetServiceAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleServiceAccountIdTokenConfig <a name="DataGoogleServiceAccountIdTokenConfig" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_service_account_id_token.DataGoogleServiceAccountIdTokenConfig;

DataGoogleServiceAccountIdTokenConfig.builder()
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
    .targetAudience(java.lang.String)
//  .delegates(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .includeEmail(java.lang.Boolean)
//  .includeEmail(IResolvable)
//  .targetServiceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.targetAudience">targetAudience</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#target_audience DataGoogleServiceAccountIdToken#target_audience}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.delegates">delegates</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#delegates DataGoogleServiceAccountIdToken#delegates}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#id DataGoogleServiceAccountIdToken#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.includeEmail">includeEmail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#include_email DataGoogleServiceAccountIdToken#include_email}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.targetServiceAccount">targetServiceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#target_service_account DataGoogleServiceAccountIdToken#target_service_account}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `targetAudience`<sup>Required</sup> <a name="targetAudience" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.targetAudience"></a>

```java
public java.lang.String getTargetAudience();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#target_audience DataGoogleServiceAccountIdToken#target_audience}.

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.delegates"></a>

```java
public java.util.List<java.lang.String> getDelegates();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#delegates DataGoogleServiceAccountIdToken#delegates}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#id DataGoogleServiceAccountIdToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeEmail`<sup>Optional</sup> <a name="includeEmail" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.includeEmail"></a>

```java
public java.lang.Object getIncludeEmail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#include_email DataGoogleServiceAccountIdToken#include_email}.

---

##### `targetServiceAccount`<sup>Optional</sup> <a name="targetServiceAccount" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.targetServiceAccount"></a>

```java
public java.lang.String getTargetServiceAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/service_account_id_token#target_service_account DataGoogleServiceAccountIdToken#target_service_account}.

---



