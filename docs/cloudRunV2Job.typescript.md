# `google_cloud_run_v2_job`

Refer to the Terraform Registory for docs: [`google_cloud_run_v2_job`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job).

# `cloudRunV2Job` Submodule <a name="`cloudRunV2Job` Submodule" id="@cdktf/provider-google.cloudRunV2Job"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudRunV2Job <a name="CloudRunV2Job" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job google_cloud_run_v2_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2Job(scope: Construct, id: string, config: CloudRunV2JobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig">CloudRunV2JobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig">CloudRunV2JobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putBinaryAuthorization">putBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTemplate">putTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetBinaryAuthorization">resetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetClient">resetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetClientVersion">resetClientVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetLaunchStage">resetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putBinaryAuthorization` <a name="putBinaryAuthorization" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putBinaryAuthorization"></a>

```typescript
public putBinaryAuthorization(value: CloudRunV2JobBinaryAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization">CloudRunV2JobBinaryAuthorization</a>

---

##### `putTemplate` <a name="putTemplate" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTemplate"></a>

```typescript
public putTemplate(value: CloudRunV2JobTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate">CloudRunV2JobTemplate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudRunV2JobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts">CloudRunV2JobTimeouts</a>

---

##### `resetBinaryAuthorization` <a name="resetBinaryAuthorization" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetBinaryAuthorization"></a>

```typescript
public resetBinaryAuthorization(): void
```

##### `resetClient` <a name="resetClient" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetClient"></a>

```typescript
public resetClient(): void
```

##### `resetClientVersion` <a name="resetClientVersion" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetClientVersion"></a>

```typescript
public resetClientVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLaunchStage` <a name="resetLaunchStage" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetLaunchStage"></a>

```typescript
public resetLaunchStage(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isConstruct"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

cloudRunV2Job.CloudRunV2Job.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isTerraformElement"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

cloudRunV2Job.CloudRunV2Job.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isTerraformResource"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

cloudRunV2Job.CloudRunV2Job.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference">CloudRunV2JobBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList">CloudRunV2JobConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.executionCount">executionCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.generation">generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.latestCreatedExecution">latestCreatedExecution</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList">CloudRunV2JobLatestCreatedExecutionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.observedGeneration">observedGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference">CloudRunV2JobTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terminalCondition">terminalCondition</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList">CloudRunV2JobTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference">CloudRunV2JobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.binaryAuthorizationInput">binaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization">CloudRunV2JobBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.clientInput">clientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.clientVersionInput">clientVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.launchStageInput">launchStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.templateInput">templateInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate">CloudRunV2JobTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts">CloudRunV2JobTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.client">client</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.clientVersion">clientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.launchStage">launchStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `binaryAuthorization`<sup>Required</sup> <a name="binaryAuthorization" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.binaryAuthorization"></a>

```typescript
public readonly binaryAuthorization: CloudRunV2JobBinaryAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference">CloudRunV2JobBinaryAuthorizationOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.conditions"></a>

```typescript
public readonly conditions: CloudRunV2JobConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList">CloudRunV2JobConditionsList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `executionCount`<sup>Required</sup> <a name="executionCount" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.executionCount"></a>

```typescript
public readonly executionCount: number;
```

- *Type:* number

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.generation"></a>

```typescript
public readonly generation: string;
```

- *Type:* string

---

##### `latestCreatedExecution`<sup>Required</sup> <a name="latestCreatedExecution" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.latestCreatedExecution"></a>

```typescript
public readonly latestCreatedExecution: CloudRunV2JobLatestCreatedExecutionList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList">CloudRunV2JobLatestCreatedExecutionList</a>

---

##### `observedGeneration`<sup>Required</sup> <a name="observedGeneration" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.observedGeneration"></a>

```typescript
public readonly observedGeneration: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.template"></a>

```typescript
public readonly template: CloudRunV2JobTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference">CloudRunV2JobTemplateOutputReference</a>

---

##### `terminalCondition`<sup>Required</sup> <a name="terminalCondition" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.terminalCondition"></a>

```typescript
public readonly terminalCondition: CloudRunV2JobTerminalConditionList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList">CloudRunV2JobTerminalConditionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.timeouts"></a>

```typescript
public readonly timeouts: CloudRunV2JobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference">CloudRunV2JobTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `binaryAuthorizationInput`<sup>Optional</sup> <a name="binaryAuthorizationInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.binaryAuthorizationInput"></a>

```typescript
public readonly binaryAuthorizationInput: CloudRunV2JobBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization">CloudRunV2JobBinaryAuthorization</a>

---

##### `clientInput`<sup>Optional</sup> <a name="clientInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.clientInput"></a>

```typescript
public readonly clientInput: string;
```

- *Type:* string

---

##### `clientVersionInput`<sup>Optional</sup> <a name="clientVersionInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.clientVersionInput"></a>

```typescript
public readonly clientVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `launchStageInput`<sup>Optional</sup> <a name="launchStageInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.launchStageInput"></a>

```typescript
public readonly launchStageInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.templateInput"></a>

```typescript
public readonly templateInput: CloudRunV2JobTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate">CloudRunV2JobTemplate</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: CloudRunV2JobTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts">CloudRunV2JobTimeouts</a> | cdktf.IResolvable

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.client"></a>

```typescript
public readonly client: string;
```

- *Type:* string

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `launchStage`<sup>Required</sup> <a name="launchStage" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.launchStage"></a>

```typescript
public readonly launchStage: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2Job.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudRunV2JobBinaryAuthorization <a name="CloudRunV2JobBinaryAuthorization" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobBinaryAuthorization: cloudRunV2Job.CloudRunV2JobBinaryAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization.property.breakglassJustification">breakglassJustification</a></code> | <code>string</code> | If present, indicates to use Breakglass using this justification. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization.property.useDefault">useDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. |

---

##### `breakglassJustification`<sup>Optional</sup> <a name="breakglassJustification" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization.property.breakglassJustification"></a>

```typescript
public readonly breakglassJustification: string;
```

- *Type:* string

If present, indicates to use Breakglass using this justification.

If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#breakglass_justification CloudRunV2Job#breakglass_justification}

---

##### `useDefault`<sup>Optional</sup> <a name="useDefault" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization.property.useDefault"></a>

```typescript
public readonly useDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#use_default CloudRunV2Job#use_default}

---

### CloudRunV2JobConditions <a name="CloudRunV2JobConditions" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditions.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobConditions: cloudRunV2Job.CloudRunV2JobConditions = { ... }
```


### CloudRunV2JobConfig <a name="CloudRunV2JobConfig" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobConfig: cloudRunV2Job.CloudRunV2JobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.name">name</a></code> | <code>string</code> | Name of the Job. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate">CloudRunV2JobTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization">CloudRunV2JobBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.client">client</a></code> | <code>string</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.clientVersion">clientVersion</a></code> | <code>string</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#id CloudRunV2Job#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | KRM-style labels for the resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.launchStage">launchStage</a></code> | <code>string</code> | The launch stage as defined by Google Cloud Platform Launch Stages. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.location">location</a></code> | <code>string</code> | The location of the cloud run job. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#project CloudRunV2Job#project}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts">CloudRunV2JobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#name CloudRunV2Job#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.template"></a>

```typescript
public readonly template: CloudRunV2JobTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate">CloudRunV2JobTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#template CloudRunV2Job#template}

---

##### `binaryAuthorization`<sup>Optional</sup> <a name="binaryAuthorization" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.binaryAuthorization"></a>

```typescript
public readonly binaryAuthorization: CloudRunV2JobBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization">CloudRunV2JobBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#binary_authorization CloudRunV2Job#binary_authorization}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.client"></a>

```typescript
public readonly client: string;
```

- *Type:* string

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#client CloudRunV2Job#client}

---

##### `clientVersion`<sup>Optional</sup> <a name="clientVersion" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#client_version CloudRunV2Job#client_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#id CloudRunV2Job#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

KRM-style labels for the resource.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels Cloud Run will populate some labels with 'run.googleapis.com' or 'serving.knative.dev' namespaces. Those labels are read-only, and user changes will not be preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#labels CloudRunV2Job#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.launchStage"></a>

```typescript
public readonly launchStage: string;
```

- *Type:* string

The launch stage as defined by Google Cloud Platform Launch Stages.

Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#launch_stage CloudRunV2Job#launch_stage}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the cloud run job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#location CloudRunV2Job#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#project CloudRunV2Job#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudRunV2JobTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts">CloudRunV2JobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#timeouts CloudRunV2Job#timeouts}

---

### CloudRunV2JobLatestCreatedExecution <a name="CloudRunV2JobLatestCreatedExecution" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecution.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobLatestCreatedExecution: cloudRunV2Job.CloudRunV2JobLatestCreatedExecution = { ... }
```


### CloudRunV2JobTemplate <a name="CloudRunV2JobTemplate" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplate: cloudRunV2Job.CloudRunV2JobTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate">CloudRunV2JobTemplateTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | KRM-style labels for the resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.parallelism">parallelism</a></code> | <code>number</code> | Specifies the maximum desired number of tasks the execution should run at given time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.taskCount">taskCount</a></code> | <code>number</code> | Specifies the desired number of tasks the execution should run. |

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.template"></a>

```typescript
public readonly template: CloudRunV2JobTemplateTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate">CloudRunV2JobTemplateTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#template CloudRunV2Job#template}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

KRM-style labels for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#labels CloudRunV2Job#labels}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

Specifies the maximum desired number of tasks the execution should run at given time.

Must be <= taskCount. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed remaining, i.e. when the work left to do is less than max parallelism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#parallelism CloudRunV2Job#parallelism}

---

##### `taskCount`<sup>Optional</sup> <a name="taskCount" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate.property.taskCount"></a>

```typescript
public readonly taskCount: number;
```

- *Type:* number

Specifies the desired number of tasks the execution should run.

Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#task_count CloudRunV2Job#task_count}

---

### CloudRunV2JobTemplateTemplate <a name="CloudRunV2JobTemplateTemplate" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplate: cloudRunV2Job.CloudRunV2JobTemplateTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.containers">containers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>[]</code> | containers block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.executionEnvironment">executionEnvironment</a></code> | <code>string</code> | The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.maxRetries">maxRetries</a></code> | <code>number</code> | Number of retries allowed per Task, before marking this Task failed. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Email address of the IAM service account associated with the Task of a Job. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.timeout">timeout</a></code> | <code>string</code> | Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.volumes">volumes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>[]</code> | volumes block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess">CloudRunV2JobTemplateTemplateVpcAccess</a></code> | vpc_access block. |

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.containers"></a>

```typescript
public readonly containers: IResolvable | CloudRunV2JobTemplateTemplateContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>[]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#containers CloudRunV2Job#containers}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#encryption_key CloudRunV2Job#encryption_key}

---

##### `executionEnvironment`<sup>Optional</sup> <a name="executionEnvironment" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.executionEnvironment"></a>

```typescript
public readonly executionEnvironment: string;
```

- *Type:* string

The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#execution_environment CloudRunV2Job#execution_environment}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Number of retries allowed per Task, before marking this Task failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#max_retries CloudRunV2Job#max_retries}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Email address of the IAM service account associated with the Task of a Job.

The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#service_account CloudRunV2Job#service_account}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers.

This applies per attempt of a task, meaning each retry can run for the full timeout.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#timeout CloudRunV2Job#timeout}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.volumes"></a>

```typescript
public readonly volumes: IResolvable | CloudRunV2JobTemplateTemplateVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>[]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#volumes CloudRunV2Job#volumes}

---

##### `vpcAccess`<sup>Optional</sup> <a name="vpcAccess" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate.property.vpcAccess"></a>

```typescript
public readonly vpcAccess: CloudRunV2JobTemplateTemplateVpcAccess;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess">CloudRunV2JobTemplateTemplateVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#vpc_access CloudRunV2Job#vpc_access}

---

### CloudRunV2JobTemplateTemplateContainers <a name="CloudRunV2JobTemplateTemplateContainers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateContainers: cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.image">image</a></code> | <code>string</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.args">args</a></code> | <code>string[]</code> | Arguments to the entrypoint. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.command">command</a></code> | <code>string[]</code> | Entrypoint array. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.env">env</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a>[]</code> | env block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe">CloudRunV2JobTemplateTemplateContainersLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.name">name</a></code> | <code>string</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.ports">ports</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a>[]</code> | ports block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources">CloudRunV2JobTemplateTemplateContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe">CloudRunV2JobTemplateTemplateContainersStartupProbe</a></code> | startup_probe block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.volumeMounts">volumeMounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a>[]</code> | volume_mounts block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.workingDir">workingDir</a></code> | <code>string</code> | Container's working directory. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#image CloudRunV2Job#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#args CloudRunV2Job#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#command CloudRunV2Job#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.env"></a>

```typescript
public readonly env: IResolvable | CloudRunV2JobTemplateTemplateContainersEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#env CloudRunV2Job#env}

---

##### `livenessProbe`<sup>Optional</sup> <a name="livenessProbe" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.livenessProbe"></a>

```typescript
public readonly livenessProbe: CloudRunV2JobTemplateTemplateContainersLivenessProbe;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe">CloudRunV2JobTemplateTemplateContainersLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#liveness_probe CloudRunV2Job#liveness_probe}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#name CloudRunV2Job#name}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.ports"></a>

```typescript
public readonly ports: IResolvable | CloudRunV2JobTemplateTemplateContainersPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#ports CloudRunV2Job#ports}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.resources"></a>

```typescript
public readonly resources: CloudRunV2JobTemplateTemplateContainersResources;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources">CloudRunV2JobTemplateTemplateContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#resources CloudRunV2Job#resources}

---

##### `startupProbe`<sup>Optional</sup> <a name="startupProbe" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.startupProbe"></a>

```typescript
public readonly startupProbe: CloudRunV2JobTemplateTemplateContainersStartupProbe;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe">CloudRunV2JobTemplateTemplateContainersStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#startup_probe CloudRunV2Job#startup_probe}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: IResolvable | CloudRunV2JobTemplateTemplateContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a>[]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#volume_mounts CloudRunV2Job#volume_mounts}

---

##### `workingDir`<sup>Optional</sup> <a name="workingDir" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#working_dir CloudRunV2Job#working_dir}

---

### CloudRunV2JobTemplateTemplateContainersEnv <a name="CloudRunV2JobTemplateTemplateContainersEnv" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateContainersEnv: cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv.property.name">name</a></code> | <code>string</code> | Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv.property.value">value</a></code> | <code>string</code> | Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv.property.valueSource">valueSource</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource">CloudRunV2JobTemplateTemplateContainersEnvValueSource</a></code> | value_source block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#name CloudRunV2Job#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#value CloudRunV2Job#value}

---

##### `valueSource`<sup>Optional</sup> <a name="valueSource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv.property.valueSource"></a>

```typescript
public readonly valueSource: CloudRunV2JobTemplateTemplateContainersEnvValueSource;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource">CloudRunV2JobTemplateTemplateContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#value_source CloudRunV2Job#value_source}

---

### CloudRunV2JobTemplateTemplateContainersEnvValueSource <a name="CloudRunV2JobTemplateTemplateContainersEnvValueSource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateContainersEnvValueSource: cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `secretKeyRef`<sup>Optional</sup> <a name="secretKeyRef" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource.property.secretKeyRef"></a>

```typescript
public readonly secretKeyRef: CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#secret_key_ref CloudRunV2Job#secret_key_ref}

---

### CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef <a name="CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef: cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.property.secret">secret</a></code> | <code>string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.property.version">version</a></code> | <code>string</code> | The Cloud Secret Manager secret version. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#secret CloudRunV2Job#secret}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#version CloudRunV2Job#version}

---

### CloudRunV2JobTemplateTemplateContainersLivenessProbe <a name="CloudRunV2JobTemplateTemplateContainersLivenessProbe" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateContainersLivenessProbe: cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket">CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Number of seconds after which the probe times out. |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Minimum consecutive failures for the probe to be considered failed after having succeeded.

Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#failure_threshold CloudRunV2Job#failure_threshold}

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe.property.httpGet"></a>

```typescript
public readonly httpGet: CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#http_get CloudRunV2Job#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#initial_delay_seconds CloudRunV2Job#initial_delay_seconds}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

How often (in seconds) to perform the probe.

Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#period_seconds CloudRunV2Job#period_seconds}

---

##### `tcpSocket`<sup>Optional</sup> <a name="tcpSocket" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe.property.tcpSocket"></a>

```typescript
public readonly tcpSocket: CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket">CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#tcp_socket CloudRunV2Job#tcp_socket}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#timeout_seconds CloudRunV2Job#timeout_seconds}

---

### CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet <a name="CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet: cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders</a>[]</code> | http_headers block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet.property.path">path</a></code> | <code>string</code> | Path to access on the HTTP server. Defaults to '/'. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: IResolvable | CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders</a>[]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#http_headers CloudRunV2Job#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#path CloudRunV2Job#path}

---

### CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders <a name="CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders: cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>string</code> | The header field name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>string</code> | The header field value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#name CloudRunV2Job#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#value CloudRunV2Job#value}

---

### CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket <a name="CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket: cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket.property.port">port</a></code> | <code>number</code> | Port number to access on the container. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port number to access on the container.

Must be in the range 1 to 65535. If not specified, defaults to 8080.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#port CloudRunV2Job#port}

---

### CloudRunV2JobTemplateTemplateContainersPorts <a name="CloudRunV2JobTemplateTemplateContainersPorts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateContainersPorts: cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts.property.containerPort">containerPort</a></code> | <code>number</code> | Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts.property.name">name</a></code> | <code>string</code> | If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". |

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#container_port CloudRunV2Job#container_port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#name CloudRunV2Job#name}

---

### CloudRunV2JobTemplateTemplateContainersResources <a name="CloudRunV2JobTemplateTemplateContainersResources" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateContainersResources: cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | Only memory and CPU are supported. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Only memory and CPU are supported.

Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#limits CloudRunV2Job#limits}

---

### CloudRunV2JobTemplateTemplateContainersStartupProbe <a name="CloudRunV2JobTemplateTemplateContainersStartupProbe" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateContainersStartupProbe: cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket">CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Number of seconds after which the probe times out. |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Minimum consecutive failures for the probe to be considered failed after having succeeded.

Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#failure_threshold CloudRunV2Job#failure_threshold}

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe.property.httpGet"></a>

```typescript
public readonly httpGet: CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#http_get CloudRunV2Job#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#initial_delay_seconds CloudRunV2Job#initial_delay_seconds}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

How often (in seconds) to perform the probe.

Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#period_seconds CloudRunV2Job#period_seconds}

---

##### `tcpSocket`<sup>Optional</sup> <a name="tcpSocket" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe.property.tcpSocket"></a>

```typescript
public readonly tcpSocket: CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket">CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#tcp_socket CloudRunV2Job#tcp_socket}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#timeout_seconds CloudRunV2Job#timeout_seconds}

---

### CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet <a name="CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet: cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | http_headers block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet.property.path">path</a></code> | <code>string</code> | Path to access on the HTTP server. Defaults to '/'. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: IResolvable | CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#http_headers CloudRunV2Job#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#path CloudRunV2Job#path}

---

### CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders <a name="CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders: cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>string</code> | The header field name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>string</code> | The header field value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#name CloudRunV2Job#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#value CloudRunV2Job#value}

---

### CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket <a name="CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket: cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket.property.port">port</a></code> | <code>number</code> | Port number to access on the container. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port number to access on the container.

Must be in the range 1 to 65535. If not specified, defaults to 8080.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#port CloudRunV2Job#port}

---

### CloudRunV2JobTemplateTemplateContainersVolumeMounts <a name="CloudRunV2JobTemplateTemplateContainersVolumeMounts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateContainersVolumeMounts: cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts.property.mountPath">mountPath</a></code> | <code>string</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts.property.name">name</a></code> | <code>string</code> | This must match the Name of a Volume. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#mount_path CloudRunV2Job#mount_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#name CloudRunV2Job#name}

---

### CloudRunV2JobTemplateTemplateVolumes <a name="CloudRunV2JobTemplateTemplateVolumes" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateVolumes: cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes.property.name">name</a></code> | <code>string</code> | Volume's name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret">CloudRunV2JobTemplateTemplateVolumesSecret</a></code> | secret block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#name CloudRunV2Job#name}

---

##### `cloudSqlInstance`<sup>Optional</sup> <a name="cloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes.property.cloudSqlInstance"></a>

```typescript
public readonly cloudSqlInstance: CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#cloud_sql_instance CloudRunV2Job#cloud_sql_instance}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes.property.secret"></a>

```typescript
public readonly secret: CloudRunV2JobTemplateTemplateVolumesSecret;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret">CloudRunV2JobTemplateTemplateVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#secret CloudRunV2Job#secret}

---

### CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance <a name="CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateVolumesCloudSqlInstance: cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance.property.instances">instances</a></code> | <code>string[]</code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#instances CloudRunV2Job#instances}

---

### CloudRunV2JobTemplateTemplateVolumesSecret <a name="CloudRunV2JobTemplateTemplateVolumesSecret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateVolumesSecret: cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret.property.secret">secret</a></code> | <code>string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret.property.defaultMode">defaultMode</a></code> | <code>number</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret.property.items">items</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>[]</code> | items block. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#secret CloudRunV2Job#secret}

---

##### `defaultMode`<sup>Optional</sup> <a name="defaultMode" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret.property.defaultMode"></a>

```typescript
public readonly defaultMode: number;
```

- *Type:* number

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#default_mode CloudRunV2Job#default_mode}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret.property.items"></a>

```typescript
public readonly items: IResolvable | CloudRunV2JobTemplateTemplateVolumesSecretItems[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>[]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#items CloudRunV2Job#items}

---

### CloudRunV2JobTemplateTemplateVolumesSecretItems <a name="CloudRunV2JobTemplateTemplateVolumesSecretItems" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateVolumesSecretItems: cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems.property.mode">mode</a></code> | <code>number</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems.property.path">path</a></code> | <code>string</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems.property.version">version</a></code> | <code>string</code> | The Cloud Secret Manager secret version. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#mode CloudRunV2Job#mode}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#path CloudRunV2Job#path}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#version CloudRunV2Job#version}

---

### CloudRunV2JobTemplateTemplateVpcAccess <a name="CloudRunV2JobTemplateTemplateVpcAccess" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTemplateTemplateVpcAccess: cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess.property.connector">connector</a></code> | <code>string</code> | VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess.property.egress">egress</a></code> | <code>string</code> | Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |

---

##### `connector`<sup>Optional</sup> <a name="connector" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess.property.connector"></a>

```typescript
public readonly connector: string;
```

- *Type:* string

VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#connector CloudRunV2Job#connector}

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess.property.egress"></a>

```typescript
public readonly egress: string;
```

- *Type:* string

Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#egress CloudRunV2Job#egress}

---

### CloudRunV2JobTerminalCondition <a name="CloudRunV2JobTerminalCondition" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalCondition.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTerminalCondition: cloudRunV2Job.CloudRunV2JobTerminalCondition = { ... }
```


### CloudRunV2JobTimeouts <a name="CloudRunV2JobTimeouts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

const cloudRunV2JobTimeouts: cloudRunV2Job.CloudRunV2JobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#create CloudRunV2Job#create}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#delete CloudRunV2Job#delete}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#update CloudRunV2Job#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#create CloudRunV2Job#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#delete CloudRunV2Job#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/cloud_run_v2_job#update CloudRunV2Job#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudRunV2JobBinaryAuthorizationOutputReference <a name="CloudRunV2JobBinaryAuthorizationOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.resetBreakglassJustification">resetBreakglassJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.resetUseDefault">resetUseDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBreakglassJustification` <a name="resetBreakglassJustification" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.resetBreakglassJustification"></a>

```typescript
public resetBreakglassJustification(): void
```

##### `resetUseDefault` <a name="resetUseDefault" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.resetUseDefault"></a>

```typescript
public resetUseDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.breakglassJustificationInput">breakglassJustificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.useDefaultInput">useDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.breakglassJustification">breakglassJustification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.useDefault">useDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization">CloudRunV2JobBinaryAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `breakglassJustificationInput`<sup>Optional</sup> <a name="breakglassJustificationInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.breakglassJustificationInput"></a>

```typescript
public readonly breakglassJustificationInput: string;
```

- *Type:* string

---

##### `useDefaultInput`<sup>Optional</sup> <a name="useDefaultInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.useDefaultInput"></a>

```typescript
public readonly useDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `breakglassJustification`<sup>Required</sup> <a name="breakglassJustification" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.breakglassJustification"></a>

```typescript
public readonly breakglassJustification: string;
```

- *Type:* string

---

##### `useDefault`<sup>Required</sup> <a name="useDefault" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.useDefault"></a>

```typescript
public readonly useDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobBinaryAuthorization">CloudRunV2JobBinaryAuthorization</a>

---


### CloudRunV2JobConditionsList <a name="CloudRunV2JobConditionsList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.get"></a>

```typescript
public get(index: number): CloudRunV2JobConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudRunV2JobConditionsOutputReference <a name="CloudRunV2JobConditionsOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.executionReason">executionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.revisionReason">revisionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditions">CloudRunV2JobConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionReason`<sup>Required</sup> <a name="executionReason" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.executionReason"></a>

```typescript
public readonly executionReason: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `revisionReason`<sup>Required</sup> <a name="revisionReason" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.revisionReason"></a>

```typescript
public readonly revisionReason: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobConditions;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobConditions">CloudRunV2JobConditions</a>

---


### CloudRunV2JobLatestCreatedExecutionList <a name="CloudRunV2JobLatestCreatedExecutionList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.get"></a>

```typescript
public get(index: number): CloudRunV2JobLatestCreatedExecutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudRunV2JobLatestCreatedExecutionOutputReference <a name="CloudRunV2JobLatestCreatedExecutionOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.completionTime">completionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecution">CloudRunV2JobLatestCreatedExecution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `completionTime`<sup>Required</sup> <a name="completionTime" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.completionTime"></a>

```typescript
public readonly completionTime: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecutionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobLatestCreatedExecution;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobLatestCreatedExecution">CloudRunV2JobLatestCreatedExecution</a>

---


### CloudRunV2JobTemplateOutputReference <a name="CloudRunV2JobTemplateOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.putTemplate">putTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resetParallelism">resetParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resetTaskCount">resetTaskCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTemplate` <a name="putTemplate" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.putTemplate"></a>

```typescript
public putTemplate(value: CloudRunV2JobTemplateTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate">CloudRunV2JobTemplateTemplate</a>

---

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetParallelism` <a name="resetParallelism" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resetParallelism"></a>

```typescript
public resetParallelism(): void
```

##### `resetTaskCount` <a name="resetTaskCount" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.resetTaskCount"></a>

```typescript
public resetTaskCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.template">template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference">CloudRunV2JobTemplateTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.parallelismInput">parallelismInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.taskCountInput">taskCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.templateInput">templateInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate">CloudRunV2JobTemplateTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.parallelism">parallelism</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.taskCount">taskCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate">CloudRunV2JobTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.template"></a>

```typescript
public readonly template: CloudRunV2JobTemplateTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference">CloudRunV2JobTemplateTemplateOutputReference</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `parallelismInput`<sup>Optional</sup> <a name="parallelismInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.parallelismInput"></a>

```typescript
public readonly parallelismInput: number;
```

- *Type:* number

---

##### `taskCountInput`<sup>Optional</sup> <a name="taskCountInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.taskCountInput"></a>

```typescript
public readonly taskCountInput: number;
```

- *Type:* number

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.templateInput"></a>

```typescript
public readonly templateInput: CloudRunV2JobTemplateTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate">CloudRunV2JobTemplateTemplate</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

---

##### `taskCount`<sup>Required</sup> <a name="taskCount" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.taskCount"></a>

```typescript
public readonly taskCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplate">CloudRunV2JobTemplate</a>

---


### CloudRunV2JobTemplateTemplateContainersEnvList <a name="CloudRunV2JobTemplateTemplateContainersEnvList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.get"></a>

```typescript
public get(index: number): CloudRunV2JobTemplateTemplateContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2JobTemplateTemplateContainersEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a>[]

---


### CloudRunV2JobTemplateTemplateContainersEnvOutputReference <a name="CloudRunV2JobTemplateTemplateContainersEnvOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.putValueSource">putValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.resetValueSource">resetValueSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueSource` <a name="putValueSource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.putValueSource"></a>

```typescript
public putValueSource(value: CloudRunV2JobTemplateTemplateContainersEnvValueSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.putValueSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource">CloudRunV2JobTemplateTemplateContainersEnvValueSource</a>

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueSource` <a name="resetValueSource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.resetValueSource"></a>

```typescript
public resetValueSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueSource">valueSource</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference">CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueSourceInput">valueSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource">CloudRunV2JobTemplateTemplateContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueSource"></a>

```typescript
public readonly valueSource: CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference">CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valueSourceInput`<sup>Optional</sup> <a name="valueSourceInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueSourceInput"></a>

```typescript
public readonly valueSourceInput: CloudRunV2JobTemplateTemplateContainersEnvValueSource;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource">CloudRunV2JobTemplateTemplateContainersEnvValueSource</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateContainersEnv | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a> | cdktf.IResolvable

---


### CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference <a name="CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef">putSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef">resetSecretKeyRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretKeyRef` <a name="putSecretKeyRef" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```typescript
public putSecretKeyRef(value: CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `resetSecretKeyRef` <a name="resetSecretKeyRef" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```typescript
public resetSecretKeyRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput">secretKeyRefInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource">CloudRunV2JobTemplateTemplateContainersEnvValueSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretKeyRef`<sup>Required</sup> <a name="secretKeyRef" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```typescript
public readonly secretKeyRef: CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `secretKeyRefInput`<sup>Optional</sup> <a name="secretKeyRefInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```typescript
public readonly secretKeyRefInput: CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateContainersEnvValueSource;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSource">CloudRunV2JobTemplateTemplateContainersEnvValueSource</a>

---


### CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference <a name="CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a>

---


### CloudRunV2JobTemplateTemplateContainersList <a name="CloudRunV2JobTemplateTemplateContainersList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.get"></a>

```typescript
public get(index: number): CloudRunV2JobTemplateTemplateContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2JobTemplateTemplateContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>[]

---


### CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList <a name="CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```typescript
public get(index: number): CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders</a>[]

---


### CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders</a> | cdktf.IResolvable

---


### CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference <a name="CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders">putHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpHeaders` <a name="putHttpHeaders" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders"></a>

```typescript
public putHttpHeaders(value: IResolvable | CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders</a>[]

---

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: IResolvable | CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders</a>[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet</a>

---


### CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference <a name="CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.putTcpSocket">putTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.resetTcpSocket">resetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpGet` <a name="putHttpGet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.putHttpGet"></a>

```typescript
public putHttpGet(value: CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet</a>

---

##### `putTcpSocket` <a name="putTcpSocket" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.putTcpSocket"></a>

```typescript
public putTcpSocket(value: CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket">CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket</a>

---

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.resetHttpGet"></a>

```typescript
public resetHttpGet(): void
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```typescript
public resetInitialDelaySeconds(): void
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.resetPeriodSeconds"></a>

```typescript
public resetPeriodSeconds(): void
```

##### `resetTcpSocket` <a name="resetTcpSocket" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.resetTcpSocket"></a>

```typescript
public resetTcpSocket(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference">CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.tcpSocketInput">tcpSocketInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket">CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe">CloudRunV2JobTemplateTemplateContainersLivenessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.httpGet"></a>

```typescript
public readonly httpGet: CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference</a>

---

##### `tcpSocket`<sup>Required</sup> <a name="tcpSocket" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.tcpSocket"></a>

```typescript
public readonly tcpSocket: CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference">CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference</a>

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.httpGetInput"></a>

```typescript
public readonly httpGetInput: CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet">CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet</a>

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```typescript
public readonly initialDelaySecondsInput: number;
```

- *Type:* number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.periodSecondsInput"></a>

```typescript
public readonly periodSecondsInput: number;
```

- *Type:* number

---

##### `tcpSocketInput`<sup>Optional</sup> <a name="tcpSocketInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.tcpSocketInput"></a>

```typescript
public readonly tcpSocketInput: CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket">CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket</a>

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateContainersLivenessProbe;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe">CloudRunV2JobTemplateTemplateContainersLivenessProbe</a>

---


### CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference <a name="CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket">CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket">CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket</a>

---


### CloudRunV2JobTemplateTemplateContainersOutputReference <a name="CloudRunV2JobTemplateTemplateContainersOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putLivenessProbe">putLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putStartupProbe">putStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetLivenessProbe">resetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetStartupProbe">resetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetWorkingDir">resetWorkingDir</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putEnv"></a>

```typescript
public putEnv(value: IResolvable | CloudRunV2JobTemplateTemplateContainersEnv[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a>[]

---

##### `putLivenessProbe` <a name="putLivenessProbe" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putLivenessProbe"></a>

```typescript
public putLivenessProbe(value: CloudRunV2JobTemplateTemplateContainersLivenessProbe): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe">CloudRunV2JobTemplateTemplateContainersLivenessProbe</a>

---

##### `putPorts` <a name="putPorts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putPorts"></a>

```typescript
public putPorts(value: IResolvable | CloudRunV2JobTemplateTemplateContainersPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a>[]

---

##### `putResources` <a name="putResources" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putResources"></a>

```typescript
public putResources(value: CloudRunV2JobTemplateTemplateContainersResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources">CloudRunV2JobTemplateTemplateContainersResources</a>

---

##### `putStartupProbe` <a name="putStartupProbe" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putStartupProbe"></a>

```typescript
public putStartupProbe(value: CloudRunV2JobTemplateTemplateContainersStartupProbe): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe">CloudRunV2JobTemplateTemplateContainersStartupProbe</a>

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putVolumeMounts"></a>

```typescript
public putVolumeMounts(value: IResolvable | CloudRunV2JobTemplateTemplateContainersVolumeMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetLivenessProbe` <a name="resetLivenessProbe" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetLivenessProbe"></a>

```typescript
public resetLivenessProbe(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetStartupProbe` <a name="resetStartupProbe" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetStartupProbe"></a>

```typescript
public resetStartupProbe(): void
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetVolumeMounts"></a>

```typescript
public resetVolumeMounts(): void
```

##### `resetWorkingDir` <a name="resetWorkingDir" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.resetWorkingDir"></a>

```typescript
public resetWorkingDir(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList">CloudRunV2JobTemplateTemplateContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference">CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList">CloudRunV2JobTemplateTemplateContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference">CloudRunV2JobTemplateTemplateContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference">CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList">CloudRunV2JobTemplateTemplateContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.envInput">envInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.livenessProbeInput">livenessProbeInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe">CloudRunV2JobTemplateTemplateContainersLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.portsInput">portsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources">CloudRunV2JobTemplateTemplateContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.startupProbeInput">startupProbeInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe">CloudRunV2JobTemplateTemplateContainersStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.workingDirInput">workingDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.workingDir">workingDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.env"></a>

```typescript
public readonly env: CloudRunV2JobTemplateTemplateContainersEnvList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnvList">CloudRunV2JobTemplateTemplateContainersEnvList</a>

---

##### `livenessProbe`<sup>Required</sup> <a name="livenessProbe" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.livenessProbe"></a>

```typescript
public readonly livenessProbe: CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference">CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.ports"></a>

```typescript
public readonly ports: CloudRunV2JobTemplateTemplateContainersPortsList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList">CloudRunV2JobTemplateTemplateContainersPortsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.resources"></a>

```typescript
public readonly resources: CloudRunV2JobTemplateTemplateContainersResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference">CloudRunV2JobTemplateTemplateContainersResourcesOutputReference</a>

---

##### `startupProbe`<sup>Required</sup> <a name="startupProbe" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.startupProbe"></a>

```typescript
public readonly startupProbe: CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference">CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: CloudRunV2JobTemplateTemplateContainersVolumeMountsList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList">CloudRunV2JobTemplateTemplateContainersVolumeMountsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.envInput"></a>

```typescript
public readonly envInput: IResolvable | CloudRunV2JobTemplateTemplateContainersEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersEnv">CloudRunV2JobTemplateTemplateContainersEnv</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `livenessProbeInput`<sup>Optional</sup> <a name="livenessProbeInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.livenessProbeInput"></a>

```typescript
public readonly livenessProbeInput: CloudRunV2JobTemplateTemplateContainersLivenessProbe;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersLivenessProbe">CloudRunV2JobTemplateTemplateContainersLivenessProbe</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: IResolvable | CloudRunV2JobTemplateTemplateContainersPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a>[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: CloudRunV2JobTemplateTemplateContainersResources;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources">CloudRunV2JobTemplateTemplateContainersResources</a>

---

##### `startupProbeInput`<sup>Optional</sup> <a name="startupProbeInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.startupProbeInput"></a>

```typescript
public readonly startupProbeInput: CloudRunV2JobTemplateTemplateContainersStartupProbe;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe">CloudRunV2JobTemplateTemplateContainersStartupProbe</a>

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.volumeMountsInput"></a>

```typescript
public readonly volumeMountsInput: IResolvable | CloudRunV2JobTemplateTemplateContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a>[]

---

##### `workingDirInput`<sup>Optional</sup> <a name="workingDirInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.workingDirInput"></a>

```typescript
public readonly workingDirInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateContainers | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a> | cdktf.IResolvable

---


### CloudRunV2JobTemplateTemplateContainersPortsList <a name="CloudRunV2JobTemplateTemplateContainersPortsList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.get"></a>

```typescript
public get(index: number): CloudRunV2JobTemplateTemplateContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2JobTemplateTemplateContainersPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a>[]

---


### CloudRunV2JobTemplateTemplateContainersPortsOutputReference <a name="CloudRunV2JobTemplateTemplateContainersPortsOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.resetContainerPort"></a>

```typescript
public resetContainerPort(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.containerPortInput"></a>

```typescript
public readonly containerPortInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateContainersPorts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersPorts">CloudRunV2JobTemplateTemplateContainersPorts</a> | cdktf.IResolvable

---


### CloudRunV2JobTemplateTemplateContainersResourcesOutputReference <a name="CloudRunV2JobTemplateTemplateContainersResourcesOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resetLimits">resetLimits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resetLimits"></a>

```typescript
public resetLimits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.limitsInput">limitsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources">CloudRunV2JobTemplateTemplateContainersResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.limitsInput"></a>

```typescript
public readonly limitsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateContainersResources;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersResources">CloudRunV2JobTemplateTemplateContainersResources</a>

---


### CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList <a name="CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```typescript
public get(index: number): CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]

---


### CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a> | cdktf.IResolvable

---


### CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference <a name="CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders">putHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpHeaders` <a name="putHttpHeaders" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders"></a>

```typescript
public putHttpHeaders(value: IResolvable | CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]

---

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: IResolvable | CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet</a>

---


### CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference <a name="CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.putTcpSocket">putTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetTcpSocket">resetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpGet` <a name="putHttpGet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.putHttpGet"></a>

```typescript
public putHttpGet(value: CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet</a>

---

##### `putTcpSocket` <a name="putTcpSocket" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.putTcpSocket"></a>

```typescript
public putTcpSocket(value: CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket">CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket</a>

---

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetHttpGet"></a>

```typescript
public resetHttpGet(): void
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetInitialDelaySeconds"></a>

```typescript
public resetInitialDelaySeconds(): void
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetPeriodSeconds"></a>

```typescript
public resetPeriodSeconds(): void
```

##### `resetTcpSocket` <a name="resetTcpSocket" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetTcpSocket"></a>

```typescript
public resetTcpSocket(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference">CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.tcpSocketInput">tcpSocketInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket">CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe">CloudRunV2JobTemplateTemplateContainersStartupProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.httpGet"></a>

```typescript
public readonly httpGet: CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference</a>

---

##### `tcpSocket`<sup>Required</sup> <a name="tcpSocket" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.tcpSocket"></a>

```typescript
public readonly tcpSocket: CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference">CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference</a>

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.httpGetInput"></a>

```typescript
public readonly httpGetInput: CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet">CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet</a>

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.initialDelaySecondsInput"></a>

```typescript
public readonly initialDelaySecondsInput: number;
```

- *Type:* number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.periodSecondsInput"></a>

```typescript
public readonly periodSecondsInput: number;
```

- *Type:* number

---

##### `tcpSocketInput`<sup>Optional</sup> <a name="tcpSocketInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.tcpSocketInput"></a>

```typescript
public readonly tcpSocketInput: CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket">CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket</a>

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateContainersStartupProbe;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbe">CloudRunV2JobTemplateTemplateContainersStartupProbe</a>

---


### CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference <a name="CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket">CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket">CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket</a>

---


### CloudRunV2JobTemplateTemplateContainersVolumeMountsList <a name="CloudRunV2JobTemplateTemplateContainersVolumeMountsList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.get"></a>

```typescript
public get(index: number): CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2JobTemplateTemplateContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a>[]

---


### CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference <a name="CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateContainersVolumeMounts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersVolumeMounts">CloudRunV2JobTemplateTemplateContainersVolumeMounts</a> | cdktf.IResolvable

---


### CloudRunV2JobTemplateTemplateOutputReference <a name="CloudRunV2JobTemplateTemplateOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putContainers">putContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putVpcAccess">putVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetContainers">resetContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetExecutionEnvironment">resetExecutionEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetVpcAccess">resetVpcAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainers` <a name="putContainers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putContainers"></a>

```typescript
public putContainers(value: IResolvable | CloudRunV2JobTemplateTemplateContainers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putContainers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>[]

---

##### `putVolumes` <a name="putVolumes" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putVolumes"></a>

```typescript
public putVolumes(value: IResolvable | CloudRunV2JobTemplateTemplateVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putVolumes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>[]

---

##### `putVpcAccess` <a name="putVpcAccess" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putVpcAccess"></a>

```typescript
public putVpcAccess(value: CloudRunV2JobTemplateTemplateVpcAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.putVpcAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess">CloudRunV2JobTemplateTemplateVpcAccess</a>

---

##### `resetContainers` <a name="resetContainers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetContainers"></a>

```typescript
public resetContainers(): void
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetExecutionEnvironment` <a name="resetExecutionEnvironment" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetExecutionEnvironment"></a>

```typescript
public resetExecutionEnvironment(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetVolumes"></a>

```typescript
public resetVolumes(): void
```

##### `resetVpcAccess` <a name="resetVpcAccess" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.resetVpcAccess"></a>

```typescript
public resetVpcAccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList">CloudRunV2JobTemplateTemplateContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList">CloudRunV2JobTemplateTemplateVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference">CloudRunV2JobTemplateTemplateVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.containersInput">containersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.executionEnvironmentInput">executionEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.volumesInput">volumesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.vpcAccessInput">vpcAccessInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess">CloudRunV2JobTemplateTemplateVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.executionEnvironment">executionEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate">CloudRunV2JobTemplateTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.containers"></a>

```typescript
public readonly containers: CloudRunV2JobTemplateTemplateContainersList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainersList">CloudRunV2JobTemplateTemplateContainersList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.volumes"></a>

```typescript
public readonly volumes: CloudRunV2JobTemplateTemplateVolumesList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList">CloudRunV2JobTemplateTemplateVolumesList</a>

---

##### `vpcAccess`<sup>Required</sup> <a name="vpcAccess" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.vpcAccess"></a>

```typescript
public readonly vpcAccess: CloudRunV2JobTemplateTemplateVpcAccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference">CloudRunV2JobTemplateTemplateVpcAccessOutputReference</a>

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.containersInput"></a>

```typescript
public readonly containersInput: IResolvable | CloudRunV2JobTemplateTemplateContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateContainers">CloudRunV2JobTemplateTemplateContainers</a>[]

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: string;
```

- *Type:* string

---

##### `executionEnvironmentInput`<sup>Optional</sup> <a name="executionEnvironmentInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.executionEnvironmentInput"></a>

```typescript
public readonly executionEnvironmentInput: string;
```

- *Type:* string

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.volumesInput"></a>

```typescript
public readonly volumesInput: IResolvable | CloudRunV2JobTemplateTemplateVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>[]

---

##### `vpcAccessInput`<sup>Optional</sup> <a name="vpcAccessInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.vpcAccessInput"></a>

```typescript
public readonly vpcAccessInput: CloudRunV2JobTemplateTemplateVpcAccess;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess">CloudRunV2JobTemplateTemplateVpcAccess</a>

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

---

##### `executionEnvironment`<sup>Required</sup> <a name="executionEnvironment" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.executionEnvironment"></a>

```typescript
public readonly executionEnvironment: string;
```

- *Type:* string

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplate">CloudRunV2JobTemplateTemplate</a>

---


### CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference <a name="CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resetInstances">resetInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstances` <a name="resetInstances" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```typescript
public resetInstances(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput">instancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.instances">instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```typescript
public readonly instancesInput: string[];
```

- *Type:* string[]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a>

---


### CloudRunV2JobTemplateTemplateVolumesList <a name="CloudRunV2JobTemplateTemplateVolumesList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.get"></a>

```typescript
public get(index: number): CloudRunV2JobTemplateTemplateVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2JobTemplateTemplateVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a>[]

---


### CloudRunV2JobTemplateTemplateVolumesOutputReference <a name="CloudRunV2JobTemplateTemplateVolumesOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.putCloudSqlInstance">putCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.resetCloudSqlInstance">resetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudSqlInstance` <a name="putCloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.putCloudSqlInstance"></a>

```typescript
public putCloudSqlInstance(value: CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.putCloudSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a>

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.putSecret"></a>

```typescript
public putSecret(value: CloudRunV2JobTemplateTemplateVolumesSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret">CloudRunV2JobTemplateTemplateVolumesSecret</a>

---

##### `resetCloudSqlInstance` <a name="resetCloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.resetCloudSqlInstance"></a>

```typescript
public resetCloudSqlInstance(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference">CloudRunV2JobTemplateTemplateVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.cloudSqlInstanceInput">cloudSqlInstanceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.secretInput">secretInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret">CloudRunV2JobTemplateTemplateVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudSqlInstance`<sup>Required</sup> <a name="cloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.cloudSqlInstance"></a>

```typescript
public readonly cloudSqlInstance: CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.secret"></a>

```typescript
public readonly secret: CloudRunV2JobTemplateTemplateVolumesSecretOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference">CloudRunV2JobTemplateTemplateVolumesSecretOutputReference</a>

---

##### `cloudSqlInstanceInput`<sup>Optional</sup> <a name="cloudSqlInstanceInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```typescript
public readonly cloudSqlInstanceInput: CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: CloudRunV2JobTemplateTemplateVolumesSecret;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret">CloudRunV2JobTemplateTemplateVolumesSecret</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateVolumes | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumes">CloudRunV2JobTemplateTemplateVolumes</a> | cdktf.IResolvable

---


### CloudRunV2JobTemplateTemplateVolumesSecretItemsList <a name="CloudRunV2JobTemplateTemplateVolumesSecretItemsList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.get"></a>

```typescript
public get(index: number): CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2JobTemplateTemplateVolumesSecretItems[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>[]

---


### CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference <a name="CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.modeInput">modeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.mode">mode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateVolumesSecretItems | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a> | cdktf.IResolvable

---


### CloudRunV2JobTemplateTemplateVolumesSecretOutputReference <a name="CloudRunV2JobTemplateTemplateVolumesSecretOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.putItems">putItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resetDefaultMode">resetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.putItems"></a>

```typescript
public putItems(value: IResolvable | CloudRunV2JobTemplateTemplateVolumesSecretItems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>[]

---

##### `resetDefaultMode` <a name="resetDefaultMode" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resetDefaultMode"></a>

```typescript
public resetDefaultMode(): void
```

##### `resetItems` <a name="resetItems" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resetItems"></a>

```typescript
public resetItems(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.items">items</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList">CloudRunV2JobTemplateTemplateVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.defaultModeInput">defaultModeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.itemsInput">itemsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.defaultMode">defaultMode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret">CloudRunV2JobTemplateTemplateVolumesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.items"></a>

```typescript
public readonly items: CloudRunV2JobTemplateTemplateVolumesSecretItemsList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItemsList">CloudRunV2JobTemplateTemplateVolumesSecretItemsList</a>

---

##### `defaultModeInput`<sup>Optional</sup> <a name="defaultModeInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.defaultModeInput"></a>

```typescript
public readonly defaultModeInput: number;
```

- *Type:* number

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: IResolvable | CloudRunV2JobTemplateTemplateVolumesSecretItems[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretItems">CloudRunV2JobTemplateTemplateVolumesSecretItems</a>[]

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `defaultMode`<sup>Required</sup> <a name="defaultMode" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.defaultMode"></a>

```typescript
public readonly defaultMode: number;
```

- *Type:* number

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateVolumesSecret;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVolumesSecret">CloudRunV2JobTemplateTemplateVolumesSecret</a>

---


### CloudRunV2JobTemplateTemplateVpcAccessOutputReference <a name="CloudRunV2JobTemplateTemplateVpcAccessOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetConnector">resetConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetEgress">resetEgress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnector` <a name="resetConnector" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetConnector"></a>

```typescript
public resetConnector(): void
```

##### `resetEgress` <a name="resetEgress" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetEgress"></a>

```typescript
public resetEgress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.connectorInput">connectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.egressInput">egressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.connector">connector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.egress">egress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess">CloudRunV2JobTemplateTemplateVpcAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectorInput`<sup>Optional</sup> <a name="connectorInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.connectorInput"></a>

```typescript
public readonly connectorInput: string;
```

- *Type:* string

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.egressInput"></a>

```typescript
public readonly egressInput: string;
```

- *Type:* string

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.connector"></a>

```typescript
public readonly connector: string;
```

- *Type:* string

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.egress"></a>

```typescript
public readonly egress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTemplateTemplateVpcAccess;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTemplateTemplateVpcAccess">CloudRunV2JobTemplateTemplateVpcAccess</a>

---


### CloudRunV2JobTerminalConditionList <a name="CloudRunV2JobTerminalConditionList" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTerminalConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.get"></a>

```typescript
public get(index: number): CloudRunV2JobTerminalConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudRunV2JobTerminalConditionOutputReference <a name="CloudRunV2JobTerminalConditionOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.executionReason">executionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.revisionReason">revisionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalCondition">CloudRunV2JobTerminalCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionReason`<sup>Required</sup> <a name="executionReason" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.executionReason"></a>

```typescript
public readonly executionReason: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `revisionReason`<sup>Required</sup> <a name="revisionReason" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.revisionReason"></a>

```typescript
public readonly revisionReason: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTerminalCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTerminalCondition">CloudRunV2JobTerminalCondition</a>

---


### CloudRunV2JobTimeoutsOutputReference <a name="CloudRunV2JobTimeoutsOutputReference" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Job } from '@cdktf/provider-google'

new cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts">CloudRunV2JobTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2JobTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Job.CloudRunV2JobTimeouts">CloudRunV2JobTimeouts</a> | cdktf.IResolvable

---



