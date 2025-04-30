# `integrationsClient` Submodule <a name="`integrationsClient` Submodule" id="@cdktf/provider-google.integrationsClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationsClient <a name="IntegrationsClient" id="@cdktf/provider-google.integrationsClient.IntegrationsClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client google_integrations_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_client.IntegrationsClient;

IntegrationsClient.Builder.create(Construct scope, java.lang.String id)
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
//  .cloudKmsConfig(IntegrationsClientCloudKmsConfig)
//  .createSampleIntegrations(java.lang.Boolean)
//  .createSampleIntegrations(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .runAsServiceAccount(java.lang.String)
//  .timeouts(IntegrationsClientTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location in which client needs to be provisioned. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.cloudKmsConfig">cloudKmsConfig</a></code> | <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a></code> | cloud_kms_config block. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.createSampleIntegrations">createSampleIntegrations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if sample integrations should be created along with provisioning. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#id IntegrationsClient#id}. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#project IntegrationsClient#project}. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.runAsServiceAccount">runAsServiceAccount</a></code> | <code>java.lang.String</code> | User input run-as service account, if empty, will bring up a new default service account. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location in which client needs to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#location IntegrationsClient#location}

---

##### `cloudKmsConfig`<sup>Optional</sup> <a name="cloudKmsConfig" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.cloudKmsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a>

cloud_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#cloud_kms_config IntegrationsClient#cloud_kms_config}

---

##### `createSampleIntegrations`<sup>Optional</sup> <a name="createSampleIntegrations" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.createSampleIntegrations"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if sample integrations should be created along with provisioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#create_sample_integrations IntegrationsClient#create_sample_integrations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#id IntegrationsClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#project IntegrationsClient#project}.

---

##### `runAsServiceAccount`<sup>Optional</sup> <a name="runAsServiceAccount" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.runAsServiceAccount"></a>

- *Type:* java.lang.String

User input run-as service account, if empty, will bring up a new default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#run_as_service_account IntegrationsClient#run_as_service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#timeouts IntegrationsClient#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.putCloudKmsConfig">putCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.resetCloudKmsConfig">resetCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.resetCreateSampleIntegrations">resetCreateSampleIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.resetRunAsServiceAccount">resetRunAsServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudKmsConfig` <a name="putCloudKmsConfig" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.putCloudKmsConfig"></a>

