# `iamOauthClient` Submodule <a name="`iamOauthClient` Submodule" id="@cdktf/provider-google.iamOauthClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamOauthClient <a name="IamOauthClient" id="@cdktf/provider-google.iamOauthClient.IamOauthClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client google_iam_oauth_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_oauth_client.IamOauthClient;

IamOauthClient.Builder.create(Construct scope, java.lang.String id)
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
    .allowedGrantTypes(java.util.List<java.lang.String>)
    .allowedRedirectUris(java.util.List<java.lang.String>)
    .allowedScopes(java.util.List<java.lang.String>)
    .location(java.lang.String)
    .oauthClientId(java.lang.String)
//  .clientType(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(IamOauthClientTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.allowedGrantTypes">allowedGrantTypes</a></code> | <code>java.util.List<java.lang.String></code> | Required. The list of OAuth grant types is allowed for the OauthClient. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.allowedRedirectUris">allowedRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | Required. The list of redirect uris that is allowed to redirect back when authorization process is completed. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.allowedScopes">allowedScopes</a></code> | <code>java.util.List<java.lang.String></code> | Required. The list of scopes that the OauthClient is allowed to request during OAuth flows. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.oauthClientId">oauthClientId</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.clientType">clientType</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A user-specified description of the OauthClient. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the OauthClient is disabled. You cannot use a disabled OAuth client. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-specified display name of the OauthClient. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#id IamOauthClient#id}. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#project IamOauthClient#project}. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts">IamOauthClientTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedGrantTypes`<sup>Required</sup> <a name="allowedGrantTypes" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.allowedGrantTypes"></a>

- *Type:* java.util.List<java.lang.String>

Required. The list of OAuth grant types is allowed for the OauthClient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#allowed_grant_types IamOauthClient#allowed_grant_types}

---

##### `allowedRedirectUris`<sup>Required</sup> <a name="allowedRedirectUris" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.allowedRedirectUris"></a>

- *Type:* java.util.List<java.lang.String>

Required. The list of redirect uris that is allowed to redirect back when authorization process is completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#allowed_redirect_uris IamOauthClient#allowed_redirect_uris}

---

##### `allowedScopes`<sup>Required</sup> <a name="allowedScopes" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.allowedScopes"></a>

- *Type:* java.util.List<java.lang.String>

Required. The list of scopes that the OauthClient is allowed to request during OAuth flows.

The following scopes are supported:

* 'https://www.googleapis.com/auth/cloud-platform': See, edit, configure,
  and delete your Google Cloud data and see the email address for your Google
  Account.
* 'openid': The OAuth client can associate you with your personal
  information on Google Cloud.
* 'email': The OAuth client can read a federated identity's email address.
* 'groups': The OAuth client can read a federated identity's groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#allowed_scopes IamOauthClient#allowed_scopes}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#location IamOauthClient#location}

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.oauthClientId"></a>

- *Type:* java.lang.String

Required.

The ID to use for the OauthClient, which becomes the final component of
the resource name. This value should be a string of 6 to 63 lowercase
letters, digits, or hyphens. It must start with a letter, and cannot have a
trailing hyphen. The prefix 'gcp-' is reserved for use by Google, and may
not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#oauth_client_id IamOauthClient#oauth_client_id}

---

##### `clientType`<sup>Optional</sup> <a name="clientType" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.clientType"></a>

- *Type:* java.lang.String

Immutable.

The type of OauthClient. Either public or private.
For private clients, the client secret can be managed using the dedicated
OauthClientCredential resource.
Possible values:
CLIENT_TYPE_UNSPECIFIED
PUBLIC_CLIENT
CONFIDENTIAL_CLIENT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#client_type IamOauthClient#client_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A user-specified description of the OauthClient.

Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#description IamOauthClient#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the OauthClient is disabled. You cannot use a disabled OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#disabled IamOauthClient#disabled}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A user-specified display name of the OauthClient.

Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#display_name IamOauthClient#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#id IamOauthClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#project IamOauthClient#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts">IamOauthClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#timeouts IamOauthClient#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.resetClientType">resetClientType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.putTimeouts"></a>

