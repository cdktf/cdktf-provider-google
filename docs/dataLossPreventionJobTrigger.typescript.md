# `google_data_loss_prevention_job_trigger`

Refer to the Terraform Registory for docs: [`google_data_loss_prevention_job_trigger`](https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger).

# `dataLossPreventionJobTrigger` Submodule <a name="`dataLossPreventionJobTrigger` Submodule" id="@cdktf/provider-google.dataLossPreventionJobTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLossPreventionJobTrigger <a name="DataLossPreventionJobTrigger" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger google_data_loss_prevention_job_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTrigger(scope: Construct, id: string, config: DataLossPreventionJobTriggerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig">DataLossPreventionJobTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig">DataLossPreventionJobTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.putInspectJob">putInspectJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.putTriggers">putTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.resetInspectJob">resetInspectJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putInspectJob` <a name="putInspectJob" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.putInspectJob"></a>

```typescript
public putInspectJob(value: DataLossPreventionJobTriggerInspectJob): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.putInspectJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJob">DataLossPreventionJobTriggerInspectJob</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.putTimeouts"></a>

```typescript
public putTimeouts(value: DataLossPreventionJobTriggerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeouts">DataLossPreventionJobTriggerTimeouts</a>

---

##### `putTriggers` <a name="putTriggers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.putTriggers"></a>

```typescript
public putTriggers(value: IResolvable | DataLossPreventionJobTriggerTriggers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.putTriggers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggers">DataLossPreventionJobTriggerTriggers</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInspectJob` <a name="resetInspectJob" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.resetInspectJob"></a>

```typescript
public resetInspectJob(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.isConstruct"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.isTerraformElement"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.isTerraformResource"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.inspectJob">inspectJob</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference">DataLossPreventionJobTriggerInspectJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.lastRunTime">lastRunTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference">DataLossPreventionJobTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.triggers">triggers</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList">DataLossPreventionJobTriggerTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.inspectJobInput">inspectJobInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJob">DataLossPreventionJobTriggerInspectJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeouts">DataLossPreventionJobTriggerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.triggersInput">triggersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggers">DataLossPreventionJobTriggerTriggers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `inspectJob`<sup>Required</sup> <a name="inspectJob" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.inspectJob"></a>

```typescript
public readonly inspectJob: DataLossPreventionJobTriggerInspectJobOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference">DataLossPreventionJobTriggerInspectJobOutputReference</a>

---

##### `lastRunTime`<sup>Required</sup> <a name="lastRunTime" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.lastRunTime"></a>

```typescript
public readonly lastRunTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.timeouts"></a>

```typescript
public readonly timeouts: DataLossPreventionJobTriggerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference">DataLossPreventionJobTriggerTimeoutsOutputReference</a>

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.triggers"></a>

```typescript
public readonly triggers: DataLossPreventionJobTriggerTriggersList;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList">DataLossPreventionJobTriggerTriggersList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inspectJobInput`<sup>Optional</sup> <a name="inspectJobInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.inspectJobInput"></a>

```typescript
public readonly inspectJobInput: DataLossPreventionJobTriggerInspectJob;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJob">DataLossPreventionJobTriggerInspectJob</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataLossPreventionJobTriggerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeouts">DataLossPreventionJobTriggerTimeouts</a> | cdktf.IResolvable

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.triggersInput"></a>

```typescript
public readonly triggersInput: IResolvable | DataLossPreventionJobTriggerTriggers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggers">DataLossPreventionJobTriggerTriggers</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTrigger.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLossPreventionJobTriggerConfig <a name="DataLossPreventionJobTriggerConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerConfig: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the trigger, either in the format 'projects/{{project}}' or 'projects/{{project}}/locations/{{location}}'. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.triggers">triggers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggers">DataLossPreventionJobTriggerTriggers</a>[]</code> | triggers block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.description">description</a></code> | <code>string</code> | A description of the job trigger. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.displayName">displayName</a></code> | <code>string</code> | User set display name of the job trigger. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#id DataLossPreventionJobTrigger#id}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.inspectJob">inspectJob</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJob">DataLossPreventionJobTriggerInspectJob</a></code> | inspect_job block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.status">status</a></code> | <code>string</code> | Whether the trigger is currently active. Default value: "HEALTHY" Possible values: ["PAUSED", "HEALTHY", "CANCELLED"]. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeouts">DataLossPreventionJobTriggerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the trigger, either in the format 'projects/{{project}}' or 'projects/{{project}}/locations/{{location}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#parent DataLossPreventionJobTrigger#parent}

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.triggers"></a>

```typescript
public readonly triggers: IResolvable | DataLossPreventionJobTriggerTriggers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggers">DataLossPreventionJobTriggerTriggers</a>[]

triggers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#triggers DataLossPreventionJobTrigger#triggers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the job trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#description DataLossPreventionJobTrigger#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User set display name of the job trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#display_name DataLossPreventionJobTrigger#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#id DataLossPreventionJobTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inspectJob`<sup>Optional</sup> <a name="inspectJob" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.inspectJob"></a>

```typescript
public readonly inspectJob: DataLossPreventionJobTriggerInspectJob;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJob">DataLossPreventionJobTriggerInspectJob</a>

inspect_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#inspect_job DataLossPreventionJobTrigger#inspect_job}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Whether the trigger is currently active. Default value: "HEALTHY" Possible values: ["PAUSED", "HEALTHY", "CANCELLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#status DataLossPreventionJobTrigger#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataLossPreventionJobTriggerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeouts">DataLossPreventionJobTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#timeouts DataLossPreventionJobTrigger#timeouts}

---

### DataLossPreventionJobTriggerInspectJob <a name="DataLossPreventionJobTriggerInspectJob" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJob.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJob: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJob.property.actions">actions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions">DataLossPreventionJobTriggerInspectJobActions</a>[]</code> | actions block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJob.property.inspectTemplateName">inspectTemplateName</a></code> | <code>string</code> | The name of the template to run when this job is triggered. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJob.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig">DataLossPreventionJobTriggerInspectJobStorageConfig</a></code> | storage_config block. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJob.property.actions"></a>

```typescript
public readonly actions: IResolvable | DataLossPreventionJobTriggerInspectJobActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions">DataLossPreventionJobTriggerInspectJobActions</a>[]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#actions DataLossPreventionJobTrigger#actions}

---

##### `inspectTemplateName`<sup>Required</sup> <a name="inspectTemplateName" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJob.property.inspectTemplateName"></a>

```typescript
public readonly inspectTemplateName: string;
```

- *Type:* string

The name of the template to run when this job is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#inspect_template_name DataLossPreventionJobTrigger#inspect_template_name}

---

##### `storageConfig`<sup>Required</sup> <a name="storageConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJob.property.storageConfig"></a>

```typescript
public readonly storageConfig: DataLossPreventionJobTriggerInspectJobStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig">DataLossPreventionJobTriggerInspectJobStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#storage_config DataLossPreventionJobTrigger#storage_config}

---

### DataLossPreventionJobTriggerInspectJobActions <a name="DataLossPreventionJobTriggerInspectJobActions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobActions: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions.property.deidentify">deidentify</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify">DataLossPreventionJobTriggerInspectJobActionsDeidentify</a></code> | deidentify block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions.property.jobNotificationEmails">jobNotificationEmails</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails">DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails</a></code> | job_notification_emails block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions.property.publishFindingsToCloudDataCatalog">publishFindingsToCloudDataCatalog</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog">DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog</a></code> | publish_findings_to_cloud_data_catalog block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions.property.publishSummaryToCscc">publishSummaryToCscc</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc">DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc</a></code> | publish_summary_to_cscc block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions.property.pubSub">pubSub</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSub">DataLossPreventionJobTriggerInspectJobActionsPubSub</a></code> | pub_sub block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions.property.saveFindings">saveFindings</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindings">DataLossPreventionJobTriggerInspectJobActionsSaveFindings</a></code> | save_findings block. |

---

##### `deidentify`<sup>Optional</sup> <a name="deidentify" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions.property.deidentify"></a>

```typescript
public readonly deidentify: DataLossPreventionJobTriggerInspectJobActionsDeidentify;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify">DataLossPreventionJobTriggerInspectJobActionsDeidentify</a>

deidentify block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#deidentify DataLossPreventionJobTrigger#deidentify}

---

##### `jobNotificationEmails`<sup>Optional</sup> <a name="jobNotificationEmails" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions.property.jobNotificationEmails"></a>

```typescript
public readonly jobNotificationEmails: DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails">DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails</a>

job_notification_emails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#job_notification_emails DataLossPreventionJobTrigger#job_notification_emails}

---

##### `publishFindingsToCloudDataCatalog`<sup>Optional</sup> <a name="publishFindingsToCloudDataCatalog" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions.property.publishFindingsToCloudDataCatalog"></a>

```typescript
public readonly publishFindingsToCloudDataCatalog: DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog">DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog</a>

publish_findings_to_cloud_data_catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#publish_findings_to_cloud_data_catalog DataLossPreventionJobTrigger#publish_findings_to_cloud_data_catalog}

---

##### `publishSummaryToCscc`<sup>Optional</sup> <a name="publishSummaryToCscc" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions.property.publishSummaryToCscc"></a>

```typescript
public readonly publishSummaryToCscc: DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc">DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc</a>

publish_summary_to_cscc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#publish_summary_to_cscc DataLossPreventionJobTrigger#publish_summary_to_cscc}

---

##### `pubSub`<sup>Optional</sup> <a name="pubSub" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions.property.pubSub"></a>

```typescript
public readonly pubSub: DataLossPreventionJobTriggerInspectJobActionsPubSub;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSub">DataLossPreventionJobTriggerInspectJobActionsPubSub</a>

pub_sub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#pub_sub DataLossPreventionJobTrigger#pub_sub}

---

##### `saveFindings`<sup>Optional</sup> <a name="saveFindings" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions.property.saveFindings"></a>

```typescript
public readonly saveFindings: DataLossPreventionJobTriggerInspectJobActionsSaveFindings;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindings">DataLossPreventionJobTriggerInspectJobActionsSaveFindings</a>

save_findings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#save_findings DataLossPreventionJobTrigger#save_findings}

---

### DataLossPreventionJobTriggerInspectJobActionsDeidentify <a name="DataLossPreventionJobTriggerInspectJobActionsDeidentify" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobActionsDeidentify: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify.property.cloudStorageOutput">cloudStorageOutput</a></code> | <code>string</code> | User settable Cloud Storage bucket and folders to store de-identified files. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify.property.fileTypesToTransform">fileTypesToTransform</a></code> | <code>string[]</code> | List of user-specified file type groups to transform. If specified, only the files with these filetypes will be transformed. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify.property.transformationConfig">transformationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig</a></code> | transformation_config block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify.property.transformationDetailsStorageConfig">transformationDetailsStorageConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig</a></code> | transformation_details_storage_config block. |

---

##### `cloudStorageOutput`<sup>Required</sup> <a name="cloudStorageOutput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify.property.cloudStorageOutput"></a>

```typescript
public readonly cloudStorageOutput: string;
```

- *Type:* string

User settable Cloud Storage bucket and folders to store de-identified files.

This field must be set for cloud storage deidentification.

The output Cloud Storage bucket must be different from the input bucket.

De-identified files will overwrite files in the output path.

Form of: gs://bucket/folder/ or gs://bucket

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#cloud_storage_output DataLossPreventionJobTrigger#cloud_storage_output}

---

##### `fileTypesToTransform`<sup>Optional</sup> <a name="fileTypesToTransform" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify.property.fileTypesToTransform"></a>

```typescript
public readonly fileTypesToTransform: string[];
```

- *Type:* string[]

List of user-specified file type groups to transform. If specified, only the files with these filetypes will be transformed.

If empty, all supported files will be transformed. Supported types may be automatically added over time. 

If a file type is set in this field that isn't supported by the Deidentify action then the job will fail and will not be successfully created/started. Possible values: ["IMAGE", "TEXT_FILE", "CSV", "TSV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#file_types_to_transform DataLossPreventionJobTrigger#file_types_to_transform}

---

##### `transformationConfig`<sup>Optional</sup> <a name="transformationConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify.property.transformationConfig"></a>

```typescript
public readonly transformationConfig: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig</a>

transformation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#transformation_config DataLossPreventionJobTrigger#transformation_config}

---

##### `transformationDetailsStorageConfig`<sup>Optional</sup> <a name="transformationDetailsStorageConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify.property.transformationDetailsStorageConfig"></a>

```typescript
public readonly transformationDetailsStorageConfig: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig</a>

transformation_details_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#transformation_details_storage_config DataLossPreventionJobTrigger#transformation_details_storage_config}

---

### DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig <a name="DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>string</code> | If this template is specified, it will serve as the default de-identify template. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig.property.imageRedactTemplate">imageRedactTemplate</a></code> | <code>string</code> | If this template is specified, it will serve as the de-identify template for images. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig.property.structuredDeidentifyTemplate">structuredDeidentifyTemplate</a></code> | <code>string</code> | If this template is specified, it will serve as the de-identify template for structured content such as delimited files and tables. |

---

##### `deidentifyTemplate`<sup>Optional</sup> <a name="deidentifyTemplate" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig.property.deidentifyTemplate"></a>

```typescript
public readonly deidentifyTemplate: string;
```

- *Type:* string

If this template is specified, it will serve as the default de-identify template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#deidentify_template DataLossPreventionJobTrigger#deidentify_template}

---

##### `imageRedactTemplate`<sup>Optional</sup> <a name="imageRedactTemplate" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig.property.imageRedactTemplate"></a>

```typescript
public readonly imageRedactTemplate: string;
```

- *Type:* string

If this template is specified, it will serve as the de-identify template for images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#image_redact_template DataLossPreventionJobTrigger#image_redact_template}

---

##### `structuredDeidentifyTemplate`<sup>Optional</sup> <a name="structuredDeidentifyTemplate" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig.property.structuredDeidentifyTemplate"></a>

```typescript
public readonly structuredDeidentifyTemplate: string;
```

- *Type:* string

If this template is specified, it will serve as the de-identify template for structured content such as delimited files and tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#structured_deidentify_template DataLossPreventionJobTrigger#structured_deidentify_template}

---

### DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig <a name="DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig.property.table">table</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable</a></code> | table block. |

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig.property.table"></a>

```typescript
public readonly table: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable</a>

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#table DataLossPreventionJobTrigger#table}

---

### DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable <a name="DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable.property.datasetId">datasetId</a></code> | <code>string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable.property.projectId">projectId</a></code> | <code>string</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable.property.tableId">tableId</a></code> | <code>string</code> | The ID of the table. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#dataset_id DataLossPreventionJobTrigger#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#project_id DataLossPreventionJobTrigger#project_id}

---

##### `tableId`<sup>Optional</sup> <a name="tableId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The ID of the table.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#table_id DataLossPreventionJobTrigger#table_id}

---

### DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails <a name="DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails = { ... }
```


### DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog <a name="DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog = { ... }
```


### DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc <a name="DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc = { ... }
```


### DataLossPreventionJobTriggerInspectJobActionsPubSub <a name="DataLossPreventionJobTriggerInspectJobActionsPubSub" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSub.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobActionsPubSub: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSub = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSub.property.topic">topic</a></code> | <code>string</code> | Cloud Pub/Sub topic to send notifications to. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSub.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Cloud Pub/Sub topic to send notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#topic DataLossPreventionJobTrigger#topic}

---

### DataLossPreventionJobTriggerInspectJobActionsSaveFindings <a name="DataLossPreventionJobTriggerInspectJobActionsSaveFindings" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindings.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobActionsSaveFindings: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindings.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig</a></code> | output_config block. |

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindings.property.outputConfig"></a>

```typescript
public readonly outputConfig: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig</a>

output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#output_config DataLossPreventionJobTrigger#output_config}

---

### DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig <a name="DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig.property.table">table</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig.property.outputSchema">outputSchema</a></code> | <code>string</code> | Schema used for writing the findings for Inspect jobs. |

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig.property.table"></a>

```typescript
public readonly table: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable</a>

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#table DataLossPreventionJobTrigger#table}

---

##### `outputSchema`<sup>Optional</sup> <a name="outputSchema" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig.property.outputSchema"></a>

```typescript
public readonly outputSchema: string;
```

- *Type:* string

Schema used for writing the findings for Inspect jobs.

This field is only used for
Inspect and must be unspecified for Risk jobs. Columns are derived from the Finding
object. If appending to an existing table, any columns from the predefined schema
that are missing will be added. No columns in the existing table will be deleted.

If unspecified, then all available columns will be used for a new table or an (existing)
table with no schema, and no changes will be made to an existing table that has a schema.
Only for use with external storage. Possible values: ["BASIC_COLUMNS", "GCS_COLUMNS", "DATASTORE_COLUMNS", "BIG_QUERY_COLUMNS", "ALL_COLUMNS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#output_schema DataLossPreventionJobTrigger#output_schema}

---

### DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable <a name="DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable.property.datasetId">datasetId</a></code> | <code>string</code> | Dataset ID of the table. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable.property.projectId">projectId</a></code> | <code>string</code> | The Google Cloud Platform project ID of the project containing the table. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable.property.tableId">tableId</a></code> | <code>string</code> | Name of the table. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

Dataset ID of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#dataset_id DataLossPreventionJobTrigger#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The Google Cloud Platform project ID of the project containing the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#project_id DataLossPreventionJobTrigger#project_id}

---

##### `tableId`<sup>Optional</sup> <a name="tableId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

Name of the table.

If is not set a new one will be generated for you with the following format:
'dlp_googleapis_yyyy_mm_dd_[dlp_job_id]'. Pacific timezone will be used for generating the date details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#table_id DataLossPreventionJobTrigger#table_id}

---

### DataLossPreventionJobTriggerInspectJobStorageConfig <a name="DataLossPreventionJobTriggerInspectJobStorageConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobStorageConfig: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig.property.bigQueryOptions">bigQueryOptions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions</a></code> | big_query_options block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig.property.cloudStorageOptions">cloudStorageOptions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions</a></code> | cloud_storage_options block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig.property.datastoreOptions">datastoreOptions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions</a></code> | datastore_options block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig.property.hybridOptions">hybridOptions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions</a></code> | hybrid_options block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig.property.timespanConfig">timespanConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig</a></code> | timespan_config block. |

---

##### `bigQueryOptions`<sup>Optional</sup> <a name="bigQueryOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig.property.bigQueryOptions"></a>

```typescript
public readonly bigQueryOptions: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions</a>

big_query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#big_query_options DataLossPreventionJobTrigger#big_query_options}

---

##### `cloudStorageOptions`<sup>Optional</sup> <a name="cloudStorageOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig.property.cloudStorageOptions"></a>

```typescript
public readonly cloudStorageOptions: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions</a>

cloud_storage_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#cloud_storage_options DataLossPreventionJobTrigger#cloud_storage_options}

---

##### `datastoreOptions`<sup>Optional</sup> <a name="datastoreOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig.property.datastoreOptions"></a>

```typescript
public readonly datastoreOptions: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions</a>

datastore_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#datastore_options DataLossPreventionJobTrigger#datastore_options}

---

##### `hybridOptions`<sup>Optional</sup> <a name="hybridOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig.property.hybridOptions"></a>

```typescript
public readonly hybridOptions: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions</a>

hybrid_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#hybrid_options DataLossPreventionJobTrigger#hybrid_options}

---

##### `timespanConfig`<sup>Optional</sup> <a name="timespanConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig.property.timespanConfig"></a>

```typescript
public readonly timespanConfig: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig</a>

timespan_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#timespan_config DataLossPreventionJobTrigger#timespan_config}

---

### DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions <a name="DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.tableReference">tableReference</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference</a></code> | table_reference block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.identifyingFields">identifyingFields</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a>[]</code> | identifying_fields block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.rowsLimit">rowsLimit</a></code> | <code>number</code> | Max number of rows to scan. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.rowsLimitPercent">rowsLimitPercent</a></code> | <code>number</code> | Max percentage of rows to scan. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.sampleMethod">sampleMethod</a></code> | <code>string</code> | How to sample rows if not all rows are scanned. |

---

##### `tableReference`<sup>Required</sup> <a name="tableReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.tableReference"></a>

```typescript
public readonly tableReference: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference</a>

table_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#table_reference DataLossPreventionJobTrigger#table_reference}

---

##### `identifyingFields`<sup>Optional</sup> <a name="identifyingFields" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.identifyingFields"></a>

```typescript
public readonly identifyingFields: IResolvable | DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a>[]

identifying_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#identifying_fields DataLossPreventionJobTrigger#identifying_fields}

---

##### `rowsLimit`<sup>Optional</sup> <a name="rowsLimit" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.rowsLimit"></a>

```typescript
public readonly rowsLimit: number;
```

- *Type:* number

Max number of rows to scan.

If the table has more rows than this value, the rest of the rows are omitted. 
If not set, or if set to 0, all rows will be scanned. Only one of rowsLimit and rowsLimitPercent can be 
specified. Cannot be used in conjunction with TimespanConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#rows_limit DataLossPreventionJobTrigger#rows_limit}

---

##### `rowsLimitPercent`<sup>Optional</sup> <a name="rowsLimitPercent" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.rowsLimitPercent"></a>

```typescript
public readonly rowsLimitPercent: number;
```

- *Type:* number

Max percentage of rows to scan.

The rest are omitted. The number of rows scanned is rounded down. 
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of 
rowsLimit and rowsLimitPercent can be specified. Cannot be used in conjunction with TimespanConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#rows_limit_percent DataLossPreventionJobTrigger#rows_limit_percent}

---

##### `sampleMethod`<sup>Optional</sup> <a name="sampleMethod" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions.property.sampleMethod"></a>

```typescript
public readonly sampleMethod: string;
```

- *Type:* string

How to sample rows if not all rows are scanned.

Meaningful only when used in conjunction with either 
rowsLimit or rowsLimitPercent. If not specified, rows are scanned in the order BigQuery reads them. Default value: "TOP" Possible values: ["TOP", "RANDOM_START"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#sample_method DataLossPreventionJobTrigger#sample_method}

---

### DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields <a name="DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields.property.name">name</a></code> | <code>string</code> | Name of a BigQuery field to be returned with the findings. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of a BigQuery field to be returned with the findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}

---

### DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference <a name="DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference.property.datasetId">datasetId</a></code> | <code>string</code> | The dataset ID of the table. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference.property.projectId">projectId</a></code> | <code>string</code> | The Google Cloud Platform project ID of the project containing the table. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference.property.tableId">tableId</a></code> | <code>string</code> | The name of the table. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The dataset ID of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#dataset_id DataLossPreventionJobTrigger#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The Google Cloud Platform project ID of the project containing the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#project_id DataLossPreventionJobTrigger#project_id}

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#table_id DataLossPreventionJobTrigger#table_id}

---

### DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions <a name="DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.fileSet">fileSet</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet</a></code> | file_set block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.bytesLimitPerFile">bytesLimitPerFile</a></code> | <code>number</code> | Max number of bytes to scan from a file. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.bytesLimitPerFilePercent">bytesLimitPerFilePercent</a></code> | <code>number</code> | Max percentage of bytes to scan from a file. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.filesLimitPercent">filesLimitPercent</a></code> | <code>number</code> | Limits the number of files to scan to this percentage of the input FileSet. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.fileTypes">fileTypes</a></code> | <code>string[]</code> | List of file type groups to include in the scan. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.sampleMethod">sampleMethod</a></code> | <code>string</code> | How to sample bytes if not all bytes are scanned. |

---

##### `fileSet`<sup>Required</sup> <a name="fileSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.fileSet"></a>

```typescript
public readonly fileSet: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet</a>

file_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#file_set DataLossPreventionJobTrigger#file_set}

---

##### `bytesLimitPerFile`<sup>Optional</sup> <a name="bytesLimitPerFile" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.bytesLimitPerFile"></a>

```typescript
public readonly bytesLimitPerFile: number;
```

- *Type:* number

Max number of bytes to scan from a file.

If a scanned file's size is bigger than this value
then the rest of the bytes are omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#bytes_limit_per_file DataLossPreventionJobTrigger#bytes_limit_per_file}

---

##### `bytesLimitPerFilePercent`<sup>Optional</sup> <a name="bytesLimitPerFilePercent" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.bytesLimitPerFilePercent"></a>

```typescript
public readonly bytesLimitPerFilePercent: number;
```

- *Type:* number

Max percentage of bytes to scan from a file.

The rest are omitted. The number of bytes scanned is rounded down.
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#bytes_limit_per_file_percent DataLossPreventionJobTrigger#bytes_limit_per_file_percent}

---

##### `filesLimitPercent`<sup>Optional</sup> <a name="filesLimitPercent" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.filesLimitPercent"></a>

```typescript
public readonly filesLimitPercent: number;
```

- *Type:* number

Limits the number of files to scan to this percentage of the input FileSet.

Number of files scanned is rounded down.
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#files_limit_percent DataLossPreventionJobTrigger#files_limit_percent}

---

##### `fileTypes`<sup>Optional</sup> <a name="fileTypes" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.fileTypes"></a>

```typescript
public readonly fileTypes: string[];
```

- *Type:* string[]

List of file type groups to include in the scan.

If empty, all files are scanned and available data
format processors are applied. In addition, the binary content of the selected files is always scanned as well.
Images are scanned only as binary if the specified region does not support image inspection and no fileTypes were specified. Possible values: ["BINARY_FILE", "TEXT_FILE", "IMAGE", "WORD", "PDF", "AVRO", "CSV", "TSV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#file_types DataLossPreventionJobTrigger#file_types}

---

##### `sampleMethod`<sup>Optional</sup> <a name="sampleMethod" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions.property.sampleMethod"></a>

```typescript
public readonly sampleMethod: string;
```

- *Type:* string

How to sample bytes if not all bytes are scanned.

Meaningful only when used in conjunction with bytesLimitPerFile.
If not specified, scanning would start from the top. Possible values: ["TOP", "RANDOM_START"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#sample_method DataLossPreventionJobTrigger#sample_method}

---

### DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet <a name="DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet.property.regexFileSet">regexFileSet</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet</a></code> | regex_file_set block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet.property.url">url</a></code> | <code>string</code> | The Cloud Storage url of the file(s) to scan, in the format 'gs://<bucket>/<path>'. Trailing wildcard in the path is allowed. |

---

##### `regexFileSet`<sup>Optional</sup> <a name="regexFileSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet.property.regexFileSet"></a>

```typescript
public readonly regexFileSet: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet</a>

regex_file_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#regex_file_set DataLossPreventionJobTrigger#regex_file_set}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The Cloud Storage url of the file(s) to scan, in the format 'gs://<bucket>/<path>'. Trailing wildcard in the path is allowed.

If the url ends in a trailing slash, the bucket or directory represented by the url will be scanned
non-recursively (content in sub-directories will not be scanned). This means that 'gs://mybucket/' is
equivalent to 'gs://mybucket/*', and 'gs://mybucket/directory/' is equivalent to 'gs://mybucket/directory/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#url DataLossPreventionJobTrigger#url}

---

### DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet <a name="DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet.property.bucketName">bucketName</a></code> | <code>string</code> | The name of a Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet.property.excludeRegex">excludeRegex</a></code> | <code>string[]</code> | A list of regular expressions matching file paths to exclude. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet.property.includeRegex">includeRegex</a></code> | <code>string[]</code> | A list of regular expressions matching file paths to include. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#bucket_name DataLossPreventionJobTrigger#bucket_name}

---

##### `excludeRegex`<sup>Optional</sup> <a name="excludeRegex" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet.property.excludeRegex"></a>

```typescript
public readonly excludeRegex: string[];
```

- *Type:* string[]

A list of regular expressions matching file paths to exclude.

All files in the bucket that match at
least one of these regular expressions will be excluded from the scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#exclude_regex DataLossPreventionJobTrigger#exclude_regex}

---

##### `includeRegex`<sup>Optional</sup> <a name="includeRegex" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet.property.includeRegex"></a>

```typescript
public readonly includeRegex: string[];
```

- *Type:* string[]

A list of regular expressions matching file paths to include.

All files in the bucket
that match at least one of these regular expressions will be included in the set of files,
except for those that also match an item in excludeRegex. Leaving this field empty will
match all files by default (this is equivalent to including .* in the list)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#include_regex DataLossPreventionJobTrigger#include_regex}

---

### DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions <a name="DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions.property.kind">kind</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind</a></code> | kind block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions.property.partitionId">partitionId</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId</a></code> | partition_id block. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions.property.kind"></a>

```typescript
public readonly kind: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind</a>

kind block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#kind DataLossPreventionJobTrigger#kind}

---

##### `partitionId`<sup>Required</sup> <a name="partitionId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions.property.partitionId"></a>

```typescript
public readonly partitionId: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId</a>

partition_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#partition_id DataLossPreventionJobTrigger#partition_id}

---

### DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind <a name="DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind.property.name">name</a></code> | <code>string</code> | The name of the Datastore kind. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Datastore kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}

---

### DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId <a name="DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId.property.projectId">projectId</a></code> | <code>string</code> | The ID of the project to which the entities belong. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId.property.namespaceId">namespaceId</a></code> | <code>string</code> | If not empty, the ID of the namespace to which the entities belong. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the project to which the entities belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#project_id DataLossPreventionJobTrigger#project_id}

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

If not empty, the ID of the namespace to which the entities belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#namespace_id DataLossPreventionJobTrigger#namespace_id}

---

### DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions <a name="DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.property.description">description</a></code> | <code>string</code> | A short description of where the data is coming from. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | To organize findings, these labels will be added to each finding. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.property.requiredFindingLabelKeys">requiredFindingLabelKeys</a></code> | <code>string[]</code> | These are labels that each inspection request must include within their 'finding_labels' map. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.property.tableOptions">tableOptions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions</a></code> | table_options block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of where the data is coming from.

Will be stored once in the job. 256 max length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#description DataLossPreventionJobTrigger#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

To organize findings, these labels will be added to each finding.

Label keys must be between 1 and 63 characters long and must conform to the following regular expression: '[a-z]([-a-z0-9]*[a-z0-9])?'.

Label values must be between 0 and 63 characters long and must conform to the regular expression '([a-z]([-a-z0-9]*[a-z0-9])?)?'.

No more than 10 labels can be associated with a given finding.

Examples:
'"environment" : "production"'
'"pipeline" : "etl"'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#labels DataLossPreventionJobTrigger#labels}

---

##### `requiredFindingLabelKeys`<sup>Optional</sup> <a name="requiredFindingLabelKeys" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.property.requiredFindingLabelKeys"></a>

```typescript
public readonly requiredFindingLabelKeys: string[];
```

- *Type:* string[]

These are labels that each inspection request must include within their 'finding_labels' map.

Request
may contain others, but any missing one of these will be rejected.

Label keys must be between 1 and 63 characters long and must conform to the following regular expression: '[a-z]([-a-z0-9]*[a-z0-9])?'.

No more than 10 keys can be required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#required_finding_label_keys DataLossPreventionJobTrigger#required_finding_label_keys}

---

##### `tableOptions`<sup>Optional</sup> <a name="tableOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions.property.tableOptions"></a>

```typescript
public readonly tableOptions: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions</a>

table_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#table_options DataLossPreventionJobTrigger#table_options}

---

### DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions <a name="DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions.property.identifyingFields">identifyingFields</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a>[]</code> | identifying_fields block. |

---

##### `identifyingFields`<sup>Optional</sup> <a name="identifyingFields" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions.property.identifyingFields"></a>

```typescript
public readonly identifyingFields: IResolvable | DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a>[]

identifying_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#identifying_fields DataLossPreventionJobTrigger#identifying_fields}

---

### DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields <a name="DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields.property.name">name</a></code> | <code>string</code> | Name describing the field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name describing the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}

---

### DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig <a name="DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.property.timestampField">timestampField</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField</a></code> | timestamp_field block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.property.enableAutoPopulationOfTimespanConfig">enableAutoPopulationOfTimespanConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | When the job is started by a JobTrigger we will automatically figure out a valid startTime to avoid scanning files that have not been modified since the last time the JobTrigger executed. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.property.endTime">endTime</a></code> | <code>string</code> | Exclude files or rows newer than this value. If set to zero, no upper time limit is applied. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.property.startTime">startTime</a></code> | <code>string</code> | Exclude files or rows older than this value. |

---

##### `timestampField`<sup>Required</sup> <a name="timestampField" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.property.timestampField"></a>

```typescript
public readonly timestampField: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField</a>

timestamp_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#timestamp_field DataLossPreventionJobTrigger#timestamp_field}

---

##### `enableAutoPopulationOfTimespanConfig`<sup>Optional</sup> <a name="enableAutoPopulationOfTimespanConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.property.enableAutoPopulationOfTimespanConfig"></a>

```typescript
public readonly enableAutoPopulationOfTimespanConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When the job is started by a JobTrigger we will automatically figure out a valid startTime to avoid scanning files that have not been modified since the last time the JobTrigger executed.

This will
be based on the time of the execution of the last run of the JobTrigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#enable_auto_population_of_timespan_config DataLossPreventionJobTrigger#enable_auto_population_of_timespan_config}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Exclude files or rows newer than this value. If set to zero, no upper time limit is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#end_time DataLossPreventionJobTrigger#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Exclude files or rows older than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#start_time DataLossPreventionJobTrigger#start_time}

---

### DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField <a name="DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField.property.name">name</a></code> | <code>string</code> | Specification of the field containing the timestamp of scanned items. Used for data sources like Datastore and BigQuery. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specification of the field containing the timestamp of scanned items. Used for data sources like Datastore and BigQuery.

For BigQuery: Required to filter out rows based on the given start and end times. If not specified and the table was
modified between the given start and end times, the entire table will be scanned. The valid data types of the timestamp
field are: INTEGER, DATE, TIMESTAMP, or DATETIME BigQuery column.

For Datastore. Valid data types of the timestamp field are: TIMESTAMP. Datastore entity will be scanned if the
timestamp property does not exist or its value is empty or invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}

---

### DataLossPreventionJobTriggerTimeouts <a name="DataLossPreventionJobTriggerTimeouts" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeouts.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerTimeouts: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#create DataLossPreventionJobTrigger#create}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#delete DataLossPreventionJobTrigger#delete}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#update DataLossPreventionJobTrigger#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#create DataLossPreventionJobTrigger#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#delete DataLossPreventionJobTrigger#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#update DataLossPreventionJobTrigger#update}.

---

### DataLossPreventionJobTriggerTriggers <a name="DataLossPreventionJobTriggerTriggers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggers.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerTriggers: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggers.property.manual">manual</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManual">DataLossPreventionJobTriggerTriggersManual</a></code> | manual block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggers.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersSchedule">DataLossPreventionJobTriggerTriggersSchedule</a></code> | schedule block. |

---

##### `manual`<sup>Optional</sup> <a name="manual" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggers.property.manual"></a>

```typescript
public readonly manual: DataLossPreventionJobTriggerTriggersManual;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManual">DataLossPreventionJobTriggerTriggersManual</a>

manual block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#manual DataLossPreventionJobTrigger#manual}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggers.property.schedule"></a>

```typescript
public readonly schedule: DataLossPreventionJobTriggerTriggersSchedule;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersSchedule">DataLossPreventionJobTriggerTriggersSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#schedule DataLossPreventionJobTrigger#schedule}

---

### DataLossPreventionJobTriggerTriggersManual <a name="DataLossPreventionJobTriggerTriggersManual" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManual"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManual.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerTriggersManual: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManual = { ... }
```


### DataLossPreventionJobTriggerTriggersSchedule <a name="DataLossPreventionJobTriggerTriggersSchedule" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersSchedule.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

const dataLossPreventionJobTriggerTriggersSchedule: dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersSchedule.property.recurrencePeriodDuration">recurrencePeriodDuration</a></code> | <code>string</code> | With this option a job is started a regular periodic basis. For example: every day (86400 seconds). |

---

##### `recurrencePeriodDuration`<sup>Optional</sup> <a name="recurrencePeriodDuration" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersSchedule.property.recurrencePeriodDuration"></a>

```typescript
public readonly recurrencePeriodDuration: string;
```

- *Type:* string

With this option a job is started a regular periodic basis. For example: every day (86400 seconds).

A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs.

This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/data_loss_prevention_job_trigger#recurrence_period_duration DataLossPreventionJobTrigger#recurrence_period_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference <a name="DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.putTransformationConfig">putTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.putTransformationDetailsStorageConfig">putTransformationDetailsStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resetFileTypesToTransform">resetFileTypesToTransform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resetTransformationConfig">resetTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resetTransformationDetailsStorageConfig">resetTransformationDetailsStorageConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTransformationConfig` <a name="putTransformationConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.putTransformationConfig"></a>

```typescript
public putTransformationConfig(value: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.putTransformationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig</a>

---

##### `putTransformationDetailsStorageConfig` <a name="putTransformationDetailsStorageConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.putTransformationDetailsStorageConfig"></a>

```typescript
public putTransformationDetailsStorageConfig(value: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.putTransformationDetailsStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig</a>

---

##### `resetFileTypesToTransform` <a name="resetFileTypesToTransform" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resetFileTypesToTransform"></a>

```typescript
public resetFileTypesToTransform(): void
```

##### `resetTransformationConfig` <a name="resetTransformationConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resetTransformationConfig"></a>

```typescript
public resetTransformationConfig(): void
```

##### `resetTransformationDetailsStorageConfig` <a name="resetTransformationDetailsStorageConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.resetTransformationDetailsStorageConfig"></a>

```typescript
public resetTransformationDetailsStorageConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.transformationConfig">transformationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.transformationDetailsStorageConfig">transformationDetailsStorageConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.cloudStorageOutputInput">cloudStorageOutputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.fileTypesToTransformInput">fileTypesToTransformInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.transformationConfigInput">transformationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.transformationDetailsStorageConfigInput">transformationDetailsStorageConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.cloudStorageOutput">cloudStorageOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.fileTypesToTransform">fileTypesToTransform</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify">DataLossPreventionJobTriggerInspectJobActionsDeidentify</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transformationConfig`<sup>Required</sup> <a name="transformationConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.transformationConfig"></a>

```typescript
public readonly transformationConfig: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference</a>

---

##### `transformationDetailsStorageConfig`<sup>Required</sup> <a name="transformationDetailsStorageConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.transformationDetailsStorageConfig"></a>

```typescript
public readonly transformationDetailsStorageConfig: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference</a>

---

##### `cloudStorageOutputInput`<sup>Optional</sup> <a name="cloudStorageOutputInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.cloudStorageOutputInput"></a>

```typescript
public readonly cloudStorageOutputInput: string;
```

- *Type:* string

---

##### `fileTypesToTransformInput`<sup>Optional</sup> <a name="fileTypesToTransformInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.fileTypesToTransformInput"></a>

```typescript
public readonly fileTypesToTransformInput: string[];
```

- *Type:* string[]

---

##### `transformationConfigInput`<sup>Optional</sup> <a name="transformationConfigInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.transformationConfigInput"></a>

```typescript
public readonly transformationConfigInput: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig</a>

---

##### `transformationDetailsStorageConfigInput`<sup>Optional</sup> <a name="transformationDetailsStorageConfigInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.transformationDetailsStorageConfigInput"></a>

```typescript
public readonly transformationDetailsStorageConfigInput: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig</a>

---

##### `cloudStorageOutput`<sup>Required</sup> <a name="cloudStorageOutput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.cloudStorageOutput"></a>

```typescript
public readonly cloudStorageOutput: string;
```

- *Type:* string

---

##### `fileTypesToTransform`<sup>Required</sup> <a name="fileTypesToTransform" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.fileTypesToTransform"></a>

```typescript
public readonly fileTypesToTransform: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobActionsDeidentify;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify">DataLossPreventionJobTriggerInspectJobActionsDeidentify</a>

---


### DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference <a name="DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resetDeidentifyTemplate">resetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resetImageRedactTemplate">resetImageRedactTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resetStructuredDeidentifyTemplate">resetStructuredDeidentifyTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeidentifyTemplate` <a name="resetDeidentifyTemplate" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resetDeidentifyTemplate"></a>

```typescript
public resetDeidentifyTemplate(): void
```

##### `resetImageRedactTemplate` <a name="resetImageRedactTemplate" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resetImageRedactTemplate"></a>

```typescript
public resetImageRedactTemplate(): void
```

##### `resetStructuredDeidentifyTemplate` <a name="resetStructuredDeidentifyTemplate" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.resetStructuredDeidentifyTemplate"></a>

```typescript
public resetStructuredDeidentifyTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.deidentifyTemplateInput">deidentifyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.imageRedactTemplateInput">imageRedactTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.structuredDeidentifyTemplateInput">structuredDeidentifyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.imageRedactTemplate">imageRedactTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.structuredDeidentifyTemplate">structuredDeidentifyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deidentifyTemplateInput`<sup>Optional</sup> <a name="deidentifyTemplateInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.deidentifyTemplateInput"></a>

```typescript
public readonly deidentifyTemplateInput: string;
```

- *Type:* string

---

##### `imageRedactTemplateInput`<sup>Optional</sup> <a name="imageRedactTemplateInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.imageRedactTemplateInput"></a>

```typescript
public readonly imageRedactTemplateInput: string;
```

- *Type:* string

---

##### `structuredDeidentifyTemplateInput`<sup>Optional</sup> <a name="structuredDeidentifyTemplateInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.structuredDeidentifyTemplateInput"></a>

```typescript
public readonly structuredDeidentifyTemplateInput: string;
```

- *Type:* string

---

##### `deidentifyTemplate`<sup>Required</sup> <a name="deidentifyTemplate" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.deidentifyTemplate"></a>

```typescript
public readonly deidentifyTemplate: string;
```

- *Type:* string

---

##### `imageRedactTemplate`<sup>Required</sup> <a name="imageRedactTemplate" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.imageRedactTemplate"></a>

```typescript
public readonly imageRedactTemplate: string;
```

- *Type:* string

---

##### `structuredDeidentifyTemplate`<sup>Required</sup> <a name="structuredDeidentifyTemplate" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.structuredDeidentifyTemplate"></a>

```typescript
public readonly structuredDeidentifyTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig</a>

---


### DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference <a name="DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.putTable">putTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTable` <a name="putTable" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.putTable"></a>

```typescript
public putTable(value: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.tableInput">tableInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.table"></a>

```typescript
public readonly table: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference</a>

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig</a>

---


### DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference <a name="DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.resetTableId">resetTableId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTableId` <a name="resetTableId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.resetTableId"></a>

```typescript
public resetTableId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable">DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable</a>

---


### DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference <a name="DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails">DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails">DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails</a>

---


### DataLossPreventionJobTriggerInspectJobActionsList <a name="DataLossPreventionJobTriggerInspectJobActionsList" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.get"></a>

```typescript
public get(index: number): DataLossPreventionJobTriggerInspectJobActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions">DataLossPreventionJobTriggerInspectJobActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLossPreventionJobTriggerInspectJobActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions">DataLossPreventionJobTriggerInspectJobActions</a>[]

---


### DataLossPreventionJobTriggerInspectJobActionsOutputReference <a name="DataLossPreventionJobTriggerInspectJobActionsOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putDeidentify">putDeidentify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putJobNotificationEmails">putJobNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putPublishFindingsToCloudDataCatalog">putPublishFindingsToCloudDataCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putPublishSummaryToCscc">putPublishSummaryToCscc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putPubSub">putPubSub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putSaveFindings">putSaveFindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.resetDeidentify">resetDeidentify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.resetJobNotificationEmails">resetJobNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.resetPublishFindingsToCloudDataCatalog">resetPublishFindingsToCloudDataCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.resetPublishSummaryToCscc">resetPublishSummaryToCscc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.resetPubSub">resetPubSub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.resetSaveFindings">resetSaveFindings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeidentify` <a name="putDeidentify" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putDeidentify"></a>

```typescript
public putDeidentify(value: DataLossPreventionJobTriggerInspectJobActionsDeidentify): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putDeidentify.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify">DataLossPreventionJobTriggerInspectJobActionsDeidentify</a>

---

##### `putJobNotificationEmails` <a name="putJobNotificationEmails" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putJobNotificationEmails"></a>

```typescript
public putJobNotificationEmails(value: DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putJobNotificationEmails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails">DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails</a>

---

##### `putPublishFindingsToCloudDataCatalog` <a name="putPublishFindingsToCloudDataCatalog" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putPublishFindingsToCloudDataCatalog"></a>

```typescript
public putPublishFindingsToCloudDataCatalog(value: DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putPublishFindingsToCloudDataCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog">DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog</a>

---

##### `putPublishSummaryToCscc` <a name="putPublishSummaryToCscc" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putPublishSummaryToCscc"></a>

```typescript
public putPublishSummaryToCscc(value: DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putPublishSummaryToCscc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc">DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc</a>

---

##### `putPubSub` <a name="putPubSub" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putPubSub"></a>

```typescript
public putPubSub(value: DataLossPreventionJobTriggerInspectJobActionsPubSub): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putPubSub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSub">DataLossPreventionJobTriggerInspectJobActionsPubSub</a>

---

##### `putSaveFindings` <a name="putSaveFindings" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putSaveFindings"></a>

```typescript
public putSaveFindings(value: DataLossPreventionJobTriggerInspectJobActionsSaveFindings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.putSaveFindings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindings">DataLossPreventionJobTriggerInspectJobActionsSaveFindings</a>

---

##### `resetDeidentify` <a name="resetDeidentify" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.resetDeidentify"></a>

```typescript
public resetDeidentify(): void
```

##### `resetJobNotificationEmails` <a name="resetJobNotificationEmails" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.resetJobNotificationEmails"></a>

```typescript
public resetJobNotificationEmails(): void
```

##### `resetPublishFindingsToCloudDataCatalog` <a name="resetPublishFindingsToCloudDataCatalog" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.resetPublishFindingsToCloudDataCatalog"></a>

```typescript
public resetPublishFindingsToCloudDataCatalog(): void
```

##### `resetPublishSummaryToCscc` <a name="resetPublishSummaryToCscc" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.resetPublishSummaryToCscc"></a>

```typescript
public resetPublishSummaryToCscc(): void
```

##### `resetPubSub` <a name="resetPubSub" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.resetPubSub"></a>

```typescript
public resetPubSub(): void
```

##### `resetSaveFindings` <a name="resetSaveFindings" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.resetSaveFindings"></a>

```typescript
public resetSaveFindings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.deidentify">deidentify</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference">DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.jobNotificationEmails">jobNotificationEmails</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference">DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.publishFindingsToCloudDataCatalog">publishFindingsToCloudDataCatalog</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference">DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.publishSummaryToCscc">publishSummaryToCscc</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference">DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.pubSub">pubSub</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference">DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.saveFindings">saveFindings</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.deidentifyInput">deidentifyInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify">DataLossPreventionJobTriggerInspectJobActionsDeidentify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.jobNotificationEmailsInput">jobNotificationEmailsInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails">DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.publishFindingsToCloudDataCatalogInput">publishFindingsToCloudDataCatalogInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog">DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.publishSummaryToCsccInput">publishSummaryToCsccInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc">DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.pubSubInput">pubSubInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSub">DataLossPreventionJobTriggerInspectJobActionsPubSub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.saveFindingsInput">saveFindingsInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindings">DataLossPreventionJobTriggerInspectJobActionsSaveFindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions">DataLossPreventionJobTriggerInspectJobActions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deidentify`<sup>Required</sup> <a name="deidentify" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.deidentify"></a>

```typescript
public readonly deidentify: DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference">DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference</a>

---

##### `jobNotificationEmails`<sup>Required</sup> <a name="jobNotificationEmails" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.jobNotificationEmails"></a>

```typescript
public readonly jobNotificationEmails: DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference">DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference</a>

---

##### `publishFindingsToCloudDataCatalog`<sup>Required</sup> <a name="publishFindingsToCloudDataCatalog" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.publishFindingsToCloudDataCatalog"></a>

```typescript
public readonly publishFindingsToCloudDataCatalog: DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference">DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference</a>

---

##### `publishSummaryToCscc`<sup>Required</sup> <a name="publishSummaryToCscc" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.publishSummaryToCscc"></a>

```typescript
public readonly publishSummaryToCscc: DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference">DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference</a>

---

##### `pubSub`<sup>Required</sup> <a name="pubSub" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.pubSub"></a>

```typescript
public readonly pubSub: DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference">DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference</a>

---

##### `saveFindings`<sup>Required</sup> <a name="saveFindings" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.saveFindings"></a>

```typescript
public readonly saveFindings: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference</a>

---

##### `deidentifyInput`<sup>Optional</sup> <a name="deidentifyInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.deidentifyInput"></a>

```typescript
public readonly deidentifyInput: DataLossPreventionJobTriggerInspectJobActionsDeidentify;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsDeidentify">DataLossPreventionJobTriggerInspectJobActionsDeidentify</a>

---

##### `jobNotificationEmailsInput`<sup>Optional</sup> <a name="jobNotificationEmailsInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.jobNotificationEmailsInput"></a>

```typescript
public readonly jobNotificationEmailsInput: DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails">DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails</a>

---

##### `publishFindingsToCloudDataCatalogInput`<sup>Optional</sup> <a name="publishFindingsToCloudDataCatalogInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.publishFindingsToCloudDataCatalogInput"></a>

```typescript
public readonly publishFindingsToCloudDataCatalogInput: DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog">DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog</a>

---

##### `publishSummaryToCsccInput`<sup>Optional</sup> <a name="publishSummaryToCsccInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.publishSummaryToCsccInput"></a>

```typescript
public readonly publishSummaryToCsccInput: DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc">DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc</a>

---

##### `pubSubInput`<sup>Optional</sup> <a name="pubSubInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.pubSubInput"></a>

```typescript
public readonly pubSubInput: DataLossPreventionJobTriggerInspectJobActionsPubSub;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSub">DataLossPreventionJobTriggerInspectJobActionsPubSub</a>

---

##### `saveFindingsInput`<sup>Optional</sup> <a name="saveFindingsInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.saveFindingsInput"></a>

```typescript
public readonly saveFindingsInput: DataLossPreventionJobTriggerInspectJobActionsSaveFindings;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindings">DataLossPreventionJobTriggerInspectJobActionsSaveFindings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobActions | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions">DataLossPreventionJobTriggerInspectJobActions</a> | cdktf.IResolvable

---


### DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference <a name="DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog">DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog">DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog</a>

---


### DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference <a name="DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc">DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc">DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc</a>

---


### DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference <a name="DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSub">DataLossPreventionJobTriggerInspectJobActionsPubSub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobActionsPubSub;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsPubSub">DataLossPreventionJobTriggerInspectJobActionsPubSub</a>

---


### DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference <a name="DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.resetOutputSchema">resetOutputSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTable` <a name="putTable" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.putTable"></a>

```typescript
public putTable(value: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable</a>

---

##### `resetOutputSchema` <a name="resetOutputSchema" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.resetOutputSchema"></a>

```typescript
public resetOutputSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.outputSchemaInput">outputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.tableInput">tableInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.outputSchema">outputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.table"></a>

```typescript
public readonly table: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference</a>

---

##### `outputSchemaInput`<sup>Optional</sup> <a name="outputSchemaInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.outputSchemaInput"></a>

```typescript
public readonly outputSchemaInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable</a>

---

##### `outputSchema`<sup>Required</sup> <a name="outputSchema" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.outputSchema"></a>

```typescript
public readonly outputSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig</a>

---


### DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference <a name="DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.resetTableId">resetTableId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTableId` <a name="resetTableId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.resetTableId"></a>

```typescript
public resetTableId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable</a>

---


### DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference <a name="DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.putOutputConfig">putOutputConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOutputConfig` <a name="putOutputConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.putOutputConfig"></a>

```typescript
public putOutputConfig(value: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.outputConfigInput">outputConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindings">DataLossPreventionJobTriggerInspectJobActionsSaveFindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.outputConfig"></a>

```typescript
public readonly outputConfig: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference</a>

---

##### `outputConfigInput`<sup>Optional</sup> <a name="outputConfigInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.outputConfigInput"></a>

```typescript
public readonly outputConfigInput: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig">DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobActionsSaveFindings;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsSaveFindings">DataLossPreventionJobTriggerInspectJobActionsSaveFindings</a>

---


### DataLossPreventionJobTriggerInspectJobOutputReference <a name="DataLossPreventionJobTriggerInspectJobOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.putStorageConfig">putStorageConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.putActions"></a>

```typescript
public putActions(value: IResolvable | DataLossPreventionJobTriggerInspectJobActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.putActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions">DataLossPreventionJobTriggerInspectJobActions</a>[]

---

##### `putStorageConfig` <a name="putStorageConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.putStorageConfig"></a>

```typescript
public putStorageConfig(value: DataLossPreventionJobTriggerInspectJobStorageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.putStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig">DataLossPreventionJobTriggerInspectJobStorageConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList">DataLossPreventionJobTriggerInspectJobActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.actionsInput">actionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions">DataLossPreventionJobTriggerInspectJobActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.inspectTemplateNameInput">inspectTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.storageConfigInput">storageConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig">DataLossPreventionJobTriggerInspectJobStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.inspectTemplateName">inspectTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJob">DataLossPreventionJobTriggerInspectJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.actions"></a>

```typescript
public readonly actions: DataLossPreventionJobTriggerInspectJobActionsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActionsList">DataLossPreventionJobTriggerInspectJobActionsList</a>

---

##### `storageConfig`<sup>Required</sup> <a name="storageConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.storageConfig"></a>

```typescript
public readonly storageConfig: DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | DataLossPreventionJobTriggerInspectJobActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobActions">DataLossPreventionJobTriggerInspectJobActions</a>[]

---

##### `inspectTemplateNameInput`<sup>Optional</sup> <a name="inspectTemplateNameInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.inspectTemplateNameInput"></a>

```typescript
public readonly inspectTemplateNameInput: string;
```

- *Type:* string

---

##### `storageConfigInput`<sup>Optional</sup> <a name="storageConfigInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.storageConfigInput"></a>

```typescript
public readonly storageConfigInput: DataLossPreventionJobTriggerInspectJobStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig">DataLossPreventionJobTriggerInspectJobStorageConfig</a>

---

##### `inspectTemplateName`<sup>Required</sup> <a name="inspectTemplateName" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.inspectTemplateName"></a>

```typescript
public readonly inspectTemplateName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJob;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJob">DataLossPreventionJobTriggerInspectJob</a>

---


### DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList <a name="DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.get"></a>

```typescript
public get(index: number): DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a>[]

---


### DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference <a name="DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a> | cdktf.IResolvable

---


### DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference <a name="DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.putIdentifyingFields">putIdentifyingFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.putTableReference">putTableReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resetIdentifyingFields">resetIdentifyingFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resetRowsLimit">resetRowsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resetRowsLimitPercent">resetRowsLimitPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resetSampleMethod">resetSampleMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdentifyingFields` <a name="putIdentifyingFields" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.putIdentifyingFields"></a>

```typescript
public putIdentifyingFields(value: IResolvable | DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.putIdentifyingFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a>[]

---

##### `putTableReference` <a name="putTableReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.putTableReference"></a>

```typescript
public putTableReference(value: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.putTableReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference</a>

---

##### `resetIdentifyingFields` <a name="resetIdentifyingFields" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resetIdentifyingFields"></a>

```typescript
public resetIdentifyingFields(): void
```

##### `resetRowsLimit` <a name="resetRowsLimit" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resetRowsLimit"></a>

```typescript
public resetRowsLimit(): void
```

##### `resetRowsLimitPercent` <a name="resetRowsLimitPercent" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resetRowsLimitPercent"></a>

```typescript
public resetRowsLimitPercent(): void
```

##### `resetSampleMethod` <a name="resetSampleMethod" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.resetSampleMethod"></a>

```typescript
public resetSampleMethod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.identifyingFields">identifyingFields</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.tableReference">tableReference</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.identifyingFieldsInput">identifyingFieldsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.rowsLimitInput">rowsLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.rowsLimitPercentInput">rowsLimitPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.sampleMethodInput">sampleMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.tableReferenceInput">tableReferenceInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.rowsLimit">rowsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.rowsLimitPercent">rowsLimitPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.sampleMethod">sampleMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifyingFields`<sup>Required</sup> <a name="identifyingFields" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.identifyingFields"></a>

```typescript
public readonly identifyingFields: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList</a>

---

##### `tableReference`<sup>Required</sup> <a name="tableReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.tableReference"></a>

```typescript
public readonly tableReference: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference</a>

---

##### `identifyingFieldsInput`<sup>Optional</sup> <a name="identifyingFieldsInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.identifyingFieldsInput"></a>

```typescript
public readonly identifyingFieldsInput: IResolvable | DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields</a>[]

---

##### `rowsLimitInput`<sup>Optional</sup> <a name="rowsLimitInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.rowsLimitInput"></a>

```typescript
public readonly rowsLimitInput: number;
```

- *Type:* number

---

##### `rowsLimitPercentInput`<sup>Optional</sup> <a name="rowsLimitPercentInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.rowsLimitPercentInput"></a>

```typescript
public readonly rowsLimitPercentInput: number;
```

- *Type:* number

---

##### `sampleMethodInput`<sup>Optional</sup> <a name="sampleMethodInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.sampleMethodInput"></a>

```typescript
public readonly sampleMethodInput: string;
```

- *Type:* string

---

##### `tableReferenceInput`<sup>Optional</sup> <a name="tableReferenceInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.tableReferenceInput"></a>

```typescript
public readonly tableReferenceInput: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference</a>

---

##### `rowsLimit`<sup>Required</sup> <a name="rowsLimit" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.rowsLimit"></a>

```typescript
public readonly rowsLimit: number;
```

- *Type:* number

---

##### `rowsLimitPercent`<sup>Required</sup> <a name="rowsLimitPercent" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.rowsLimitPercent"></a>

```typescript
public readonly rowsLimitPercent: number;
```

- *Type:* number

---

##### `sampleMethod`<sup>Required</sup> <a name="sampleMethod" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.sampleMethod"></a>

```typescript
public readonly sampleMethod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions</a>

---


### DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference <a name="DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference</a>

---


### DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference <a name="DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.putRegexFileSet">putRegexFileSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.resetRegexFileSet">resetRegexFileSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRegexFileSet` <a name="putRegexFileSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.putRegexFileSet"></a>

```typescript
public putRegexFileSet(value: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.putRegexFileSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet</a>

---

##### `resetRegexFileSet` <a name="resetRegexFileSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.resetRegexFileSet"></a>

```typescript
public resetRegexFileSet(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.regexFileSet">regexFileSet</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.regexFileSetInput">regexFileSetInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexFileSet`<sup>Required</sup> <a name="regexFileSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.regexFileSet"></a>

```typescript
public readonly regexFileSet: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference</a>

---

##### `regexFileSetInput`<sup>Optional</sup> <a name="regexFileSetInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.regexFileSetInput"></a>

```typescript
public readonly regexFileSetInput: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet</a>

---


### DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference <a name="DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.resetExcludeRegex">resetExcludeRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.resetIncludeRegex">resetIncludeRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeRegex` <a name="resetExcludeRegex" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.resetExcludeRegex"></a>

```typescript
public resetExcludeRegex(): void
```

##### `resetIncludeRegex` <a name="resetIncludeRegex" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.resetIncludeRegex"></a>

```typescript
public resetIncludeRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.excludeRegexInput">excludeRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.includeRegexInput">includeRegexInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.excludeRegex">excludeRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.includeRegex">includeRegex</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `excludeRegexInput`<sup>Optional</sup> <a name="excludeRegexInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.excludeRegexInput"></a>

```typescript
public readonly excludeRegexInput: string[];
```

- *Type:* string[]

---

##### `includeRegexInput`<sup>Optional</sup> <a name="includeRegexInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.includeRegexInput"></a>

```typescript
public readonly includeRegexInput: string[];
```

- *Type:* string[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `excludeRegex`<sup>Required</sup> <a name="excludeRegex" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.excludeRegex"></a>

```typescript
public readonly excludeRegex: string[];
```

- *Type:* string[]

---

##### `includeRegex`<sup>Required</sup> <a name="includeRegex" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.includeRegex"></a>

```typescript
public readonly includeRegex: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet</a>

---


### DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference <a name="DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.putFileSet">putFileSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetBytesLimitPerFile">resetBytesLimitPerFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetBytesLimitPerFilePercent">resetBytesLimitPerFilePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetFilesLimitPercent">resetFilesLimitPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetFileTypes">resetFileTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetSampleMethod">resetSampleMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFileSet` <a name="putFileSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.putFileSet"></a>

```typescript
public putFileSet(value: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.putFileSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet</a>

---

##### `resetBytesLimitPerFile` <a name="resetBytesLimitPerFile" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetBytesLimitPerFile"></a>

```typescript
public resetBytesLimitPerFile(): void
```

##### `resetBytesLimitPerFilePercent` <a name="resetBytesLimitPerFilePercent" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetBytesLimitPerFilePercent"></a>

```typescript
public resetBytesLimitPerFilePercent(): void
```

##### `resetFilesLimitPercent` <a name="resetFilesLimitPercent" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetFilesLimitPercent"></a>

```typescript
public resetFilesLimitPercent(): void
```

##### `resetFileTypes` <a name="resetFileTypes" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetFileTypes"></a>

```typescript
public resetFileTypes(): void
```

##### `resetSampleMethod` <a name="resetSampleMethod" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.resetSampleMethod"></a>

```typescript
public resetSampleMethod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fileSet">fileSet</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.bytesLimitPerFileInput">bytesLimitPerFileInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.bytesLimitPerFilePercentInput">bytesLimitPerFilePercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fileSetInput">fileSetInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.filesLimitPercentInput">filesLimitPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fileTypesInput">fileTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.sampleMethodInput">sampleMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.bytesLimitPerFile">bytesLimitPerFile</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.bytesLimitPerFilePercent">bytesLimitPerFilePercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.filesLimitPercent">filesLimitPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fileTypes">fileTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.sampleMethod">sampleMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSet`<sup>Required</sup> <a name="fileSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fileSet"></a>

```typescript
public readonly fileSet: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference</a>

---

##### `bytesLimitPerFileInput`<sup>Optional</sup> <a name="bytesLimitPerFileInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.bytesLimitPerFileInput"></a>

```typescript
public readonly bytesLimitPerFileInput: number;
```

- *Type:* number

---

##### `bytesLimitPerFilePercentInput`<sup>Optional</sup> <a name="bytesLimitPerFilePercentInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.bytesLimitPerFilePercentInput"></a>

```typescript
public readonly bytesLimitPerFilePercentInput: number;
```

- *Type:* number

---

##### `fileSetInput`<sup>Optional</sup> <a name="fileSetInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fileSetInput"></a>

```typescript
public readonly fileSetInput: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet</a>

---

##### `filesLimitPercentInput`<sup>Optional</sup> <a name="filesLimitPercentInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.filesLimitPercentInput"></a>

```typescript
public readonly filesLimitPercentInput: number;
```

- *Type:* number

---

##### `fileTypesInput`<sup>Optional</sup> <a name="fileTypesInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fileTypesInput"></a>

```typescript
public readonly fileTypesInput: string[];
```

- *Type:* string[]

---

##### `sampleMethodInput`<sup>Optional</sup> <a name="sampleMethodInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.sampleMethodInput"></a>

```typescript
public readonly sampleMethodInput: string;
```

- *Type:* string

---

##### `bytesLimitPerFile`<sup>Required</sup> <a name="bytesLimitPerFile" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.bytesLimitPerFile"></a>

```typescript
public readonly bytesLimitPerFile: number;
```

- *Type:* number

---

##### `bytesLimitPerFilePercent`<sup>Required</sup> <a name="bytesLimitPerFilePercent" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.bytesLimitPerFilePercent"></a>

```typescript
public readonly bytesLimitPerFilePercent: number;
```

- *Type:* number

---

##### `filesLimitPercent`<sup>Required</sup> <a name="filesLimitPercent" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.filesLimitPercent"></a>

```typescript
public readonly filesLimitPercent: number;
```

- *Type:* number

---

##### `fileTypes`<sup>Required</sup> <a name="fileTypes" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.fileTypes"></a>

```typescript
public readonly fileTypes: string[];
```

- *Type:* string[]

---

##### `sampleMethod`<sup>Required</sup> <a name="sampleMethod" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.sampleMethod"></a>

```typescript
public readonly sampleMethod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions</a>

---


### DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference <a name="DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind</a>

---


### DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference <a name="DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.putKind">putKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.putPartitionId">putPartitionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKind` <a name="putKind" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.putKind"></a>

```typescript
public putKind(value: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.putKind.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind</a>

---

##### `putPartitionId` <a name="putPartitionId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.putPartitionId"></a>

```typescript
public putPartitionId(value: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.putPartitionId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.kind">kind</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.partitionId">partitionId</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.kindInput">kindInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.partitionIdInput">partitionIdInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.kind"></a>

```typescript
public readonly kind: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference</a>

---

##### `partitionId`<sup>Required</sup> <a name="partitionId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.partitionId"></a>

```typescript
public readonly partitionId: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference</a>

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind</a>

---

##### `partitionIdInput`<sup>Optional</sup> <a name="partitionIdInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.partitionIdInput"></a>

```typescript
public readonly partitionIdInput: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions</a>

---


### DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference <a name="DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.resetNamespaceId">resetNamespaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespaceId` <a name="resetNamespaceId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.resetNamespaceId"></a>

```typescript
public resetNamespaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.namespaceIdInput">namespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.namespaceIdInput"></a>

```typescript
public readonly namespaceIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId</a>

---


### DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference <a name="DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.putTableOptions">putTableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resetRequiredFindingLabelKeys">resetRequiredFindingLabelKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resetTableOptions">resetTableOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTableOptions` <a name="putTableOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.putTableOptions"></a>

```typescript
public putTableOptions(value: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.putTableOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetRequiredFindingLabelKeys` <a name="resetRequiredFindingLabelKeys" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resetRequiredFindingLabelKeys"></a>

```typescript
public resetRequiredFindingLabelKeys(): void
```

##### `resetTableOptions` <a name="resetTableOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.resetTableOptions"></a>

```typescript
public resetTableOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.tableOptions">tableOptions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.requiredFindingLabelKeysInput">requiredFindingLabelKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.tableOptionsInput">tableOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.requiredFindingLabelKeys">requiredFindingLabelKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tableOptions`<sup>Required</sup> <a name="tableOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.tableOptions"></a>

```typescript
public readonly tableOptions: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requiredFindingLabelKeysInput`<sup>Optional</sup> <a name="requiredFindingLabelKeysInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.requiredFindingLabelKeysInput"></a>

```typescript
public readonly requiredFindingLabelKeysInput: string[];
```

- *Type:* string[]

---

##### `tableOptionsInput`<sup>Optional</sup> <a name="tableOptionsInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.tableOptionsInput"></a>

```typescript
public readonly tableOptionsInput: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requiredFindingLabelKeys`<sup>Required</sup> <a name="requiredFindingLabelKeys" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.requiredFindingLabelKeys"></a>

```typescript
public readonly requiredFindingLabelKeys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions</a>

---


### DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList <a name="DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.get"></a>

```typescript
public get(index: number): DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a>[]

---


### DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference <a name="DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a> | cdktf.IResolvable

---


### DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference <a name="DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.putIdentifyingFields">putIdentifyingFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.resetIdentifyingFields">resetIdentifyingFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdentifyingFields` <a name="putIdentifyingFields" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.putIdentifyingFields"></a>

```typescript
public putIdentifyingFields(value: IResolvable | DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.putIdentifyingFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a>[]

---

##### `resetIdentifyingFields` <a name="resetIdentifyingFields" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.resetIdentifyingFields"></a>

```typescript
public resetIdentifyingFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.identifyingFields">identifyingFields</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.identifyingFieldsInput">identifyingFieldsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifyingFields`<sup>Required</sup> <a name="identifyingFields" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.identifyingFields"></a>

```typescript
public readonly identifyingFields: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList</a>

---

##### `identifyingFieldsInput`<sup>Optional</sup> <a name="identifyingFieldsInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.identifyingFieldsInput"></a>

```typescript
public readonly identifyingFieldsInput: IResolvable | DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions</a>

---


### DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference <a name="DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putBigQueryOptions">putBigQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putCloudStorageOptions">putCloudStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putDatastoreOptions">putDatastoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putHybridOptions">putHybridOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putTimespanConfig">putTimespanConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetBigQueryOptions">resetBigQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetCloudStorageOptions">resetCloudStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetDatastoreOptions">resetDatastoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetHybridOptions">resetHybridOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetTimespanConfig">resetTimespanConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBigQueryOptions` <a name="putBigQueryOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putBigQueryOptions"></a>

```typescript
public putBigQueryOptions(value: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putBigQueryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions</a>

---

##### `putCloudStorageOptions` <a name="putCloudStorageOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putCloudStorageOptions"></a>

```typescript
public putCloudStorageOptions(value: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putCloudStorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions</a>

---

##### `putDatastoreOptions` <a name="putDatastoreOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putDatastoreOptions"></a>

```typescript
public putDatastoreOptions(value: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putDatastoreOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions</a>

---

##### `putHybridOptions` <a name="putHybridOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putHybridOptions"></a>

```typescript
public putHybridOptions(value: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putHybridOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions</a>

---

##### `putTimespanConfig` <a name="putTimespanConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putTimespanConfig"></a>

```typescript
public putTimespanConfig(value: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.putTimespanConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig</a>

---

##### `resetBigQueryOptions` <a name="resetBigQueryOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetBigQueryOptions"></a>

```typescript
public resetBigQueryOptions(): void
```

##### `resetCloudStorageOptions` <a name="resetCloudStorageOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetCloudStorageOptions"></a>

```typescript
public resetCloudStorageOptions(): void
```

##### `resetDatastoreOptions` <a name="resetDatastoreOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetDatastoreOptions"></a>

```typescript
public resetDatastoreOptions(): void
```

##### `resetHybridOptions` <a name="resetHybridOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetHybridOptions"></a>

```typescript
public resetHybridOptions(): void
```

##### `resetTimespanConfig` <a name="resetTimespanConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.resetTimespanConfig"></a>

```typescript
public resetTimespanConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.bigQueryOptions">bigQueryOptions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.cloudStorageOptions">cloudStorageOptions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.datastoreOptions">datastoreOptions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.hybridOptions">hybridOptions</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.timespanConfig">timespanConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.bigQueryOptionsInput">bigQueryOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.cloudStorageOptionsInput">cloudStorageOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.datastoreOptionsInput">datastoreOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.hybridOptionsInput">hybridOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.timespanConfigInput">timespanConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig">DataLossPreventionJobTriggerInspectJobStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bigQueryOptions`<sup>Required</sup> <a name="bigQueryOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.bigQueryOptions"></a>

```typescript
public readonly bigQueryOptions: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference</a>

---

##### `cloudStorageOptions`<sup>Required</sup> <a name="cloudStorageOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.cloudStorageOptions"></a>

```typescript
public readonly cloudStorageOptions: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference</a>

---

##### `datastoreOptions`<sup>Required</sup> <a name="datastoreOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.datastoreOptions"></a>

```typescript
public readonly datastoreOptions: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference</a>

---

##### `hybridOptions`<sup>Required</sup> <a name="hybridOptions" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.hybridOptions"></a>

```typescript
public readonly hybridOptions: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference</a>

---

##### `timespanConfig`<sup>Required</sup> <a name="timespanConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.timespanConfig"></a>

```typescript
public readonly timespanConfig: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference</a>

---

##### `bigQueryOptionsInput`<sup>Optional</sup> <a name="bigQueryOptionsInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.bigQueryOptionsInput"></a>

```typescript
public readonly bigQueryOptionsInput: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions">DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions</a>

---

##### `cloudStorageOptionsInput`<sup>Optional</sup> <a name="cloudStorageOptionsInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.cloudStorageOptionsInput"></a>

```typescript
public readonly cloudStorageOptionsInput: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions">DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions</a>

---

##### `datastoreOptionsInput`<sup>Optional</sup> <a name="datastoreOptionsInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.datastoreOptionsInput"></a>

```typescript
public readonly datastoreOptionsInput: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions">DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions</a>

---

##### `hybridOptionsInput`<sup>Optional</sup> <a name="hybridOptionsInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.hybridOptionsInput"></a>

```typescript
public readonly hybridOptionsInput: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions">DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions</a>

---

##### `timespanConfigInput`<sup>Optional</sup> <a name="timespanConfigInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.timespanConfigInput"></a>

```typescript
public readonly timespanConfigInput: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfig">DataLossPreventionJobTriggerInspectJobStorageConfig</a>

---


### DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference <a name="DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.putTimestampField">putTimestampField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resetEnableAutoPopulationOfTimespanConfig">resetEnableAutoPopulationOfTimespanConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimestampField` <a name="putTimestampField" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.putTimestampField"></a>

```typescript
public putTimestampField(value: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.putTimestampField.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField</a>

---

##### `resetEnableAutoPopulationOfTimespanConfig` <a name="resetEnableAutoPopulationOfTimespanConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resetEnableAutoPopulationOfTimespanConfig"></a>

```typescript
public resetEnableAutoPopulationOfTimespanConfig(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.timestampField">timestampField</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.enableAutoPopulationOfTimespanConfigInput">enableAutoPopulationOfTimespanConfigInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.timestampFieldInput">timestampFieldInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.enableAutoPopulationOfTimespanConfig">enableAutoPopulationOfTimespanConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timestampField`<sup>Required</sup> <a name="timestampField" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.timestampField"></a>

```typescript
public readonly timestampField: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference</a>

---

##### `enableAutoPopulationOfTimespanConfigInput`<sup>Optional</sup> <a name="enableAutoPopulationOfTimespanConfigInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.enableAutoPopulationOfTimespanConfigInput"></a>

```typescript
public readonly enableAutoPopulationOfTimespanConfigInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `timestampFieldInput`<sup>Optional</sup> <a name="timestampFieldInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.timestampFieldInput"></a>

```typescript
public readonly timestampFieldInput: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField</a>

---

##### `enableAutoPopulationOfTimespanConfig`<sup>Required</sup> <a name="enableAutoPopulationOfTimespanConfig" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.enableAutoPopulationOfTimespanConfig"></a>

```typescript
public readonly enableAutoPopulationOfTimespanConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig</a>

---


### DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference <a name="DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField">DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField</a>

---


### DataLossPreventionJobTriggerTimeoutsOutputReference <a name="DataLossPreventionJobTriggerTimeoutsOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeouts">DataLossPreventionJobTriggerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTimeouts">DataLossPreventionJobTriggerTimeouts</a> | cdktf.IResolvable

---


### DataLossPreventionJobTriggerTriggersList <a name="DataLossPreventionJobTriggerTriggersList" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.get"></a>

```typescript
public get(index: number): DataLossPreventionJobTriggerTriggersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggers">DataLossPreventionJobTriggerTriggers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLossPreventionJobTriggerTriggers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggers">DataLossPreventionJobTriggerTriggers</a>[]

---


### DataLossPreventionJobTriggerTriggersManualOutputReference <a name="DataLossPreventionJobTriggerTriggersManualOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManual">DataLossPreventionJobTriggerTriggersManual</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerTriggersManual;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManual">DataLossPreventionJobTriggerTriggersManual</a>

---


### DataLossPreventionJobTriggerTriggersOutputReference <a name="DataLossPreventionJobTriggerTriggersOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.putManual">putManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.resetManual">resetManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManual` <a name="putManual" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.putManual"></a>

```typescript
public putManual(value: DataLossPreventionJobTriggerTriggersManual): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.putManual.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManual">DataLossPreventionJobTriggerTriggersManual</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.putSchedule"></a>

```typescript
public putSchedule(value: DataLossPreventionJobTriggerTriggersSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersSchedule">DataLossPreventionJobTriggerTriggersSchedule</a>

---

##### `resetManual` <a name="resetManual" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.resetManual"></a>

```typescript
public resetManual(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.property.manual">manual</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference">DataLossPreventionJobTriggerTriggersManualOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference">DataLossPreventionJobTriggerTriggersScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.property.manualInput">manualInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManual">DataLossPreventionJobTriggerTriggersManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersSchedule">DataLossPreventionJobTriggerTriggersSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggers">DataLossPreventionJobTriggerTriggers</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manual`<sup>Required</sup> <a name="manual" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.property.manual"></a>

```typescript
public readonly manual: DataLossPreventionJobTriggerTriggersManualOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManualOutputReference">DataLossPreventionJobTriggerTriggersManualOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.property.schedule"></a>

```typescript
public readonly schedule: DataLossPreventionJobTriggerTriggersScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference">DataLossPreventionJobTriggerTriggersScheduleOutputReference</a>

---

##### `manualInput`<sup>Optional</sup> <a name="manualInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.property.manualInput"></a>

```typescript
public readonly manualInput: DataLossPreventionJobTriggerTriggersManual;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersManual">DataLossPreventionJobTriggerTriggersManual</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: DataLossPreventionJobTriggerTriggersSchedule;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersSchedule">DataLossPreventionJobTriggerTriggersSchedule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerTriggers | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggers">DataLossPreventionJobTriggerTriggers</a> | cdktf.IResolvable

---


### DataLossPreventionJobTriggerTriggersScheduleOutputReference <a name="DataLossPreventionJobTriggerTriggersScheduleOutputReference" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.Initializer"></a>

```typescript
import { dataLossPreventionJobTrigger } from '@cdktf/provider-google'

new dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.resetRecurrencePeriodDuration">resetRecurrencePeriodDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRecurrencePeriodDuration` <a name="resetRecurrencePeriodDuration" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.resetRecurrencePeriodDuration"></a>

```typescript
public resetRecurrencePeriodDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.property.recurrencePeriodDurationInput">recurrencePeriodDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.property.recurrencePeriodDuration">recurrencePeriodDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersSchedule">DataLossPreventionJobTriggerTriggersSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recurrencePeriodDurationInput`<sup>Optional</sup> <a name="recurrencePeriodDurationInput" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.property.recurrencePeriodDurationInput"></a>

```typescript
public readonly recurrencePeriodDurationInput: string;
```

- *Type:* string

---

##### `recurrencePeriodDuration`<sup>Required</sup> <a name="recurrencePeriodDuration" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.property.recurrencePeriodDuration"></a>

```typescript
public readonly recurrencePeriodDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLossPreventionJobTriggerTriggersSchedule;
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionJobTrigger.DataLossPreventionJobTriggerTriggersSchedule">DataLossPreventionJobTriggerTriggersSchedule</a>

---



