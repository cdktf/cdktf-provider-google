# `securityposturePostureDeployment` Submodule <a name="`securityposturePostureDeployment` Submodule" id="@cdktf/provider-google.securityposturePostureDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityposturePostureDeployment <a name="SecurityposturePostureDeployment" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment google_securityposture_posture_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.securityposture_posture_deployment.SecurityposturePostureDeployment;

SecurityposturePostureDeployment.Builder.create(Construct scope, java.lang.String id)
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
    .parent(java.lang.String)
    .postureDeploymentId(java.lang.String)
    .postureId(java.lang.String)
    .postureRevisionId(java.lang.String)
    .targetResource(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SecurityposturePostureDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource, eg. global'. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.postureDeploymentId">postureDeploymentId</a></code> | <code>java.lang.String</code> | ID of the posture deployment. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.postureId">postureId</a></code> | <code>java.lang.String</code> | Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.postureRevisionId">postureRevisionId</a></code> | <code>java.lang.String</code> | Revision_id the posture which needs to be deployed. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.targetResource">targetResource</a></code> | <code>java.lang.String</code> | The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the posture deployment. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#id SecurityposturePostureDeployment#id}. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource, eg. global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#location SecurityposturePostureDeployment#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#parent SecurityposturePostureDeployment#parent}

---

##### `postureDeploymentId`<sup>Required</sup> <a name="postureDeploymentId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.postureDeploymentId"></a>

- *Type:* java.lang.String

ID of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#posture_deployment_id SecurityposturePostureDeployment#posture_deployment_id}

---

##### `postureId`<sup>Required</sup> <a name="postureId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.postureId"></a>

- *Type:* java.lang.String

Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#posture_id SecurityposturePostureDeployment#posture_id}

---

##### `postureRevisionId`<sup>Required</sup> <a name="postureRevisionId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.postureRevisionId"></a>

- *Type:* java.lang.String

Revision_id the posture which needs to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#posture_revision_id SecurityposturePostureDeployment#posture_revision_id}

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.targetResource"></a>

- *Type:* java.lang.String

The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#target_resource SecurityposturePostureDeployment#target_resource}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#description SecurityposturePostureDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#id SecurityposturePostureDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#timeouts SecurityposturePostureDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.putTimeouts"></a>

```java
public void putTimeouts(SecurityposturePostureDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityposturePostureDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.securityposture_posture_deployment.SecurityposturePostureDeployment;

SecurityposturePostureDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.securityposture_posture_deployment.SecurityposturePostureDeployment;

SecurityposturePostureDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.securityposture_posture_deployment.SecurityposturePostureDeployment;

SecurityposturePostureDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.securityposture_posture_deployment.SecurityposturePostureDeployment;

SecurityposturePostureDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityposturePostureDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SecurityposturePostureDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityposturePostureDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityposturePostureDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SecurityposturePostureDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.desiredPostureId">desiredPostureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.desiredPostureRevisionId">desiredPostureRevisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.failureMessage">failureMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference">SecurityposturePostureDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureDeploymentIdInput">postureDeploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureIdInput">postureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureRevisionIdInput">postureRevisionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.targetResourceInput">targetResourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureDeploymentId">postureDeploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureId">postureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureRevisionId">postureRevisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.targetResource">targetResource</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `desiredPostureId`<sup>Required</sup> <a name="desiredPostureId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.desiredPostureId"></a>

```java
public java.lang.String getDesiredPostureId();
```

- *Type:* java.lang.String

---

##### `desiredPostureRevisionId`<sup>Required</sup> <a name="desiredPostureRevisionId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.desiredPostureRevisionId"></a>

```java
public java.lang.String getDesiredPostureRevisionId();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `failureMessage`<sup>Required</sup> <a name="failureMessage" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.failureMessage"></a>

```java
public java.lang.String getFailureMessage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.timeouts"></a>

```java
public SecurityposturePostureDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference">SecurityposturePostureDeploymentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `postureDeploymentIdInput`<sup>Optional</sup> <a name="postureDeploymentIdInput" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureDeploymentIdInput"></a>

```java
public java.lang.String getPostureDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `postureIdInput`<sup>Optional</sup> <a name="postureIdInput" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureIdInput"></a>

```java
public java.lang.String getPostureIdInput();
```

- *Type:* java.lang.String

---

##### `postureRevisionIdInput`<sup>Optional</sup> <a name="postureRevisionIdInput" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureRevisionIdInput"></a>

```java
public java.lang.String getPostureRevisionIdInput();
```

- *Type:* java.lang.String

---

##### `targetResourceInput`<sup>Optional</sup> <a name="targetResourceInput" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.targetResourceInput"></a>

```java
public java.lang.String getTargetResourceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `postureDeploymentId`<sup>Required</sup> <a name="postureDeploymentId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureDeploymentId"></a>

```java
public java.lang.String getPostureDeploymentId();
```

- *Type:* java.lang.String

---

##### `postureId`<sup>Required</sup> <a name="postureId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureId"></a>

```java
public java.lang.String getPostureId();
```

- *Type:* java.lang.String

---

##### `postureRevisionId`<sup>Required</sup> <a name="postureRevisionId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureRevisionId"></a>

```java
public java.lang.String getPostureRevisionId();
```

- *Type:* java.lang.String

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.targetResource"></a>

```java
public java.lang.String getTargetResource();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityposturePostureDeploymentConfig <a name="SecurityposturePostureDeploymentConfig" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.securityposture_posture_deployment.SecurityposturePostureDeploymentConfig;

SecurityposturePostureDeploymentConfig.builder()
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
    .parent(java.lang.String)
    .postureDeploymentId(java.lang.String)
    .postureId(java.lang.String)
    .postureRevisionId(java.lang.String)
    .targetResource(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SecurityposturePostureDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource, eg. global'. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureDeploymentId">postureDeploymentId</a></code> | <code>java.lang.String</code> | ID of the posture deployment. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureId">postureId</a></code> | <code>java.lang.String</code> | Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureRevisionId">postureRevisionId</a></code> | <code>java.lang.String</code> | Revision_id the posture which needs to be deployed. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.targetResource">targetResource</a></code> | <code>java.lang.String</code> | The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the posture deployment. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#id SecurityposturePostureDeployment#id}. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource, eg. global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#location SecurityposturePostureDeployment#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#parent SecurityposturePostureDeployment#parent}

---

##### `postureDeploymentId`<sup>Required</sup> <a name="postureDeploymentId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureDeploymentId"></a>

```java
public java.lang.String getPostureDeploymentId();
```

- *Type:* java.lang.String

ID of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#posture_deployment_id SecurityposturePostureDeployment#posture_deployment_id}

---

##### `postureId`<sup>Required</sup> <a name="postureId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureId"></a>

```java
public java.lang.String getPostureId();
```

- *Type:* java.lang.String

Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#posture_id SecurityposturePostureDeployment#posture_id}

---

##### `postureRevisionId`<sup>Required</sup> <a name="postureRevisionId" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureRevisionId"></a>

```java
public java.lang.String getPostureRevisionId();
```

- *Type:* java.lang.String

Revision_id the posture which needs to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#posture_revision_id SecurityposturePostureDeployment#posture_revision_id}

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.targetResource"></a>

```java
public java.lang.String getTargetResource();
```

- *Type:* java.lang.String

The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#target_resource SecurityposturePostureDeployment#target_resource}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#description SecurityposturePostureDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#id SecurityposturePostureDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.timeouts"></a>

```java
public SecurityposturePostureDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#timeouts SecurityposturePostureDeployment#timeouts}

---

### SecurityposturePostureDeploymentTimeouts <a name="SecurityposturePostureDeploymentTimeouts" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.securityposture_posture_deployment.SecurityposturePostureDeploymentTimeouts;

SecurityposturePostureDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#create SecurityposturePostureDeployment#create}. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#delete SecurityposturePostureDeployment#delete}. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#update SecurityposturePostureDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#create SecurityposturePostureDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#delete SecurityposturePostureDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/securityposture_posture_deployment#update SecurityposturePostureDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityposturePostureDeploymentTimeoutsOutputReference <a name="SecurityposturePostureDeploymentTimeoutsOutputReference" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.securityposture_posture_deployment.SecurityposturePostureDeploymentTimeoutsOutputReference;

new SecurityposturePostureDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a>

---



