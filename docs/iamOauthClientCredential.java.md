# `iamOauthClientCredential` Submodule <a name="`iamOauthClientCredential` Submodule" id="@cdktf/provider-google.iamOauthClientCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamOauthClientCredential <a name="IamOauthClientCredential" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential google_iam_oauth_client_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_oauth_client_credential.IamOauthClientCredential;

IamOauthClientCredential.Builder.create(Construct scope, java.lang.String id)
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
    .oauthclient(java.lang.String)
    .oauthClientCredentialId(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(IamOauthClientCredentialTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.oauthclient">oauthclient</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.oauthClientCredentialId">oauthClientCredentialId</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the OauthClientCredential is disabled. You cannot use a disabled OauthClientCredential. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-specified display name of the OauthClientCredential. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#id IamOauthClientCredential#id}. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#project IamOauthClientCredential#project}. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts">IamOauthClientCredentialTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#location IamOauthClientCredential#location}

---

##### `oauthclient`<sup>Required</sup> <a name="oauthclient" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.oauthclient"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#oauthclient IamOauthClientCredential#oauthclient}

---

##### `oauthClientCredentialId`<sup>Required</sup> <a name="oauthClientCredentialId" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.oauthClientCredentialId"></a>

- *Type:* java.lang.String

Required.

The ID to use for the OauthClientCredential, which becomes the
final component of the resource name. This value should be 4-32 characters,
and may contain the characters [a-z0-9-]. The prefix 'gcp-' is
reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#oauth_client_credential_id IamOauthClientCredential#oauth_client_credential_id}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the OauthClientCredential is disabled. You cannot use a disabled OauthClientCredential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#disabled IamOauthClientCredential#disabled}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A user-specified display name of the OauthClientCredential.

Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#display_name IamOauthClientCredential#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#id IamOauthClientCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#project IamOauthClientCredential#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts">IamOauthClientCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#timeouts IamOauthClientCredential#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.putTimeouts"></a>

```java
public void putTimeouts(IamOauthClientCredentialTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts">IamOauthClientCredentialTimeouts</a>

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamOauthClientCredential resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_oauth_client_credential.IamOauthClientCredential;

IamOauthClientCredential.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_oauth_client_credential.IamOauthClientCredential;

IamOauthClientCredential.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_oauth_client_credential.IamOauthClientCredential;

IamOauthClientCredential.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_oauth_client_credential.IamOauthClientCredential;

IamOauthClientCredential.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IamOauthClientCredential.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IamOauthClientCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IamOauthClientCredential to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IamOauthClientCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IamOauthClientCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference">IamOauthClientCredentialTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.oauthClientCredentialIdInput">oauthClientCredentialIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.oauthclientInput">oauthclientInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts">IamOauthClientCredentialTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.oauthclient">oauthclient</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.oauthClientCredentialId">oauthClientCredentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.timeouts"></a>

```java
public IamOauthClientCredentialTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference">IamOauthClientCredentialTimeoutsOutputReference</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `oauthClientCredentialIdInput`<sup>Optional</sup> <a name="oauthClientCredentialIdInput" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.oauthClientCredentialIdInput"></a>

```java
public java.lang.String getOauthClientCredentialIdInput();
```

- *Type:* java.lang.String

---

##### `oauthclientInput`<sup>Optional</sup> <a name="oauthclientInput" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.oauthclientInput"></a>

```java
public java.lang.String getOauthclientInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts">IamOauthClientCredentialTimeouts</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `oauthclient`<sup>Required</sup> <a name="oauthclient" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.oauthclient"></a>

```java
public java.lang.String getOauthclient();
```

- *Type:* java.lang.String

---

##### `oauthClientCredentialId`<sup>Required</sup> <a name="oauthClientCredentialId" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.oauthClientCredentialId"></a>

```java
public java.lang.String getOauthClientCredentialId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredential.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamOauthClientCredentialConfig <a name="IamOauthClientCredentialConfig" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_oauth_client_credential.IamOauthClientCredentialConfig;

IamOauthClientCredentialConfig.builder()
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
    .oauthclient(java.lang.String)
    .oauthClientCredentialId(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(IamOauthClientCredentialTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.oauthclient">oauthclient</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.oauthClientCredentialId">oauthClientCredentialId</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the OauthClientCredential is disabled. You cannot use a disabled OauthClientCredential. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-specified display name of the OauthClientCredential. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#id IamOauthClientCredential#id}. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#project IamOauthClientCredential#project}. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts">IamOauthClientCredentialTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#location IamOauthClientCredential#location}

---

##### `oauthclient`<sup>Required</sup> <a name="oauthclient" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.oauthclient"></a>

```java
public java.lang.String getOauthclient();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#oauthclient IamOauthClientCredential#oauthclient}

---

##### `oauthClientCredentialId`<sup>Required</sup> <a name="oauthClientCredentialId" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.oauthClientCredentialId"></a>

```java
public java.lang.String getOauthClientCredentialId();
```

- *Type:* java.lang.String

Required.

The ID to use for the OauthClientCredential, which becomes the
final component of the resource name. This value should be 4-32 characters,
and may contain the characters [a-z0-9-]. The prefix 'gcp-' is
reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#oauth_client_credential_id IamOauthClientCredential#oauth_client_credential_id}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the OauthClientCredential is disabled. You cannot use a disabled OauthClientCredential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#disabled IamOauthClientCredential#disabled}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A user-specified display name of the OauthClientCredential.

Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#display_name IamOauthClientCredential#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#id IamOauthClientCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#project IamOauthClientCredential#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialConfig.property.timeouts"></a>

```java
public IamOauthClientCredentialTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts">IamOauthClientCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#timeouts IamOauthClientCredential#timeouts}

---

### IamOauthClientCredentialTimeouts <a name="IamOauthClientCredentialTimeouts" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_oauth_client_credential.IamOauthClientCredentialTimeouts;

IamOauthClientCredentialTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#create IamOauthClientCredential#create}. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#delete IamOauthClientCredential#delete}. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#update IamOauthClientCredential#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#create IamOauthClientCredential#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#delete IamOauthClientCredential#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iam_oauth_client_credential#update IamOauthClientCredential#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamOauthClientCredentialTimeoutsOutputReference <a name="IamOauthClientCredentialTimeoutsOutputReference" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_oauth_client_credential.IamOauthClientCredentialTimeoutsOutputReference;

new IamOauthClientCredentialTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts">IamOauthClientCredentialTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamOauthClientCredential.IamOauthClientCredentialTimeouts">IamOauthClientCredentialTimeouts</a>

---