```java
public void putTimeouts(IamOauthClientTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts">IamOauthClientTimeouts</a>

---

##### `resetClientType` <a name="resetClientType" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.resetClientType"></a>

```java
public void resetClientType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamOauthClient resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_oauth_client.IamOauthClient;

IamOauthClient.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_oauth_client.IamOauthClient;

IamOauthClient.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_oauth_client.IamOauthClient;

IamOauthClient.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_oauth_client.IamOauthClient;

IamOauthClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IamOauthClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IamOauthClient resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IamOauthClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IamOauthClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IamOauthClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference">IamOauthClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.allowedGrantTypesInput">allowedGrantTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.allowedRedirectUrisInput">allowedRedirectUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.allowedScopesInput">allowedScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.clientTypeInput">clientTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.oauthClientIdInput">oauthClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts">IamOauthClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.allowedGrantTypes">allowedGrantTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.allowedRedirectUris">allowedRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.allowedScopes">allowedScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.clientType">clientType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.oauthClientId">oauthClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.timeouts"></a>

```java
public IamOauthClientTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference">IamOauthClientTimeoutsOutputReference</a>

---

##### `allowedGrantTypesInput`<sup>Optional</sup> <a name="allowedGrantTypesInput" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.allowedGrantTypesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedGrantTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedRedirectUrisInput`<sup>Optional</sup> <a name="allowedRedirectUrisInput" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.allowedRedirectUrisInput"></a>

```java
public java.util.List<java.lang.String> getAllowedRedirectUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedScopesInput`<sup>Optional</sup> <a name="allowedScopesInput" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.allowedScopesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientTypeInput`<sup>Optional</sup> <a name="clientTypeInput" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.clientTypeInput"></a>

```java
public java.lang.String getClientTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `oauthClientIdInput`<sup>Optional</sup> <a name="oauthClientIdInput" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.oauthClientIdInput"></a>

```java
public java.lang.String getOauthClientIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts">IamOauthClientTimeouts</a>

---

##### `allowedGrantTypes`<sup>Required</sup> <a name="allowedGrantTypes" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.allowedGrantTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedGrantTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedRedirectUris`<sup>Required</sup> <a name="allowedRedirectUris" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.allowedRedirectUris"></a>

```java
public java.util.List<java.lang.String> getAllowedRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedScopes`<sup>Required</sup> <a name="allowedScopes" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.allowedScopes"></a>

```java
public java.util.List<java.lang.String> getAllowedScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientType`<sup>Required</sup> <a name="clientType" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.clientType"></a>

```java
public java.lang.String getClientType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.oauthClientId"></a>

```java
public java.lang.String getOauthClientId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClient.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamOauthClient.IamOauthClient.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamOauthClientConfig <a name="IamOauthClientConfig" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_oauth_client.IamOauthClientConfig;

IamOauthClientConfig.builder()
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
    .allowedGrantTypes(java.util.List<java.lang.String>)
    .allowedRedirectUris(java.util.List<java.lang.String>)
    .allowedScopes(java.util.List<java.lang.String>)
    .location(java.lang.String)
    .oauthClientId(java.lang.String)
