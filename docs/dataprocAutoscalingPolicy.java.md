# `dataprocAutoscalingPolicy` Submodule <a name="`dataprocAutoscalingPolicy` Submodule" id="@cdktf/provider-google.dataprocAutoscalingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocAutoscalingPolicy <a name="DataprocAutoscalingPolicy" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy google_dataproc_autoscaling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_autoscaling_policy.DataprocAutoscalingPolicy;

DataprocAutoscalingPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .policyId(java.lang.String)
//  .basicAlgorithm(DataprocAutoscalingPolicyBasicAlgorithm)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .secondaryWorkerConfig(DataprocAutoscalingPolicySecondaryWorkerConfig)
//  .timeouts(DataprocAutoscalingPolicyTimeouts)
//  .workerConfig(DataprocAutoscalingPolicyWorkerConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | The policy id. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.basicAlgorithm">basicAlgorithm</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a></code> | basic_algorithm block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#id DataprocAutoscalingPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The  location where the autoscaling policy should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#project DataprocAutoscalingPolicy#project}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.secondaryWorkerConfig">secondaryWorkerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | secondary_worker_config block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.workerConfig">workerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a></code> | worker_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

The policy id.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 50 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#policy_id DataprocAutoscalingPolicy#policy_id}

---

##### `basicAlgorithm`<sup>Optional</sup> <a name="basicAlgorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.basicAlgorithm"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a>

basic_algorithm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#basic_algorithm DataprocAutoscalingPolicy#basic_algorithm}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#id DataprocAutoscalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The  location where the autoscaling policy should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#location DataprocAutoscalingPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#project DataprocAutoscalingPolicy#project}.

---

##### `secondaryWorkerConfig`<sup>Optional</sup> <a name="secondaryWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.secondaryWorkerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a>

secondary_worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#secondary_worker_config DataprocAutoscalingPolicy#secondary_worker_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#timeouts DataprocAutoscalingPolicy#timeouts}

---

##### `workerConfig`<sup>Optional</sup> <a name="workerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.workerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#worker_config DataprocAutoscalingPolicy#worker_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putBasicAlgorithm">putBasicAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putSecondaryWorkerConfig">putSecondaryWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putWorkerConfig">putWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetBasicAlgorithm">resetBasicAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetSecondaryWorkerConfig">resetSecondaryWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetWorkerConfig">resetWorkerConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBasicAlgorithm` <a name="putBasicAlgorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putBasicAlgorithm"></a>