```java
public void putCloudKmsConfig(IntegrationsClientCloudKmsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.putCloudKmsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.putTimeouts"></a>

```java
public void putTimeouts(IntegrationsClientTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a>

---

##### `resetCloudKmsConfig` <a name="resetCloudKmsConfig" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.resetCloudKmsConfig"></a>

```java
public void resetCloudKmsConfig()
```

##### `resetCreateSampleIntegrations` <a name="resetCreateSampleIntegrations" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.resetCreateSampleIntegrations"></a>

```java
public void resetCreateSampleIntegrations()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.resetProject"></a>

```java
public void resetProject()
```

##### `resetRunAsServiceAccount` <a name="resetRunAsServiceAccount" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.resetRunAsServiceAccount"></a>

```java
public void resetRunAsServiceAccount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationsClient resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_client.IntegrationsClient;

IntegrationsClient.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_client.IntegrationsClient;

IntegrationsClient.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_client.IntegrationsClient;

IntegrationsClient.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_client.IntegrationsClient;

IntegrationsClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationsClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationsClient resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationsClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationsClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationsClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.cloudKmsConfig">cloudKmsConfig</a></code> | <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference">IntegrationsClientCloudKmsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference">IntegrationsClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.cloudKmsConfigInput">cloudKmsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.createSampleIntegrationsInput">createSampleIntegrationsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.runAsServiceAccountInput">runAsServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.createSampleIntegrations">createSampleIntegrations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.runAsServiceAccount">runAsServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudKmsConfig`<sup>Required</sup> <a name="cloudKmsConfig" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.cloudKmsConfig"></a>

```java
public IntegrationsClientCloudKmsConfigOutputReference getCloudKmsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference">IntegrationsClientCloudKmsConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.timeouts"></a>

```java
public IntegrationsClientTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference">IntegrationsClientTimeoutsOutputReference</a>

---

##### `cloudKmsConfigInput`<sup>Optional</sup> <a name="cloudKmsConfigInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.cloudKmsConfigInput"></a>

```java
public IntegrationsClientCloudKmsConfig getCloudKmsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a>

---

##### `createSampleIntegrationsInput`<sup>Optional</sup> <a name="createSampleIntegrationsInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.createSampleIntegrationsInput"></a>

```java
public java.lang.Object getCreateSampleIntegrationsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `runAsServiceAccountInput`<sup>Optional</sup> <a name="runAsServiceAccountInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.runAsServiceAccountInput"></a>

```java
public java.lang.String getRunAsServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a>

---

##### `createSampleIntegrations`<sup>Required</sup> <a name="createSampleIntegrations" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.createSampleIntegrations"></a>

```java
public java.lang.Object getCreateSampleIntegrations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `runAsServiceAccount`<sup>Required</sup> <a name="runAsServiceAccount" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.runAsServiceAccount"></a>

```java
public java.lang.String getRunAsServiceAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationsClientCloudKmsConfig <a name="IntegrationsClientCloudKmsConfig" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_client.IntegrationsClientCloudKmsConfig;

IntegrationsClientCloudKmsConfig.builder()
    .key(java.lang.String)
    .kmsLocation(java.lang.String)
    .kmsRing(java.lang.String)
//  .keyVersion(java.lang.String)
//  .kmsProjectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.key">key</a></code> | <code>java.lang.String</code> | A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsLocation">kmsLocation</a></code> | <code>java.lang.String</code> | Location name of the key ring, e.g. "us-west1". |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsRing">kmsRing</a></code> | <code>java.lang.String</code> | A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.keyVersion">keyVersion</a></code> | <code>java.lang.String</code> | Each version of a key contains key material used for encryption or signing. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsProjectId">kmsProjectId</a></code> | <code>java.lang.String</code> | The Google Cloud project id of the project where the kms key stored. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key.

A key exists on exactly one key ring tied to a
specific location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#key IntegrationsClient#key}

---

##### `kmsLocation`<sup>Required</sup> <a name="kmsLocation" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsLocation"></a>

```java
public java.lang.String getKmsLocation();
```

- *Type:* java.lang.String

Location name of the key ring, e.g. "us-west1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#kms_location IntegrationsClient#kms_location}

---

##### `kmsRing`<sup>Required</sup> <a name="kmsRing" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsRing"></a>

```java
public java.lang.String getKmsRing();
```

- *Type:* java.lang.String

A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys.

A key ring's name does not need to be
unique across a Google Cloud project, but must be unique within a given location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#kms_ring IntegrationsClient#kms_ring}

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.keyVersion"></a>

```java
public java.lang.String getKeyVersion();
```

- *Type:* java.lang.String

Each version of a key contains key material used for encryption or signing.

A key's version is represented by an integer, starting at 1. To decrypt data
or verify a signature, you must use the same key version that was used to
encrypt or sign the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#key_version IntegrationsClient#key_version}

---

##### `kmsProjectId`<sup>Optional</sup> <a name="kmsProjectId" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsProjectId"></a>

```java
public java.lang.String getKmsProjectId();
```

- *Type:* java.lang.String

The Google Cloud project id of the project where the kms key stored.

If empty,
the kms key is stored at the same project as customer's project and ecrypted
with CMEK, otherwise, the kms key is stored in the tenant project and
encrypted with GMEK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#kms_project_id IntegrationsClient#kms_project_id}

---

### IntegrationsClientConfig <a name="IntegrationsClientConfig" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_client.IntegrationsClientConfig;

IntegrationsClientConfig.builder()
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
//  .cloudKmsConfig(IntegrationsClientCloudKmsConfig)
//  .createSampleIntegrations(java.lang.Boolean)
//  .createSampleIntegrations(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .runAsServiceAccount(java.lang.String)
//  .timeouts(IntegrationsClientTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location in which client needs to be provisioned. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.cloudKmsConfig">cloudKmsConfig</a></code> | <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a></code> | cloud_kms_config block. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.createSampleIntegrations">createSampleIntegrations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if sample integrations should be created along with provisioning. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#id IntegrationsClient#id}. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#project IntegrationsClient#project}. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.runAsServiceAccount">runAsServiceAccount</a></code> | <code>java.lang.String</code> | User input run-as service account, if empty, will bring up a new default service account. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location in which client needs to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#location IntegrationsClient#location}

---

##### `cloudKmsConfig`<sup>Optional</sup> <a name="cloudKmsConfig" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.cloudKmsConfig"></a>

```java
public IntegrationsClientCloudKmsConfig getCloudKmsConfig();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a>

cloud_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#cloud_kms_config IntegrationsClient#cloud_kms_config}

---

##### `createSampleIntegrations`<sup>Optional</sup> <a name="createSampleIntegrations" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.createSampleIntegrations"></a>

```java
public java.lang.Object getCreateSampleIntegrations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if sample integrations should be created along with provisioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#create_sample_integrations IntegrationsClient#create_sample_integrations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#id IntegrationsClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#project IntegrationsClient#project}.

---

##### `runAsServiceAccount`<sup>Optional</sup> <a name="runAsServiceAccount" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.runAsServiceAccount"></a>

```java
public java.lang.String getRunAsServiceAccount();
```

- *Type:* java.lang.String

User input run-as service account, if empty, will bring up a new default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#run_as_service_account IntegrationsClient#run_as_service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.timeouts"></a>

```java
public IntegrationsClientTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#timeouts IntegrationsClient#timeouts}

---

### IntegrationsClientTimeouts <a name="IntegrationsClientTimeouts" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_client.IntegrationsClientTimeouts;

IntegrationsClientTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#create IntegrationsClient#create}. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#delete IntegrationsClient#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#create IntegrationsClient#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/integrations_client#delete IntegrationsClient#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationsClientCloudKmsConfigOutputReference <a name="IntegrationsClientCloudKmsConfigOutputReference" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_client.IntegrationsClientCloudKmsConfigOutputReference;

new IntegrationsClientCloudKmsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resetKeyVersion">resetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resetKmsProjectId">resetKmsProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyVersion` <a name="resetKeyVersion" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resetKeyVersion"></a>

```java
public void resetKeyVersion()
```

##### `resetKmsProjectId` <a name="resetKmsProjectId" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resetKmsProjectId"></a>

```java
public void resetKmsProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyVersionInput">keyVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsLocationInput">kmsLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectIdInput">kmsProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsRingInput">kmsRingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyVersion">keyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsLocation">kmsLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectId">kmsProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsRing">kmsRing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `keyVersionInput`<sup>Optional</sup> <a name="keyVersionInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyVersionInput"></a>

```java
public java.lang.String getKeyVersionInput();
```

- *Type:* java.lang.String

---

##### `kmsLocationInput`<sup>Optional</sup> <a name="kmsLocationInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsLocationInput"></a>

```java
public java.lang.String getKmsLocationInput();
```

- *Type:* java.lang.String

---

##### `kmsProjectIdInput`<sup>Optional</sup> <a name="kmsProjectIdInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectIdInput"></a>

```java
public java.lang.String getKmsProjectIdInput();
```

- *Type:* java.lang.String

---

##### `kmsRingInput`<sup>Optional</sup> <a name="kmsRingInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsRingInput"></a>

```java
public java.lang.String getKmsRingInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyVersion"></a>

```java
public java.lang.String getKeyVersion();
```

- *Type:* java.lang.String

---

##### `kmsLocation`<sup>Required</sup> <a name="kmsLocation" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsLocation"></a>

```java
public java.lang.String getKmsLocation();
```

- *Type:* java.lang.String

---

##### `kmsProjectId`<sup>Required</sup> <a name="kmsProjectId" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectId"></a>

```java
public java.lang.String getKmsProjectId();
```

- *Type:* java.lang.String

---

##### `kmsRing`<sup>Required</sup> <a name="kmsRing" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsRing"></a>

```java
public java.lang.String getKmsRing();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.internalValue"></a>

```java
public IntegrationsClientCloudKmsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a>

---


### IntegrationsClientTimeoutsOutputReference <a name="IntegrationsClientTimeoutsOutputReference" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integrations_client.IntegrationsClientTimeoutsOutputReference;

new IntegrationsClientTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a>

---



