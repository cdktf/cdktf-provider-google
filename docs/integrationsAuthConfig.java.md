# `integrationsAuthConfig` Submodule <a name="`integrationsAuthConfig` Submodule" id="@cdktf/provider-google.integrationsAuthConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationsAuthConfig <a name="IntegrationsAuthConfig" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config google_integrations_auth_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfig;

IntegrationsAuthConfig.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .clientCertificate(IntegrationsAuthConfigClientCertificate)
//  .decryptedCredential(IntegrationsAuthConfigDecryptedCredential)
//  .description(java.lang.String)
//  .expiryNotificationDuration(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .overrideValidTime(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(IntegrationsAuthConfigTimeouts)
//  .visibility(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of the auth config. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location in which client needs to be provisioned. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.clientCertificate">clientCertificate</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate">IntegrationsAuthConfigClientCertificate</a></code> | client_certificate block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.decryptedCredential">decryptedCredential</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential">IntegrationsAuthConfigDecryptedCredential</a></code> | decrypted_credential block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the auth config. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.expiryNotificationDuration">expiryNotificationDuration</a></code> | <code>java.util.List<java.lang.String></code> | User can define the time to receive notification after which the auth config becomes invalid. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#id IntegrationsAuthConfig#id}. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.overrideValidTime">overrideValidTime</a></code> | <code>java.lang.String</code> | User provided expiry time to override. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#project IntegrationsAuthConfig#project}. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts">IntegrationsAuthConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.visibility">visibility</a></code> | <code>java.lang.String</code> | The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The name of the auth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#display_name IntegrationsAuthConfig#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location in which client needs to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#location IntegrationsAuthConfig#location}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.clientCertificate"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate">IntegrationsAuthConfigClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#client_certificate IntegrationsAuthConfig#client_certificate}

---

##### `decryptedCredential`<sup>Optional</sup> <a name="decryptedCredential" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.decryptedCredential"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential">IntegrationsAuthConfigDecryptedCredential</a>

decrypted_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#decrypted_credential IntegrationsAuthConfig#decrypted_credential}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the auth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#description IntegrationsAuthConfig#description}

---

##### `expiryNotificationDuration`<sup>Optional</sup> <a name="expiryNotificationDuration" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.expiryNotificationDuration"></a>

- *Type:* java.util.List<java.lang.String>

User can define the time to receive notification after which the auth config becomes invalid.

Support up to 30 days. Support granularity in hours.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#expiry_notification_duration IntegrationsAuthConfig#expiry_notification_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#id IntegrationsAuthConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overrideValidTime`<sup>Optional</sup> <a name="overrideValidTime" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.overrideValidTime"></a>

- *Type:* java.lang.String

User provided expiry time to override.

For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#override_valid_time IntegrationsAuthConfig#override_valid_time}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#project IntegrationsAuthConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts">IntegrationsAuthConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#timeouts IntegrationsAuthConfig#timeouts}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.Initializer.parameter.visibility"></a>

- *Type:* java.lang.String

The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#visibility IntegrationsAuthConfig#visibility}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putClientCertificate">putClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putDecryptedCredential">putDecryptedCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetDecryptedCredential">resetDecryptedCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetExpiryNotificationDuration">resetExpiryNotificationDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetOverrideValidTime">resetOverrideValidTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetVisibility">resetVisibility</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClientCertificate` <a name="putClientCertificate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putClientCertificate"></a>