```java
public void putBasicAlgorithm(DataprocAutoscalingPolicyBasicAlgorithm value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putBasicAlgorithm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a>

---

##### `putSecondaryWorkerConfig` <a name="putSecondaryWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putSecondaryWorkerConfig"></a>

```java
public void putSecondaryWorkerConfig(DataprocAutoscalingPolicySecondaryWorkerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putSecondaryWorkerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putTimeouts"></a>

```java
public void putTimeouts(DataprocAutoscalingPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a>

---

##### `putWorkerConfig` <a name="putWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putWorkerConfig"></a>

```java
public void putWorkerConfig(DataprocAutoscalingPolicyWorkerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putWorkerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a>

---

##### `resetBasicAlgorithm` <a name="resetBasicAlgorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetBasicAlgorithm"></a>

```java
public void resetBasicAlgorithm()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetSecondaryWorkerConfig` <a name="resetSecondaryWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetSecondaryWorkerConfig"></a>

```java
public void resetSecondaryWorkerConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkerConfig` <a name="resetWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetWorkerConfig"></a>

```java
public void resetWorkerConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocAutoscalingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_autoscaling_policy.DataprocAutoscalingPolicy;

DataprocAutoscalingPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_autoscaling_policy.DataprocAutoscalingPolicy;

DataprocAutoscalingPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_autoscaling_policy.DataprocAutoscalingPolicy;

DataprocAutoscalingPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_autoscaling_policy.DataprocAutoscalingPolicy;

DataprocAutoscalingPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataprocAutoscalingPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataprocAutoscalingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataprocAutoscalingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataprocAutoscalingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataprocAutoscalingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.basicAlgorithm">basicAlgorithm</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference">DataprocAutoscalingPolicyBasicAlgorithmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.secondaryWorkerConfig">secondaryWorkerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference">DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference">DataprocAutoscalingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.workerConfig">workerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference">DataprocAutoscalingPolicyWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.basicAlgorithmInput">basicAlgorithmInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.secondaryWorkerConfigInput">secondaryWorkerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.workerConfigInput">workerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `basicAlgorithm`<sup>Required</sup> <a name="basicAlgorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.basicAlgorithm"></a>

```java
public DataprocAutoscalingPolicyBasicAlgorithmOutputReference getBasicAlgorithm();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference">DataprocAutoscalingPolicyBasicAlgorithmOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secondaryWorkerConfig`<sup>Required</sup> <a name="secondaryWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.secondaryWorkerConfig"></a>

```java
public DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference getSecondaryWorkerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference">DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.timeouts"></a>

```java
public DataprocAutoscalingPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference">DataprocAutoscalingPolicyTimeoutsOutputReference</a>

---

##### `workerConfig`<sup>Required</sup> <a name="workerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.workerConfig"></a>

```java
public DataprocAutoscalingPolicyWorkerConfigOutputReference getWorkerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference">DataprocAutoscalingPolicyWorkerConfigOutputReference</a>

---

##### `basicAlgorithmInput`<sup>Optional</sup> <a name="basicAlgorithmInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.basicAlgorithmInput"></a>

```java
public DataprocAutoscalingPolicyBasicAlgorithm getBasicAlgorithmInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `secondaryWorkerConfigInput`<sup>Optional</sup> <a name="secondaryWorkerConfigInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.secondaryWorkerConfigInput"></a>

```java
public DataprocAutoscalingPolicySecondaryWorkerConfig getSecondaryWorkerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a>

---

##### `workerConfigInput`<sup>Optional</sup> <a name="workerConfigInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.workerConfigInput"></a>

```java
public DataprocAutoscalingPolicyWorkerConfig getWorkerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocAutoscalingPolicyBasicAlgorithm <a name="DataprocAutoscalingPolicyBasicAlgorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_autoscaling_policy.DataprocAutoscalingPolicyBasicAlgorithm;

DataprocAutoscalingPolicyBasicAlgorithm.builder()
    .yarnConfig(DataprocAutoscalingPolicyBasicAlgorithmYarnConfig)
//  .cooldownPeriod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm.property.yarnConfig">yarnConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | yarn_config block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm.property.cooldownPeriod">cooldownPeriod</a></code> | <code>java.lang.String</code> | Duration between scaling events. A scaling period starts after the update operation from the previous event has completed. |

---

##### `yarnConfig`<sup>Required</sup> <a name="yarnConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm.property.yarnConfig"></a>

```java
public DataprocAutoscalingPolicyBasicAlgorithmYarnConfig getYarnConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

yarn_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#yarn_config DataprocAutoscalingPolicy#yarn_config}

---

##### `cooldownPeriod`<sup>Optional</sup> <a name="cooldownPeriod" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm.property.cooldownPeriod"></a>

```java
public java.lang.String getCooldownPeriod();
```

- *Type:* java.lang.String

Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.

Bounds: [2m, 1d]. Default: 2m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#cooldown_period DataprocAutoscalingPolicy#cooldown_period}

---

### DataprocAutoscalingPolicyBasicAlgorithmYarnConfig <a name="DataprocAutoscalingPolicyBasicAlgorithmYarnConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_autoscaling_policy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig;

DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.builder()
    .gracefulDecommissionTimeout(java.lang.String)
    .scaleDownFactor(java.lang.Number)
    .scaleUpFactor(java.lang.Number)
//  .scaleDownMinWorkerFraction(java.lang.Number)
//  .scaleUpMinWorkerFraction(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.gracefulDecommissionTimeout">gracefulDecommissionTimeout</a></code> | <code>java.lang.String</code> | Timeout for YARN graceful decommissioning of Node Managers. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownFactor">scaleDownFactor</a></code> | <code>java.lang.Number</code> | Fraction of average pending memory in the last cooldown period for which to remove workers. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpFactor">scaleUpFactor</a></code> | <code>java.lang.Number</code> | Fraction of average pending memory in the last cooldown period for which to add workers. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownMinWorkerFraction">scaleDownMinWorkerFraction</a></code> | <code>java.lang.Number</code> | Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpMinWorkerFraction">scaleUpMinWorkerFraction</a></code> | <code>java.lang.Number</code> | Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. |

---

##### `gracefulDecommissionTimeout`<sup>Required</sup> <a name="gracefulDecommissionTimeout" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.gracefulDecommissionTimeout"></a>

```java
public java.lang.String getGracefulDecommissionTimeout();
```

- *Type:* java.lang.String

Timeout for YARN graceful decommissioning of Node Managers.

Specifies the
duration to wait for jobs to complete before forcefully removing workers
(and potentially interrupting jobs). Only applicable to downscaling operations.

Bounds: [0s, 1d].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#graceful_decommission_timeout DataprocAutoscalingPolicy#graceful_decommission_timeout}

---

##### `scaleDownFactor`<sup>Required</sup> <a name="scaleDownFactor" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownFactor"></a>

```java
public java.lang.Number getScaleDownFactor();
```

- *Type:* java.lang.Number

Fraction of average pending memory in the last cooldown period for which to remove workers.

A scale-down factor of 1 will result in scaling down so that there
is no available memory remaining after the update (more aggressive scaling).
A scale-down factor of 0 disables removing workers, which can be beneficial for
autoscaling a single job.

Bounds: [0.0, 1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#scale_down_factor DataprocAutoscalingPolicy#scale_down_factor}

---

##### `scaleUpFactor`<sup>Required</sup> <a name="scaleUpFactor" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpFactor"></a>

```java
public java.lang.Number getScaleUpFactor();
```

- *Type:* java.lang.Number

Fraction of average pending memory in the last cooldown period for which to add workers.

A scale-up factor of 1.0 will result in scaling up so that there
is no pending memory remaining after the update (more aggressive scaling).
A scale-up factor closer to 0 will result in a smaller magnitude of scaling up
(less aggressive scaling).

Bounds: [0.0, 1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#scale_up_factor DataprocAutoscalingPolicy#scale_up_factor}

---

##### `scaleDownMinWorkerFraction`<sup>Optional</sup> <a name="scaleDownMinWorkerFraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownMinWorkerFraction"></a>

```java
public java.lang.Number getScaleDownMinWorkerFraction();
```

- *Type:* java.lang.Number

Minimum scale-down threshold as a fraction of total cluster size before scaling occurs.

For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must
recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0
means the autoscaler will scale down on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#scale_down_min_worker_fraction DataprocAutoscalingPolicy#scale_down_min_worker_fraction}

---

##### `scaleUpMinWorkerFraction`<sup>Optional</sup> <a name="scaleUpMinWorkerFraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpMinWorkerFraction"></a>

```java
public java.lang.Number getScaleUpMinWorkerFraction();
```

- *Type:* java.lang.Number

Minimum scale-up threshold as a fraction of total cluster size before scaling occurs.

For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler
must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of
0 means the autoscaler will scale up on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#scale_up_min_worker_fraction DataprocAutoscalingPolicy#scale_up_min_worker_fraction}

---

### DataprocAutoscalingPolicyConfig <a name="DataprocAutoscalingPolicyConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_autoscaling_policy.DataprocAutoscalingPolicyConfig;

DataprocAutoscalingPolicyConfig.builder()
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
    .policyId(java.lang.String)
//  .basicAlgorithm(DataprocAutoscalingPolicyBasicAlgorithm)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .secondaryWorkerConfig(DataprocAutoscalingPolicySecondaryWorkerConfig)
//  .timeouts(DataprocAutoscalingPolicyTimeouts)
//  .workerConfig(DataprocAutoscalingPolicyWorkerConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | The policy id. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.basicAlgorithm">basicAlgorithm</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a></code> | basic_algorithm block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#id DataprocAutoscalingPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | The  location where the autoscaling policy should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#project DataprocAutoscalingPolicy#project}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.secondaryWorkerConfig">secondaryWorkerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | secondary_worker_config block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.workerConfig">workerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a></code> | worker_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

The policy id.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 50 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#policy_id DataprocAutoscalingPolicy#policy_id}

---

##### `basicAlgorithm`<sup>Optional</sup> <a name="basicAlgorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.basicAlgorithm"></a>

```java
public DataprocAutoscalingPolicyBasicAlgorithm getBasicAlgorithm();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a>

basic_algorithm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#basic_algorithm DataprocAutoscalingPolicy#basic_algorithm}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#id DataprocAutoscalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The  location where the autoscaling policy should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#location DataprocAutoscalingPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#project DataprocAutoscalingPolicy#project}.

---

##### `secondaryWorkerConfig`<sup>Optional</sup> <a name="secondaryWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.secondaryWorkerConfig"></a>

```java
public DataprocAutoscalingPolicySecondaryWorkerConfig getSecondaryWorkerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a>

secondary_worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#secondary_worker_config DataprocAutoscalingPolicy#secondary_worker_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.timeouts"></a>

```java
public DataprocAutoscalingPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#timeouts DataprocAutoscalingPolicy#timeouts}

---

##### `workerConfig`<sup>Optional</sup> <a name="workerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.workerConfig"></a>

```java
public DataprocAutoscalingPolicyWorkerConfig getWorkerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#worker_config DataprocAutoscalingPolicy#worker_config}

---

### DataprocAutoscalingPolicySecondaryWorkerConfig <a name="DataprocAutoscalingPolicySecondaryWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_autoscaling_policy.DataprocAutoscalingPolicySecondaryWorkerConfig;

DataprocAutoscalingPolicySecondaryWorkerConfig.builder()
//  .maxInstances(java.lang.Number)
//  .minInstances(java.lang.Number)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | Maximum number of instances for this group. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.weight">weight</a></code> | <code>java.lang.Number</code> | Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. |

---

##### `maxInstances`<sup>Optional</sup> <a name="maxInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

Maximum number of instances for this group.

Note that by default, clusters will not use
secondary workers. Required for secondary workers if the minimum secondary instances is set.
Bounds: [minInstances, ). Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#max_instances DataprocAutoscalingPolicy#max_instances}

---

##### `minInstances`<sup>Optional</sup> <a name="minInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#min_instances DataprocAutoscalingPolicy#min_instances}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group.

For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#weight DataprocAutoscalingPolicy#weight}

---

### DataprocAutoscalingPolicyTimeouts <a name="DataprocAutoscalingPolicyTimeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_autoscaling_policy.DataprocAutoscalingPolicyTimeouts;

DataprocAutoscalingPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#create DataprocAutoscalingPolicy#create}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#delete DataprocAutoscalingPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#update DataprocAutoscalingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#create DataprocAutoscalingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#delete DataprocAutoscalingPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#update DataprocAutoscalingPolicy#update}.

---

### DataprocAutoscalingPolicyWorkerConfig <a name="DataprocAutoscalingPolicyWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_autoscaling_policy.DataprocAutoscalingPolicyWorkerConfig;

DataprocAutoscalingPolicyWorkerConfig.builder()
    .maxInstances(java.lang.Number)
//  .minInstances(java.lang.Number)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | Maximum number of instances for this group. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.weight">weight</a></code> | <code>java.lang.Number</code> | Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. |

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

Maximum number of instances for this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#max_instances DataprocAutoscalingPolicy#max_instances}

---

##### `minInstances`<sup>Optional</sup> <a name="minInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#min_instances DataprocAutoscalingPolicy#min_instances}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group.

For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_autoscaling_policy#weight DataprocAutoscalingPolicy#weight}

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocAutoscalingPolicyBasicAlgorithmOutputReference <a name="DataprocAutoscalingPolicyBasicAlgorithmOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_autoscaling_policy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference;

new DataprocAutoscalingPolicyBasicAlgorithmOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig">putYarnConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.resetCooldownPeriod">resetCooldownPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putYarnConfig` <a name="putYarnConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig"></a>

```java
public void putYarnConfig(DataprocAutoscalingPolicyBasicAlgorithmYarnConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

---

##### `resetCooldownPeriod` <a name="resetCooldownPeriod" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.resetCooldownPeriod"></a>

```java
public void resetCooldownPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfig">yarnConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference">DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriodInput">cooldownPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfigInput">yarnConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriod">cooldownPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `yarnConfig`<sup>Required</sup> <a name="yarnConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfig"></a>

```java
public DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference getYarnConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference">DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference</a>

---

##### `cooldownPeriodInput`<sup>Optional</sup> <a name="cooldownPeriodInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriodInput"></a>

```java
public java.lang.String getCooldownPeriodInput();
```

- *Type:* java.lang.String

---

##### `yarnConfigInput`<sup>Optional</sup> <a name="yarnConfigInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfigInput"></a>

```java
public DataprocAutoscalingPolicyBasicAlgorithmYarnConfig getYarnConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

---

##### `cooldownPeriod`<sup>Required</sup> <a name="cooldownPeriod" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriod"></a>

```java
public java.lang.String getCooldownPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.internalValue"></a>

```java
public DataprocAutoscalingPolicyBasicAlgorithm getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a>

---


### DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference <a name="DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_autoscaling_policy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference;

new DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleDownMinWorkerFraction">resetScaleDownMinWorkerFraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleUpMinWorkerFraction">resetScaleUpMinWorkerFraction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScaleDownMinWorkerFraction` <a name="resetScaleDownMinWorkerFraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleDownMinWorkerFraction"></a>

```java
public void resetScaleDownMinWorkerFraction()
```

##### `resetScaleUpMinWorkerFraction` <a name="resetScaleUpMinWorkerFraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleUpMinWorkerFraction"></a>

```java
public void resetScaleUpMinWorkerFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeoutInput">gracefulDecommissionTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactorInput">scaleDownFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFractionInput">scaleDownMinWorkerFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactorInput">scaleUpFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFractionInput">scaleUpMinWorkerFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeout">gracefulDecommissionTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactor">scaleDownFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFraction">scaleDownMinWorkerFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactor">scaleUpFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFraction">scaleUpMinWorkerFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gracefulDecommissionTimeoutInput`<sup>Optional</sup> <a name="gracefulDecommissionTimeoutInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeoutInput"></a>

```java
public java.lang.String getGracefulDecommissionTimeoutInput();
```

- *Type:* java.lang.String

---

##### `scaleDownFactorInput`<sup>Optional</sup> <a name="scaleDownFactorInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactorInput"></a>

```java
public java.lang.Number getScaleDownFactorInput();
```

- *Type:* java.lang.Number

---

##### `scaleDownMinWorkerFractionInput`<sup>Optional</sup> <a name="scaleDownMinWorkerFractionInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFractionInput"></a>

```java
public java.lang.Number getScaleDownMinWorkerFractionInput();
```

- *Type:* java.lang.Number

---

##### `scaleUpFactorInput`<sup>Optional</sup> <a name="scaleUpFactorInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactorInput"></a>

```java
public java.lang.Number getScaleUpFactorInput();
```

- *Type:* java.lang.Number

---

##### `scaleUpMinWorkerFractionInput`<sup>Optional</sup> <a name="scaleUpMinWorkerFractionInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFractionInput"></a>

```java
public java.lang.Number getScaleUpMinWorkerFractionInput();
```

- *Type:* java.lang.Number

---

##### `gracefulDecommissionTimeout`<sup>Required</sup> <a name="gracefulDecommissionTimeout" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeout"></a>

```java
public java.lang.String getGracefulDecommissionTimeout();
```

- *Type:* java.lang.String

---

##### `scaleDownFactor`<sup>Required</sup> <a name="scaleDownFactor" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactor"></a>

```java
public java.lang.Number getScaleDownFactor();
```

- *Type:* java.lang.Number

---

##### `scaleDownMinWorkerFraction`<sup>Required</sup> <a name="scaleDownMinWorkerFraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFraction"></a>

```java
public java.lang.Number getScaleDownMinWorkerFraction();
```

- *Type:* java.lang.Number

---

##### `scaleUpFactor`<sup>Required</sup> <a name="scaleUpFactor" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactor"></a>

```java
public java.lang.Number getScaleUpFactor();
```

- *Type:* java.lang.Number

---

##### `scaleUpMinWorkerFraction`<sup>Required</sup> <a name="scaleUpMinWorkerFraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFraction"></a>

```java
public java.lang.Number getScaleUpMinWorkerFraction();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.internalValue"></a>

```java
public DataprocAutoscalingPolicyBasicAlgorithmYarnConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

---


### DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference <a name="DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_autoscaling_policy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference;

new DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMaxInstances">resetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMinInstances">resetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxInstances` <a name="resetMaxInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMaxInstances"></a>

```java
public void resetMaxInstances()
```

##### `resetMinInstances` <a name="resetMinInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMinInstances"></a>

```java
public void resetMinInstances()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstancesInput">maxInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstancesInput">minInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInstancesInput`<sup>Optional</sup> <a name="maxInstancesInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstancesInput"></a>

```java
public java.lang.Number getMaxInstancesInput();
```

- *Type:* java.lang.Number

---

##### `minInstancesInput`<sup>Optional</sup> <a name="minInstancesInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstancesInput"></a>

```java
public java.lang.Number getMinInstancesInput();
```

- *Type:* java.lang.Number

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.internalValue"></a>

```java
public DataprocAutoscalingPolicySecondaryWorkerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a>

---


### DataprocAutoscalingPolicyTimeoutsOutputReference <a name="DataprocAutoscalingPolicyTimeoutsOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_autoscaling_policy.DataprocAutoscalingPolicyTimeoutsOutputReference;

new DataprocAutoscalingPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a>

---


### DataprocAutoscalingPolicyWorkerConfigOutputReference <a name="DataprocAutoscalingPolicyWorkerConfigOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataproc_autoscaling_policy.DataprocAutoscalingPolicyWorkerConfigOutputReference;

new DataprocAutoscalingPolicyWorkerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resetMinInstances">resetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinInstances` <a name="resetMinInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resetMinInstances"></a>

```java
public void resetMinInstances()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstancesInput">maxInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstancesInput">minInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInstancesInput`<sup>Optional</sup> <a name="maxInstancesInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstancesInput"></a>

```java
public java.lang.Number getMaxInstancesInput();
```

- *Type:* java.lang.Number

---

##### `minInstancesInput`<sup>Optional</sup> <a name="minInstancesInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstancesInput"></a>

```java
public java.lang.Number getMinInstancesInput();
```

- *Type:* java.lang.Number

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.internalValue"></a>

```java
public DataprocAutoscalingPolicyWorkerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a>

---