//  .clientType(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(IamOauthClientTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.allowedGrantTypes">allowedGrantTypes</a></code> | <code>java.util.List<java.lang.String></code> | Required. The list of OAuth grant types is allowed for the OauthClient. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.allowedRedirectUris">allowedRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | Required. The list of redirect uris that is allowed to redirect back when authorization process is completed. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.allowedScopes">allowedScopes</a></code> | <code>java.util.List<java.lang.String></code> | Required. The list of scopes that the OauthClient is allowed to request during OAuth flows. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.oauthClientId">oauthClientId</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.clientType">clientType</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.description">description</a></code> | <code>java.lang.String</code> | A user-specified description of the OauthClient. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the OauthClient is disabled. You cannot use a disabled OAuth client. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-specified display name of the OauthClient. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#id IamOauthClient#id}. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#project IamOauthClient#project}. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts">IamOauthClientTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedGrantTypes`<sup>Required</sup> <a name="allowedGrantTypes" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.allowedGrantTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedGrantTypes();
```

- *Type:* java.util.List<java.lang.String>

Required. The list of OAuth grant types is allowed for the OauthClient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#allowed_grant_types IamOauthClient#allowed_grant_types}

---

##### `allowedRedirectUris`<sup>Required</sup> <a name="allowedRedirectUris" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.allowedRedirectUris"></a>

```java
public java.util.List<java.lang.String> getAllowedRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

Required. The list of redirect uris that is allowed to redirect back when authorization process is completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#allowed_redirect_uris IamOauthClient#allowed_redirect_uris}

---

##### `allowedScopes`<sup>Required</sup> <a name="allowedScopes" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.allowedScopes"></a>

```java
public java.util.List<java.lang.String> getAllowedScopes();
```

- *Type:* java.util.List<java.lang.String>

Required. The list of scopes that the OauthClient is allowed to request during OAuth flows.

The following scopes are supported:

* 'https://www.googleapis.com/auth/cloud-platform': See, edit, configure,
  and delete your Google Cloud data and see the email address for your Google
  Account.
* 'openid': The OAuth client can associate you with your personal
  information on Google Cloud.
* 'email': The OAuth client can read a federated identity's email address.
* 'groups': The OAuth client can read a federated identity's groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#allowed_scopes IamOauthClient#allowed_scopes}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#location IamOauthClient#location}

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.oauthClientId"></a>

```java
public java.lang.String getOauthClientId();
```

- *Type:* java.lang.String

Required.

The ID to use for the OauthClient, which becomes the final component of
the resource name. This value should be a string of 6 to 63 lowercase
letters, digits, or hyphens. It must start with a letter, and cannot have a
trailing hyphen. The prefix 'gcp-' is reserved for use by Google, and may
not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#oauth_client_id IamOauthClient#oauth_client_id}

---

##### `clientType`<sup>Optional</sup> <a name="clientType" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.clientType"></a>

```java
public java.lang.String getClientType();
```

- *Type:* java.lang.String

Immutable.

The type of OauthClient. Either public or private.
For private clients, the client secret can be managed using the dedicated
OauthClientCredential resource.
Possible values:
CLIENT_TYPE_UNSPECIFIED
PUBLIC_CLIENT
CONFIDENTIAL_CLIENT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#client_type IamOauthClient#client_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A user-specified description of the OauthClient.

Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#description IamOauthClient#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the OauthClient is disabled. You cannot use a disabled OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#disabled IamOauthClient#disabled}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A user-specified display name of the OauthClient.

Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#display_name IamOauthClient#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#id IamOauthClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#project IamOauthClient#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamOauthClient.IamOauthClientConfig.property.timeouts"></a>

```java
public IamOauthClientTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts">IamOauthClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#timeouts IamOauthClient#timeouts}

---

### IamOauthClientTimeouts <a name="IamOauthClientTimeouts" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_oauth_client.IamOauthClientTimeouts;

IamOauthClientTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#create IamOauthClient#create}. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#delete IamOauthClient#delete}. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#update IamOauthClient#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#create IamOauthClient#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#delete IamOauthClient#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/iam_oauth_client#update IamOauthClient#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamOauthClientTimeoutsOutputReference <a name="IamOauthClientTimeoutsOutputReference" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iam_oauth_client.IamOauthClientTimeoutsOutputReference;

new IamOauthClientTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts">IamOauthClientTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamOauthClient.IamOauthClientTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iamOauthClient.IamOauthClientTimeouts">IamOauthClientTimeouts</a>

---



