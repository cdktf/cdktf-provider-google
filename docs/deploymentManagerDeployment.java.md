# `deploymentManagerDeployment` Submodule <a name="`deploymentManagerDeployment` Submodule" id="@cdktf/provider-google.deploymentManagerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeploymentManagerDeployment <a name="DeploymentManagerDeployment" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment google_deployment_manager_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeployment;

DeploymentManagerDeployment.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .target(DeploymentManagerDeploymentTarget)
//  .createPolicy(java.lang.String)
//  .deletePolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<DeploymentManagerDeploymentLabels>)
//  .preview(java.lang.Boolean)
//  .preview(IResolvable)
//  .project(java.lang.String)
//  .timeouts(DeploymentManagerDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name for the deployment. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.createPolicy">createPolicy</a></code> | <code>java.lang.String</code> | Set the policy to use for creating new resources. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.deletePolicy">deletePolicy</a></code> | <code>java.lang.String</code> | Set the policy to use for deleting new resources on update/delete. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional user-provided description of deployment. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#id DeploymentManagerDeployment#id}. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.preview">preview</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, a deployment is created with "shell" resources that are not actually instantiated. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#project DeploymentManagerDeployment#project}. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#name DeploymentManagerDeployment#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#target DeploymentManagerDeployment#target}

---

##### `createPolicy`<sup>Optional</sup> <a name="createPolicy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.createPolicy"></a>

- *Type:* java.lang.String

Set the policy to use for creating new resources.