```java
public void putClientCertificate(IntegrationsAuthConfigClientCertificate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putClientCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate">IntegrationsAuthConfigClientCertificate</a>

---

##### `putDecryptedCredential` <a name="putDecryptedCredential" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putDecryptedCredential"></a>

```java
public void putDecryptedCredential(IntegrationsAuthConfigDecryptedCredential value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putDecryptedCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential">IntegrationsAuthConfigDecryptedCredential</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putTimeouts"></a>

```java
public void putTimeouts(IntegrationsAuthConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts">IntegrationsAuthConfigTimeouts</a>

---

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetDecryptedCredential` <a name="resetDecryptedCredential" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetDecryptedCredential"></a>

```java
public void resetDecryptedCredential()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpiryNotificationDuration` <a name="resetExpiryNotificationDuration" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetExpiryNotificationDuration"></a>

```java
public void resetExpiryNotificationDuration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetId"></a>

```java
public void resetId()
```

##### `resetOverrideValidTime` <a name="resetOverrideValidTime" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetOverrideValidTime"></a>

```java
public void resetOverrideValidTime()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.resetVisibility"></a>

```java
public void resetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationsAuthConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfig;

IntegrationsAuthConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfig;

IntegrationsAuthConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfig;

IntegrationsAuthConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfig;

IntegrationsAuthConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationsAuthConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationsAuthConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationsAuthConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationsAuthConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationsAuthConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.clientCertificate">clientCertificate</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference">IntegrationsAuthConfigClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.creatorEmail">creatorEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.decryptedCredential">decryptedCredential</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference">IntegrationsAuthConfigDecryptedCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.encryptedCredential">encryptedCredential</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.lastModifierEmail">lastModifierEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference">IntegrationsAuthConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.validTime">validTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.clientCertificateInput">clientCertificateInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate">IntegrationsAuthConfigClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.decryptedCredentialInput">decryptedCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential">IntegrationsAuthConfigDecryptedCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.expiryNotificationDurationInput">expiryNotificationDurationInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.overrideValidTimeInput">overrideValidTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts">IntegrationsAuthConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.expiryNotificationDuration">expiryNotificationDuration</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.overrideValidTime">overrideValidTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.clientCertificate"></a>

```java
public IntegrationsAuthConfigClientCertificateOutputReference getClientCertificate();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference">IntegrationsAuthConfigClientCertificateOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creatorEmail`<sup>Required</sup> <a name="creatorEmail" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.creatorEmail"></a>

```java
public java.lang.String getCreatorEmail();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `decryptedCredential`<sup>Required</sup> <a name="decryptedCredential" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.decryptedCredential"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOutputReference getDecryptedCredential();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference">IntegrationsAuthConfigDecryptedCredentialOutputReference</a>

---

##### `encryptedCredential`<sup>Required</sup> <a name="encryptedCredential" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.encryptedCredential"></a>

```java
public java.lang.String getEncryptedCredential();
```

- *Type:* java.lang.String

---

##### `lastModifierEmail`<sup>Required</sup> <a name="lastModifierEmail" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.lastModifierEmail"></a>

```java
public java.lang.String getLastModifierEmail();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.timeouts"></a>

```java
public IntegrationsAuthConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference">IntegrationsAuthConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `validTime`<sup>Required</sup> <a name="validTime" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.validTime"></a>

```java
public java.lang.String getValidTime();
```

- *Type:* java.lang.String

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.clientCertificateInput"></a>

```java
public IntegrationsAuthConfigClientCertificate getClientCertificateInput();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate">IntegrationsAuthConfigClientCertificate</a>

---

##### `decryptedCredentialInput`<sup>Optional</sup> <a name="decryptedCredentialInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.decryptedCredentialInput"></a>

```java
public IntegrationsAuthConfigDecryptedCredential getDecryptedCredentialInput();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential">IntegrationsAuthConfigDecryptedCredential</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `expiryNotificationDurationInput`<sup>Optional</sup> <a name="expiryNotificationDurationInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.expiryNotificationDurationInput"></a>

```java
public java.util.List<java.lang.String> getExpiryNotificationDurationInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `overrideValidTimeInput`<sup>Optional</sup> <a name="overrideValidTimeInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.overrideValidTimeInput"></a>

```java
public java.lang.String getOverrideValidTimeInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts">IntegrationsAuthConfigTimeouts</a>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `expiryNotificationDuration`<sup>Required</sup> <a name="expiryNotificationDuration" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.expiryNotificationDuration"></a>

```java
public java.util.List<java.lang.String> getExpiryNotificationDuration();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `overrideValidTime`<sup>Required</sup> <a name="overrideValidTime" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.overrideValidTime"></a>

```java
public java.lang.String getOverrideValidTime();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationsAuthConfigClientCertificate <a name="IntegrationsAuthConfigClientCertificate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigClientCertificate;

IntegrationsAuthConfigClientCertificate.builder()
    .encryptedPrivateKey(java.lang.String)
    .sslCertificate(java.lang.String)
//  .passphrase(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate.property.encryptedPrivateKey">encryptedPrivateKey</a></code> | <code>java.lang.String</code> | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate.property.sslCertificate">sslCertificate</a></code> | <code>java.lang.String</code> | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate.property.passphrase">passphrase</a></code> | <code>java.lang.String</code> | 'passphrase' should be left unset if private key is not encrypted. |

---

##### `encryptedPrivateKey`<sup>Required</sup> <a name="encryptedPrivateKey" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate.property.encryptedPrivateKey"></a>

```java
public java.lang.String getEncryptedPrivateKey();
```

- *Type:* java.lang.String

The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#encrypted_private_key IntegrationsAuthConfig#encrypted_private_key}

---

##### `sslCertificate`<sup>Required</sup> <a name="sslCertificate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate.property.sslCertificate"></a>

```java
public java.lang.String getSslCertificate();
```

- *Type:* java.lang.String

The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#ssl_certificate IntegrationsAuthConfig#ssl_certificate}

---

##### `passphrase`<sup>Optional</sup> <a name="passphrase" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate.property.passphrase"></a>

```java
public java.lang.String getPassphrase();
```

- *Type:* java.lang.String

'passphrase' should be left unset if private key is not encrypted.

Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#passphrase IntegrationsAuthConfig#passphrase}

---

### IntegrationsAuthConfigConfig <a name="IntegrationsAuthConfigConfig" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigConfig;

IntegrationsAuthConfigConfig.builder()
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
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .clientCertificate(IntegrationsAuthConfigClientCertificate)
//  .decryptedCredential(IntegrationsAuthConfigDecryptedCredential)
//  .description(java.lang.String)
//  .expiryNotificationDuration(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .overrideValidTime(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(IntegrationsAuthConfigTimeouts)
//  .visibility(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of the auth config. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location in which client needs to be provisioned. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.clientCertificate">clientCertificate</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate">IntegrationsAuthConfigClientCertificate</a></code> | client_certificate block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.decryptedCredential">decryptedCredential</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential">IntegrationsAuthConfigDecryptedCredential</a></code> | decrypted_credential block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the auth config. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.expiryNotificationDuration">expiryNotificationDuration</a></code> | <code>java.util.List<java.lang.String></code> | User can define the time to receive notification after which the auth config becomes invalid. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#id IntegrationsAuthConfig#id}. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.overrideValidTime">overrideValidTime</a></code> | <code>java.lang.String</code> | User provided expiry time to override. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#project IntegrationsAuthConfig#project}. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts">IntegrationsAuthConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The name of the auth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#display_name IntegrationsAuthConfig#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location in which client needs to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#location IntegrationsAuthConfig#location}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.clientCertificate"></a>

```java
public IntegrationsAuthConfigClientCertificate getClientCertificate();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate">IntegrationsAuthConfigClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#client_certificate IntegrationsAuthConfig#client_certificate}

---

##### `decryptedCredential`<sup>Optional</sup> <a name="decryptedCredential" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.decryptedCredential"></a>

```java
public IntegrationsAuthConfigDecryptedCredential getDecryptedCredential();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential">IntegrationsAuthConfigDecryptedCredential</a>

decrypted_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#decrypted_credential IntegrationsAuthConfig#decrypted_credential}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the auth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#description IntegrationsAuthConfig#description}

---

##### `expiryNotificationDuration`<sup>Optional</sup> <a name="expiryNotificationDuration" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.expiryNotificationDuration"></a>

```java
public java.util.List<java.lang.String> getExpiryNotificationDuration();
```

- *Type:* java.util.List<java.lang.String>

User can define the time to receive notification after which the auth config becomes invalid.

Support up to 30 days. Support granularity in hours.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#expiry_notification_duration IntegrationsAuthConfig#expiry_notification_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#id IntegrationsAuthConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overrideValidTime`<sup>Optional</sup> <a name="overrideValidTime" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.overrideValidTime"></a>

```java
public java.lang.String getOverrideValidTime();
```

- *Type:* java.lang.String

User provided expiry time to override.

For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#override_valid_time IntegrationsAuthConfig#override_valid_time}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#project IntegrationsAuthConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.timeouts"></a>

```java
public IntegrationsAuthConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts">IntegrationsAuthConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#timeouts IntegrationsAuthConfig#timeouts}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#visibility IntegrationsAuthConfig#visibility}

---

### IntegrationsAuthConfigDecryptedCredential <a name="IntegrationsAuthConfigDecryptedCredential" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredential;

IntegrationsAuthConfigDecryptedCredential.builder()
    .credentialType(java.lang.String)
//  .authToken(IntegrationsAuthConfigDecryptedCredentialAuthToken)
//  .jwt(IntegrationsAuthConfigDecryptedCredentialJwt)
//  .oauth2AuthorizationCode(IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode)
//  .oauth2ClientCredentials(IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials)
//  .oidcToken(IntegrationsAuthConfigDecryptedCredentialOidcToken)
//  .serviceAccountCredentials(IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials)
//  .usernameAndPassword(IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | Credential type associated with auth configs. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.authToken">authToken</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken">IntegrationsAuthConfigDecryptedCredentialAuthToken</a></code> | auth_token block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.jwt">jwt</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt">IntegrationsAuthConfigDecryptedCredentialJwt</a></code> | jwt block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.oauth2AuthorizationCode">oauth2AuthorizationCode</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a></code> | oauth2_authorization_code block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.oauth2ClientCredentials">oauth2ClientCredentials</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a></code> | oauth2_client_credentials block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken">IntegrationsAuthConfigDecryptedCredentialOidcToken</a></code> | oidc_token block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.serviceAccountCredentials">serviceAccountCredentials</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a></code> | service_account_credentials block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.usernameAndPassword">usernameAndPassword</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a></code> | username_and_password block. |

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

Credential type associated with auth configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#credential_type IntegrationsAuthConfig#credential_type}

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.authToken"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialAuthToken getAuthToken();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken">IntegrationsAuthConfigDecryptedCredentialAuthToken</a>

auth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#auth_token IntegrationsAuthConfig#auth_token}

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.jwt"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialJwt getJwt();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt">IntegrationsAuthConfigDecryptedCredentialJwt</a>

jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#jwt IntegrationsAuthConfig#jwt}

---

##### `oauth2AuthorizationCode`<sup>Optional</sup> <a name="oauth2AuthorizationCode" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.oauth2AuthorizationCode"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode getOauth2AuthorizationCode();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

oauth2_authorization_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#oauth2_authorization_code IntegrationsAuthConfig#oauth2_authorization_code}

---

##### `oauth2ClientCredentials`<sup>Optional</sup> <a name="oauth2ClientCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.oauth2ClientCredentials"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials getOauth2ClientCredentials();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

oauth2_client_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#oauth2_client_credentials IntegrationsAuthConfig#oauth2_client_credentials}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.oidcToken"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOidcToken getOidcToken();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken">IntegrationsAuthConfigDecryptedCredentialOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#oidc_token IntegrationsAuthConfig#oidc_token}

---

##### `serviceAccountCredentials`<sup>Optional</sup> <a name="serviceAccountCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.serviceAccountCredentials"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials getServiceAccountCredentials();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

service_account_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#service_account_credentials IntegrationsAuthConfig#service_account_credentials}

---

##### `usernameAndPassword`<sup>Optional</sup> <a name="usernameAndPassword" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential.property.usernameAndPassword"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword getUsernameAndPassword();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

username_and_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#username_and_password IntegrationsAuthConfig#username_and_password}

---

### IntegrationsAuthConfigDecryptedCredentialAuthToken <a name="IntegrationsAuthConfigDecryptedCredentialAuthToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialAuthToken;

IntegrationsAuthConfigDecryptedCredentialAuthToken.builder()
//  .token(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken.property.token">token</a></code> | <code>java.lang.String</code> | The token for the auth type. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken.property.type">type</a></code> | <code>java.lang.String</code> | Authentication type, e.g. "Basic", "Bearer", etc. |

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

The token for the auth type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#token IntegrationsAuthConfig#token}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Authentication type, e.g. "Basic", "Bearer", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#type IntegrationsAuthConfig#type}

---

### IntegrationsAuthConfigDecryptedCredentialJwt <a name="IntegrationsAuthConfigDecryptedCredentialJwt" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialJwt;

IntegrationsAuthConfigDecryptedCredentialJwt.builder()
//  .jwtHeader(java.lang.String)
//  .jwtPayload(java.lang.String)
//  .secret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt.property.jwtHeader">jwtHeader</a></code> | <code>java.lang.String</code> | Identifies which algorithm is used to generate the signature. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt.property.jwtPayload">jwtPayload</a></code> | <code>java.lang.String</code> | Contains a set of claims. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt.property.secret">secret</a></code> | <code>java.lang.String</code> | User's pre-shared secret to sign the token. |

---

##### `jwtHeader`<sup>Optional</sup> <a name="jwtHeader" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt.property.jwtHeader"></a>

```java
public java.lang.String getJwtHeader();
```

- *Type:* java.lang.String

Identifies which algorithm is used to generate the signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#jwt_header IntegrationsAuthConfig#jwt_header}

---

##### `jwtPayload`<sup>Optional</sup> <a name="jwtPayload" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt.property.jwtPayload"></a>

```java
public java.lang.String getJwtPayload();
```

- *Type:* java.lang.String

Contains a set of claims.

The JWT specification defines seven Registered Claim Names which are the standard fields commonly included in tokens. Custom claims are usually also included, depending on the purpose of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#jwt_payload IntegrationsAuthConfig#jwt_payload}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

User's pre-shared secret to sign the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#secret IntegrationsAuthConfig#secret}

---

### IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode <a name="IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode;

IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.builder()
//  .authEndpoint(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .scope(java.lang.String)
//  .tokenEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.authEndpoint">authEndpoint</a></code> | <code>java.lang.String</code> | The auth url endpoint to send the auth code request to. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client's id. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client's secret. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.scope">scope</a></code> | <code>java.lang.String</code> | A space-delimited list of requested scope permissions. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | The token url endpoint to send the token request to. |

---

##### `authEndpoint`<sup>Optional</sup> <a name="authEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.authEndpoint"></a>

```java
public java.lang.String getAuthEndpoint();
```

- *Type:* java.lang.String

The auth url endpoint to send the auth code request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#auth_endpoint IntegrationsAuthConfig#auth_endpoint}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client's id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#client_id IntegrationsAuthConfig#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The client's secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#client_secret IntegrationsAuthConfig#client_secret}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#scope IntegrationsAuthConfig#scope}

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

The token url endpoint to send the token request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#token_endpoint IntegrationsAuthConfig#token_endpoint}

---

### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials;

IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.builder()
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .requestType(java.lang.String)
//  .scope(java.lang.String)
//  .tokenEndpoint(java.lang.String)
//  .tokenParams(IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client's ID. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client's secret. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.requestType">requestType</a></code> | <code>java.lang.String</code> | Represent how to pass parameters to fetch access token Possible values: ["REQUEST_TYPE_UNSPECIFIED", "REQUEST_BODY", "QUERY_PARAMETERS", "ENCODED_HEADER"]. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.scope">scope</a></code> | <code>java.lang.String</code> | A space-delimited list of requested scope permissions. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenParams">tokenParams</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a></code> | token_params block. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#client_id IntegrationsAuthConfig#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The client's secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#client_secret IntegrationsAuthConfig#client_secret}

---

##### `requestType`<sup>Optional</sup> <a name="requestType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.requestType"></a>

```java
public java.lang.String getRequestType();
```

- *Type:* java.lang.String

Represent how to pass parameters to fetch access token Possible values: ["REQUEST_TYPE_UNSPECIFIED", "REQUEST_BODY", "QUERY_PARAMETERS", "ENCODED_HEADER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#request_type IntegrationsAuthConfig#request_type}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#scope IntegrationsAuthConfig#scope}

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#token_endpoint IntegrationsAuthConfig#token_endpoint}

---

##### `tokenParams`<sup>Optional</sup> <a name="tokenParams" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenParams"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams getTokenParams();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

token_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#token_params IntegrationsAuthConfig#token_params}

---

### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams;

IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.builder()
//  .entries(IResolvable)
//  .entries(java.util.List<IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.property.entries">entries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>></code> | entries block. |

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.property.entries"></a>

```java
public java.lang.Object getEntries();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>>

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#entries IntegrationsAuthConfig#entries}

---

### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries;

IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.builder()
//  .key(IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey)
//  .value(IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.key">key</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a></code> | key block. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.value">value</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a></code> | value block. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.key"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey getKey();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#key IntegrationsAuthConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.value"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue getValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#value IntegrationsAuthConfig#value}

---

### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey;

IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.builder()
//  .literalValue(IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.property.literalValue">literalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a></code> | literal_value block. |

---

##### `literalValue`<sup>Optional</sup> <a name="literalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.property.literalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue getLiteralValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

literal_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#literal_value IntegrationsAuthConfig#literal_value}

---

### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue;

IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.builder()
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | String. |

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#string_value IntegrationsAuthConfig#string_value}

---

### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue;

IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.builder()
//  .literalValue(IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.property.literalValue">literalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a></code> | literal_value block. |

---

##### `literalValue`<sup>Optional</sup> <a name="literalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.property.literalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue getLiteralValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

literal_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#literal_value IntegrationsAuthConfig#literal_value}

---

### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue;

IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.builder()
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | String. |

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#string_value IntegrationsAuthConfig#string_value}

---

### IntegrationsAuthConfigDecryptedCredentialOidcToken <a name="IntegrationsAuthConfigDecryptedCredentialOidcToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOidcToken;

IntegrationsAuthConfigDecryptedCredentialOidcToken.builder()
//  .audience(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken.property.audience">audience</a></code> | <code>java.lang.String</code> | Audience to be used when generating OIDC token. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | The service account email to be used as the identity for the token. |

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

Audience to be used when generating OIDC token.

The audience claim identifies the recipients that the JWT is intended for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#audience IntegrationsAuthConfig#audience}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

The service account email to be used as the identity for the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#service_account_email IntegrationsAuthConfig#service_account_email}

---

### IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials <a name="IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials;

IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.builder()
//  .scope(java.lang.String)
//  .serviceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.scope">scope</a></code> | <code>java.lang.String</code> | A space-delimited list of requested scope permissions. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Name of the service account that has the permission to make the request. |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#scope IntegrationsAuthConfig#scope}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Name of the service account that has the permission to make the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#service_account IntegrationsAuthConfig#service_account}

---

### IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword <a name="IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword;

IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.builder()
//  .password(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.password">password</a></code> | <code>java.lang.String</code> | Password to be used. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.username">username</a></code> | <code>java.lang.String</code> | Username to be used. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#password IntegrationsAuthConfig#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#username IntegrationsAuthConfig#username}

---

### IntegrationsAuthConfigTimeouts <a name="IntegrationsAuthConfigTimeouts" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigTimeouts;

IntegrationsAuthConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#create IntegrationsAuthConfig#create}. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#delete IntegrationsAuthConfig#delete}. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#update IntegrationsAuthConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#create IntegrationsAuthConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#delete IntegrationsAuthConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/integrations_auth_config#update IntegrationsAuthConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationsAuthConfigClientCertificateOutputReference <a name="IntegrationsAuthConfigClientCertificateOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigClientCertificateOutputReference;

new IntegrationsAuthConfigClientCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.resetPassphrase">resetPassphrase</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassphrase` <a name="resetPassphrase" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.resetPassphrase"></a>

```java
public void resetPassphrase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKeyInput">encryptedPrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.passphraseInput">passphraseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificateInput">sslCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKey">encryptedPrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.passphrase">passphrase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificate">sslCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate">IntegrationsAuthConfigClientCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptedPrivateKeyInput`<sup>Optional</sup> <a name="encryptedPrivateKeyInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKeyInput"></a>

```java
public java.lang.String getEncryptedPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `passphraseInput`<sup>Optional</sup> <a name="passphraseInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.passphraseInput"></a>

```java
public java.lang.String getPassphraseInput();
```

- *Type:* java.lang.String

---

##### `sslCertificateInput`<sup>Optional</sup> <a name="sslCertificateInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificateInput"></a>

```java
public java.lang.String getSslCertificateInput();
```

- *Type:* java.lang.String

---

##### `encryptedPrivateKey`<sup>Required</sup> <a name="encryptedPrivateKey" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKey"></a>

```java
public java.lang.String getEncryptedPrivateKey();
```

- *Type:* java.lang.String

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.passphrase"></a>

```java
public java.lang.String getPassphrase();
```

- *Type:* java.lang.String

---

##### `sslCertificate`<sup>Required</sup> <a name="sslCertificate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificate"></a>

```java
public java.lang.String getSslCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificateOutputReference.property.internalValue"></a>

```java
public IntegrationsAuthConfigClientCertificate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigClientCertificate">IntegrationsAuthConfigClientCertificate</a>

---


### IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference;

new IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToken` <a name="resetToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetToken"></a>

```java
public void resetToken()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken">IntegrationsAuthConfigDecryptedCredentialAuthToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.internalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialAuthToken getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken">IntegrationsAuthConfigDecryptedCredentialAuthToken</a>

---


### IntegrationsAuthConfigDecryptedCredentialJwtOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialJwtOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference;

new IntegrationsAuthConfigDecryptedCredentialJwtOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtHeader">resetJwtHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtPayload">resetJwtPayload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJwtHeader` <a name="resetJwtHeader" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtHeader"></a>

```java
public void resetJwtHeader()
```

##### `resetJwtPayload` <a name="resetJwtPayload" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtPayload"></a>

```java
public void resetJwtPayload()
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetSecret"></a>

```java
public void resetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwt">jwt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeaderInput">jwtHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayloadInput">jwtPayloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeader">jwtHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayload">jwtPayload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt">IntegrationsAuthConfigDecryptedCredentialJwt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwt"></a>

```java
public java.lang.String getJwt();
```

- *Type:* java.lang.String

---

##### `jwtHeaderInput`<sup>Optional</sup> <a name="jwtHeaderInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeaderInput"></a>

```java
public java.lang.String getJwtHeaderInput();
```

- *Type:* java.lang.String

---

##### `jwtPayloadInput`<sup>Optional</sup> <a name="jwtPayloadInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayloadInput"></a>

```java
public java.lang.String getJwtPayloadInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `jwtHeader`<sup>Required</sup> <a name="jwtHeader" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeader"></a>

```java
public java.lang.String getJwtHeader();
```

- *Type:* java.lang.String

---

##### `jwtPayload`<sup>Required</sup> <a name="jwtPayload" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayload"></a>

```java
public java.lang.String getJwtPayload();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.internalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialJwt getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt">IntegrationsAuthConfigDecryptedCredentialJwt</a>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference;

new IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetAuthEndpoint">resetAuthEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthEndpoint` <a name="resetAuthEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetAuthEndpoint"></a>

```java
public void resetAuthEndpoint()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetTokenEndpoint"></a>

```java
public void resetTokenEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpointInput">authEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpoint">authEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authEndpointInput`<sup>Optional</sup> <a name="authEndpointInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpointInput"></a>

```java
public java.lang.String getAuthEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `authEndpoint`<sup>Required</sup> <a name="authEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpoint"></a>

```java
public java.lang.String getAuthEndpoint();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.internalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference;

new IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.putTokenParams">putTokenParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetRequestType">resetRequestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenParams">resetTokenParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTokenParams` <a name="putTokenParams" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.putTokenParams"></a>

```java
public void putTokenParams(IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.putTokenParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

---

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetRequestType` <a name="resetRequestType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetRequestType"></a>

```java
public void resetRequestType()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenEndpoint"></a>

```java
public void resetTokenEndpoint()
```

##### `resetTokenParams` <a name="resetTokenParams" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenParams"></a>

```java
public void resetTokenParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParams">tokenParams</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestTypeInput">requestTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParamsInput">tokenParamsInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestType">requestType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tokenParams`<sup>Required</sup> <a name="tokenParams" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParams"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference getTokenParams();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `requestTypeInput`<sup>Optional</sup> <a name="requestTypeInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestTypeInput"></a>

```java
public java.lang.String getRequestTypeInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `tokenParamsInput`<sup>Optional</sup> <a name="tokenParamsInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParamsInput"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams getTokenParamsInput();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestType"></a>

```java
public java.lang.String getRequestType();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.internalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference;

new IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStringValue` <a name="resetStringValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.internalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference;

new IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.putLiteralValue">putLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resetLiteralValue">resetLiteralValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLiteralValue` <a name="putLiteralValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.putLiteralValue"></a>

```java
public void putLiteralValue(IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.putLiteralValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

---

##### `resetLiteralValue` <a name="resetLiteralValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resetLiteralValue"></a>

```java
public void resetLiteralValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValue">literalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValueInput">literalValueInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `literalValue`<sup>Required</sup> <a name="literalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference getLiteralValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference</a>

---

##### `literalValueInput`<sup>Optional</sup> <a name="literalValueInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValueInput"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue getLiteralValueInput();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.internalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList;

new IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.get"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference;

new IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putKey">putKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKey` <a name="putKey" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putKey"></a>

```java
public void putKey(IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

---

##### `putValue` <a name="putValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putValue"></a>

```java
public void putValue(IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

---

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.key">key</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.keyInput">keyInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.valueInput">valueInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.key"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference getKey();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.value"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference getValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.keyInput"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey getKeyInput();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.valueInput"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue getValueInput();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference;

new IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStringValue` <a name="resetStringValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.internalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference;

new IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.putLiteralValue">putLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resetLiteralValue">resetLiteralValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLiteralValue` <a name="putLiteralValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.putLiteralValue"></a>

```java
public void putLiteralValue(IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.putLiteralValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

---

##### `resetLiteralValue` <a name="resetLiteralValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resetLiteralValue"></a>

```java
public void resetLiteralValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValue">literalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValueInput">literalValueInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `literalValue`<sup>Required</sup> <a name="literalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference getLiteralValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference</a>

---

##### `literalValueInput`<sup>Optional</sup> <a name="literalValueInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValueInput"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue getLiteralValueInput();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.internalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

---


### IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference;

new IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resetEntries">resetEntries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntries` <a name="putEntries" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.putEntries"></a>

```java
public void putEntries(IResolvable OR java.util.List<IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.putEntries.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>>

---

##### `resetEntries` <a name="resetEntries" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resetEntries"></a>

```java
public void resetEntries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entriesInput">entriesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entries"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList getEntries();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList</a>

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entriesInput"></a>

```java
public java.lang.Object getEntriesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.internalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

---


### IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference;

new IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetAudience"></a>

```java
public void resetAudience()
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.tokenExpireTime">tokenExpireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken">IntegrationsAuthConfigDecryptedCredentialOidcToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `tokenExpireTime`<sup>Required</sup> <a name="tokenExpireTime" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.tokenExpireTime"></a>

```java
public java.lang.String getTokenExpireTime();
```

- *Type:* java.lang.String

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.internalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOidcToken getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken">IntegrationsAuthConfigDecryptedCredentialOidcToken</a>

---


### IntegrationsAuthConfigDecryptedCredentialOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialOutputReference;

new IntegrationsAuthConfigDecryptedCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putAuthToken">putAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt">putJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode">putOauth2AuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials">putOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOidcToken">putOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putServiceAccountCredentials">putServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putUsernameAndPassword">putUsernameAndPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetAuthToken">resetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetJwt">resetJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2AuthorizationCode">resetOauth2AuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2ClientCredentials">resetOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetOidcToken">resetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetServiceAccountCredentials">resetServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetUsernameAndPassword">resetUsernameAndPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthToken` <a name="putAuthToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putAuthToken"></a>

```java
public void putAuthToken(IntegrationsAuthConfigDecryptedCredentialAuthToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putAuthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken">IntegrationsAuthConfigDecryptedCredentialAuthToken</a>

---

##### `putJwt` <a name="putJwt" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt"></a>

```java
public void putJwt(IntegrationsAuthConfigDecryptedCredentialJwt value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt">IntegrationsAuthConfigDecryptedCredentialJwt</a>

---

##### `putOauth2AuthorizationCode` <a name="putOauth2AuthorizationCode" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode"></a>

```java
public void putOauth2AuthorizationCode(IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

---

##### `putOauth2ClientCredentials` <a name="putOauth2ClientCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials"></a>

```java
public void putOauth2ClientCredentials(IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

---

##### `putOidcToken` <a name="putOidcToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOidcToken"></a>

```java
public void putOidcToken(IntegrationsAuthConfigDecryptedCredentialOidcToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken">IntegrationsAuthConfigDecryptedCredentialOidcToken</a>

---

##### `putServiceAccountCredentials` <a name="putServiceAccountCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putServiceAccountCredentials"></a>

```java
public void putServiceAccountCredentials(IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putServiceAccountCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

---

##### `putUsernameAndPassword` <a name="putUsernameAndPassword" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putUsernameAndPassword"></a>

```java
public void putUsernameAndPassword(IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.putUsernameAndPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

---

##### `resetAuthToken` <a name="resetAuthToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetAuthToken"></a>

```java
public void resetAuthToken()
```

##### `resetJwt` <a name="resetJwt" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetJwt"></a>

```java
public void resetJwt()
```

##### `resetOauth2AuthorizationCode` <a name="resetOauth2AuthorizationCode" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2AuthorizationCode"></a>

```java
public void resetOauth2AuthorizationCode()
```

##### `resetOauth2ClientCredentials` <a name="resetOauth2ClientCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2ClientCredentials"></a>

```java
public void resetOauth2ClientCredentials()
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetOidcToken"></a>

```java
public void resetOidcToken()
```

##### `resetServiceAccountCredentials` <a name="resetServiceAccountCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetServiceAccountCredentials"></a>

```java
public void resetServiceAccountCredentials()
```

##### `resetUsernameAndPassword` <a name="resetUsernameAndPassword" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.resetUsernameAndPassword"></a>

```java
public void resetUsernameAndPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.authToken">authToken</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference">IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwt">jwt</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference">IntegrationsAuthConfigDecryptedCredentialJwtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCode">oauth2AuthorizationCode</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentials">oauth2ClientCredentials</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference">IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentials">serviceAccountCredentials</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPassword">usernameAndPassword</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference">IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.authTokenInput">authTokenInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken">IntegrationsAuthConfigDecryptedCredentialAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwtInput">jwtInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt">IntegrationsAuthConfigDecryptedCredentialJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCodeInput">oauth2AuthorizationCodeInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentialsInput">oauth2ClientCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcTokenInput">oidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken">IntegrationsAuthConfigDecryptedCredentialOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentialsInput">serviceAccountCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPasswordInput">usernameAndPasswordInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential">IntegrationsAuthConfigDecryptedCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.authToken"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference getAuthToken();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference">IntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference</a>

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwt"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialJwtOutputReference getJwt();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwtOutputReference">IntegrationsAuthConfigDecryptedCredentialJwtOutputReference</a>

---

##### `oauth2AuthorizationCode`<sup>Required</sup> <a name="oauth2AuthorizationCode" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCode"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference getOauth2AuthorizationCode();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference</a>

---

##### `oauth2ClientCredentials`<sup>Required</sup> <a name="oauth2ClientCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentials"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference getOauth2ClientCredentials();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference</a>

---

##### `oidcToken`<sup>Required</sup> <a name="oidcToken" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcToken"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference getOidcToken();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference">IntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference</a>

---

##### `serviceAccountCredentials`<sup>Required</sup> <a name="serviceAccountCredentials" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentials"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference getServiceAccountCredentials();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference</a>

---

##### `usernameAndPassword`<sup>Required</sup> <a name="usernameAndPassword" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPassword"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference getUsernameAndPassword();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference">IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference</a>

---

##### `authTokenInput`<sup>Optional</sup> <a name="authTokenInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.authTokenInput"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialAuthToken getAuthTokenInput();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialAuthToken">IntegrationsAuthConfigDecryptedCredentialAuthToken</a>

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialTypeInput"></a>

```java
public java.lang.String getCredentialTypeInput();
```

- *Type:* java.lang.String

---

##### `jwtInput`<sup>Optional</sup> <a name="jwtInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwtInput"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialJwt getJwtInput();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialJwt">IntegrationsAuthConfigDecryptedCredentialJwt</a>

---

##### `oauth2AuthorizationCodeInput`<sup>Optional</sup> <a name="oauth2AuthorizationCodeInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCodeInput"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode getOauth2AuthorizationCodeInput();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">IntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

---

##### `oauth2ClientCredentialsInput`<sup>Optional</sup> <a name="oauth2ClientCredentialsInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentialsInput"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials getOauth2ClientCredentialsInput();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">IntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcTokenInput"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialOidcToken getOidcTokenInput();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOidcToken">IntegrationsAuthConfigDecryptedCredentialOidcToken</a>

---

##### `serviceAccountCredentialsInput`<sup>Optional</sup> <a name="serviceAccountCredentialsInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentialsInput"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials getServiceAccountCredentialsInput();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

---

##### `usernameAndPasswordInput`<sup>Optional</sup> <a name="usernameAndPasswordInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPasswordInput"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword getUsernameAndPasswordInput();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialOutputReference.property.internalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredential getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredential">IntegrationsAuthConfigDecryptedCredential</a>

---


### IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference;

new IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.internalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">IntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

---


### IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference <a name="IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference;

new IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.internalValue"></a>

```java
public IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">IntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

---


### IntegrationsAuthConfigTimeoutsOutputReference <a name="IntegrationsAuthConfigTimeoutsOutputReference" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_auth_config.IntegrationsAuthConfigTimeoutsOutputReference;

new IntegrationsAuthConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts">IntegrationsAuthConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationsAuthConfig.IntegrationsAuthConfigTimeouts">IntegrationsAuthConfigTimeouts</a>

---