Only used on
create and update. Valid values are 'CREATE_OR_ACQUIRE' (default) or
'ACQUIRE'. If set to 'ACQUIRE' and resources do not already exist,
the deployment will fail. Note that updating this field does not
actually affect the deployment, just how it is updated. Default value: "CREATE_OR_ACQUIRE" Possible values: ["ACQUIRE", "CREATE_OR_ACQUIRE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#create_policy DeploymentManagerDeployment#create_policy}

---

##### `deletePolicy`<sup>Optional</sup> <a name="deletePolicy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.deletePolicy"></a>

- *Type:* java.lang.String

Set the policy to use for deleting new resources on update/delete.

Valid values are 'DELETE' (default) or 'ABANDON'. If 'DELETE',
resource is deleted after removal from Deployment Manager. If
'ABANDON', the resource is only removed from Deployment Manager
and is not actually deleted. Note that updating this field does not
actually change the deployment, just how it is updated. Default value: "DELETE" Possible values: ["ABANDON", "DELETE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#delete_policy DeploymentManagerDeployment#delete_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional user-provided description of deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#description DeploymentManagerDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#id DeploymentManagerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.labels"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#labels DeploymentManagerDeployment#labels}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.preview"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, a deployment is created with "shell" resources that are not actually instantiated.

This allows you to preview a
deployment. It can be updated to false to actually deploy
with real resources.
~>**NOTE:** Deployment Manager does not allow update
of a deployment in preview (unless updating to preview=false). Thus,
Terraform will force-recreate deployments if either preview is updated
to true or if other fields are updated while preview is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#preview DeploymentManagerDeployment#preview}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#project DeploymentManagerDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#timeouts DeploymentManagerDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetCreatePolicy">resetCreatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDeletePolicy">resetDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetPreview">resetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putLabels"></a>

```java
public void putLabels(IResolvable OR java.util.List<DeploymentManagerDeploymentLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTarget"></a>

```java
public void putTarget(DeploymentManagerDeploymentTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTimeouts"></a>

```java
public void putTimeouts(DeploymentManagerDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>

---

##### `resetCreatePolicy` <a name="resetCreatePolicy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetCreatePolicy"></a>

```java
public void resetCreatePolicy()
```

##### `resetDeletePolicy` <a name="resetDeletePolicy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDeletePolicy"></a>

```java
public void resetDeletePolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPreview` <a name="resetPreview" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetPreview"></a>

```java
public void resetPreview()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DeploymentManagerDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeployment;

DeploymentManagerDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeployment;

DeploymentManagerDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeployment;

DeploymentManagerDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeployment;

DeploymentManagerDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DeploymentManagerDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DeploymentManagerDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DeploymentManagerDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DeploymentManagerDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DeploymentManagerDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList">DeploymentManagerDeploymentLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.manifest">manifest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference">DeploymentManagerDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference">DeploymentManagerDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.createPolicyInput">createPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletePolicyInput">deletePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.labelsInput">labelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.previewInput">previewInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.createPolicy">createPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletePolicy">deletePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.preview">preview</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.labels"></a>

```java
public DeploymentManagerDeploymentLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList">DeploymentManagerDeploymentLabelsList</a>

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.manifest"></a>

```java
public java.lang.String getManifest();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.target"></a>

```java
public DeploymentManagerDeploymentTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference">DeploymentManagerDeploymentTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.timeouts"></a>

```java
public DeploymentManagerDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference">DeploymentManagerDeploymentTimeoutsOutputReference</a>

---

##### `createPolicyInput`<sup>Optional</sup> <a name="createPolicyInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.createPolicyInput"></a>

```java
public java.lang.String getCreatePolicyInput();
```

- *Type:* java.lang.String

---

##### `deletePolicyInput`<sup>Optional</sup> <a name="deletePolicyInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletePolicyInput"></a>

```java
public java.lang.String getDeletePolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.labelsInput"></a>

```java
public java.lang.Object getLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `previewInput`<sup>Optional</sup> <a name="previewInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.previewInput"></a>

```java
public java.lang.Object getPreviewInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.targetInput"></a>

```java
public DeploymentManagerDeploymentTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>

---

##### `createPolicy`<sup>Required</sup> <a name="createPolicy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.createPolicy"></a>

```java
public java.lang.String getCreatePolicy();
```

- *Type:* java.lang.String

---

##### `deletePolicy`<sup>Required</sup> <a name="deletePolicy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletePolicy"></a>

```java
public java.lang.String getDeletePolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.preview"></a>

```java
public java.lang.Object getPreview();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DeploymentManagerDeploymentConfig <a name="DeploymentManagerDeploymentConfig" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeploymentConfig;

DeploymentManagerDeploymentConfig.builder()
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
    .name(java.lang.String)
    .target(DeploymentManagerDeploymentTarget)
//  .createPolicy(java.lang.String)
//  .deletePolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<DeploymentManagerDeploymentLabels>)
//  .preview(java.lang.Boolean)
//  .preview(IResolvable)
//  .project(java.lang.String)
//  .timeouts(DeploymentManagerDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name for the deployment. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.createPolicy">createPolicy</a></code> | <code>java.lang.String</code> | Set the policy to use for creating new resources. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.deletePolicy">deletePolicy</a></code> | <code>java.lang.String</code> | Set the policy to use for deleting new resources on update/delete. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional user-provided description of deployment. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#id DeploymentManagerDeployment#id}. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.preview">preview</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, a deployment is created with "shell" resources that are not actually instantiated. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#project DeploymentManagerDeployment#project}. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#name DeploymentManagerDeployment#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.target"></a>

```java
public DeploymentManagerDeploymentTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#target DeploymentManagerDeployment#target}

---

##### `createPolicy`<sup>Optional</sup> <a name="createPolicy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.createPolicy"></a>

```java
public java.lang.String getCreatePolicy();
```

- *Type:* java.lang.String

Set the policy to use for creating new resources.

Only used on
create and update. Valid values are 'CREATE_OR_ACQUIRE' (default) or
'ACQUIRE'. If set to 'ACQUIRE' and resources do not already exist,
the deployment will fail. Note that updating this field does not
actually affect the deployment, just how it is updated. Default value: "CREATE_OR_ACQUIRE" Possible values: ["ACQUIRE", "CREATE_OR_ACQUIRE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#create_policy DeploymentManagerDeployment#create_policy}

---

##### `deletePolicy`<sup>Optional</sup> <a name="deletePolicy" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.deletePolicy"></a>

```java
public java.lang.String getDeletePolicy();
```

- *Type:* java.lang.String

Set the policy to use for deleting new resources on update/delete.

Valid values are 'DELETE' (default) or 'ABANDON'. If 'DELETE',
resource is deleted after removal from Deployment Manager. If
'ABANDON', the resource is only removed from Deployment Manager
and is not actually deleted. Note that updating this field does not
actually change the deployment, just how it is updated. Default value: "DELETE" Possible values: ["ABANDON", "DELETE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#delete_policy DeploymentManagerDeployment#delete_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional user-provided description of deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#description DeploymentManagerDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#id DeploymentManagerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.labels"></a>

```java
public java.lang.Object getLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#labels DeploymentManagerDeployment#labels}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.preview"></a>

```java
public java.lang.Object getPreview();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, a deployment is created with "shell" resources that are not actually instantiated.

This allows you to preview a
deployment. It can be updated to false to actually deploy
with real resources.
~>**NOTE:** Deployment Manager does not allow update
of a deployment in preview (unless updating to preview=false). Thus,
Terraform will force-recreate deployments if either preview is updated
to true or if other fields are updated while preview is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#preview DeploymentManagerDeployment#preview}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#project DeploymentManagerDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.timeouts"></a>

```java
public DeploymentManagerDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#timeouts DeploymentManagerDeployment#timeouts}

---

### DeploymentManagerDeploymentLabels <a name="DeploymentManagerDeploymentLabels" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeploymentLabels;

DeploymentManagerDeploymentLabels.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.property.key">key</a></code> | <code>java.lang.String</code> | Key for label. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.property.value">value</a></code> | <code>java.lang.String</code> | Value of label. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Key for label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#key DeploymentManagerDeployment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#value DeploymentManagerDeployment#value}

---

### DeploymentManagerDeploymentTarget <a name="DeploymentManagerDeploymentTarget" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeploymentTarget;

DeploymentManagerDeploymentTarget.builder()
    .config(DeploymentManagerDeploymentTargetConfig)
//  .imports(IResolvable)
//  .imports(java.util.List<DeploymentManagerDeploymentTargetImports>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.property.imports">imports</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>></code> | imports block. |

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.property.config"></a>

```java
public DeploymentManagerDeploymentTargetConfig getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#config DeploymentManagerDeployment#config}

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.property.imports"></a>

```java
public java.lang.Object getImports();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>>

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#imports DeploymentManagerDeployment#imports}

---

### DeploymentManagerDeploymentTargetConfig <a name="DeploymentManagerDeploymentTargetConfig" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeploymentTargetConfig;

DeploymentManagerDeploymentTargetConfig.builder()
    .content(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig.property.content">content</a></code> | <code>java.lang.String</code> | The full YAML contents of your configuration file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The full YAML contents of your configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#content DeploymentManagerDeployment#content}

---

### DeploymentManagerDeploymentTargetImports <a name="DeploymentManagerDeploymentTargetImports" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeploymentTargetImports;

DeploymentManagerDeploymentTargetImports.builder()
//  .content(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.property.content">content</a></code> | <code>java.lang.String</code> | The full contents of the template that you want to import. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.property.name">name</a></code> | <code>java.lang.String</code> | The name of the template to import, as declared in the YAML configuration. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The full contents of the template that you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#content DeploymentManagerDeployment#content}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the template to import, as declared in the YAML configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#name DeploymentManagerDeployment#name}

---

### DeploymentManagerDeploymentTimeouts <a name="DeploymentManagerDeploymentTimeouts" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeploymentTimeouts;

DeploymentManagerDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#create DeploymentManagerDeployment#create}. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#delete DeploymentManagerDeployment#delete}. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#update DeploymentManagerDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#create DeploymentManagerDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#delete DeploymentManagerDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/deployment_manager_deployment#update DeploymentManagerDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeploymentManagerDeploymentLabelsList <a name="DeploymentManagerDeploymentLabelsList" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeploymentLabelsList;

new DeploymentManagerDeploymentLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.get"></a>

```java
public DeploymentManagerDeploymentLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>>

---


### DeploymentManagerDeploymentLabelsOutputReference <a name="DeploymentManagerDeploymentLabelsOutputReference" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeploymentLabelsOutputReference;

new DeploymentManagerDeploymentLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>

---


### DeploymentManagerDeploymentTargetConfigOutputReference <a name="DeploymentManagerDeploymentTargetConfigOutputReference" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeploymentTargetConfigOutputReference;

new DeploymentManagerDeploymentTargetConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.internalValue"></a>

```java
public DeploymentManagerDeploymentTargetConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a>

---


### DeploymentManagerDeploymentTargetImportsList <a name="DeploymentManagerDeploymentTargetImportsList" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeploymentTargetImportsList;

new DeploymentManagerDeploymentTargetImportsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.get"></a>

```java
public DeploymentManagerDeploymentTargetImportsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>>

---


### DeploymentManagerDeploymentTargetImportsOutputReference <a name="DeploymentManagerDeploymentTargetImportsOutputReference" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeploymentTargetImportsOutputReference;

new DeploymentManagerDeploymentTargetImportsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>

---


### DeploymentManagerDeploymentTargetOutputReference <a name="DeploymentManagerDeploymentTargetOutputReference" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeploymentTargetOutputReference;

new DeploymentManagerDeploymentTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putImports">putImports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resetImports">resetImports</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putConfig"></a>

```java
public void putConfig(DeploymentManagerDeploymentTargetConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a>

---

##### `putImports` <a name="putImports" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putImports"></a>

```java
public void putImports(IResolvable OR java.util.List<DeploymentManagerDeploymentTargetImports> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putImports.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>>

---

##### `resetImports` <a name="resetImports" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resetImports"></a>

```java
public void resetImports()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference">DeploymentManagerDeploymentTargetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.imports">imports</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList">DeploymentManagerDeploymentTargetImportsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.importsInput">importsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.config"></a>

```java
public DeploymentManagerDeploymentTargetConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference">DeploymentManagerDeploymentTargetConfigOutputReference</a>

---

##### `imports`<sup>Required</sup> <a name="imports" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.imports"></a>

```java
public DeploymentManagerDeploymentTargetImportsList getImports();
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList">DeploymentManagerDeploymentTargetImportsList</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.configInput"></a>

```java
public DeploymentManagerDeploymentTargetConfig getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a>

---

##### `importsInput`<sup>Optional</sup> <a name="importsInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.importsInput"></a>

```java
public java.lang.Object getImportsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.internalValue"></a>

```java
public DeploymentManagerDeploymentTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

---


### DeploymentManagerDeploymentTimeoutsOutputReference <a name="DeploymentManagerDeploymentTimeoutsOutputReference" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.deployment_manager_deployment.DeploymentManagerDeploymentTimeoutsOutputReference;

new DeploymentManagerDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>

---



