# `healthcarePipelineJob` Submodule <a name="`healthcarePipelineJob` Submodule" id="@cdktf/provider-google.healthcarePipelineJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcarePipelineJob <a name="HealthcarePipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job google_healthcare_pipeline_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

new healthcarePipelineJob.HealthcarePipelineJob(scope: Construct, id: string, config: HealthcarePipelineJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig">HealthcarePipelineJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig">HealthcarePipelineJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putBackfillPipelineJob">putBackfillPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putMappingPipelineJob">putMappingPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putReconciliationPipelineJob">putReconciliationPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetBackfillPipelineJob">resetBackfillPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetDisableLineage">resetDisableLineage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetMappingPipelineJob">resetMappingPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetReconciliationPipelineJob">resetReconciliationPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackfillPipelineJob` <a name="putBackfillPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putBackfillPipelineJob"></a>

```typescript
public putBackfillPipelineJob(value: HealthcarePipelineJobBackfillPipelineJob): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putBackfillPipelineJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a>

---

##### `putMappingPipelineJob` <a name="putMappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putMappingPipelineJob"></a>

```typescript
public putMappingPipelineJob(value: HealthcarePipelineJobMappingPipelineJob): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putMappingPipelineJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a>

---

##### `putReconciliationPipelineJob` <a name="putReconciliationPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putReconciliationPipelineJob"></a>

```typescript
public putReconciliationPipelineJob(value: HealthcarePipelineJobReconciliationPipelineJob): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putReconciliationPipelineJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putTimeouts"></a>

```typescript
public putTimeouts(value: HealthcarePipelineJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a>

---

##### `resetBackfillPipelineJob` <a name="resetBackfillPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetBackfillPipelineJob"></a>

```typescript
public resetBackfillPipelineJob(): void
```

##### `resetDisableLineage` <a name="resetDisableLineage" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetDisableLineage"></a>

```typescript
public resetDisableLineage(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMappingPipelineJob` <a name="resetMappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetMappingPipelineJob"></a>

```typescript
public resetMappingPipelineJob(): void
```

##### `resetReconciliationPipelineJob` <a name="resetReconciliationPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetReconciliationPipelineJob"></a>

```typescript
public resetReconciliationPipelineJob(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HealthcarePipelineJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isConstruct"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

healthcarePipelineJob.HealthcarePipelineJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformElement"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

healthcarePipelineJob.HealthcarePipelineJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformResource"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

healthcarePipelineJob.HealthcarePipelineJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HealthcarePipelineJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthcarePipelineJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthcarePipelineJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HealthcarePipelineJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.backfillPipelineJob">backfillPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference">HealthcarePipelineJobBackfillPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.mappingPipelineJob">mappingPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference">HealthcarePipelineJobMappingPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.reconciliationPipelineJob">reconciliationPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference">HealthcarePipelineJobReconciliationPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference">HealthcarePipelineJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.backfillPipelineJobInput">backfillPipelineJobInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.disableLineageInput">disableLineageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.mappingPipelineJobInput">mappingPipelineJobInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.reconciliationPipelineJobInput">reconciliationPipelineJobInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.disableLineage">disableLineage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backfillPipelineJob`<sup>Required</sup> <a name="backfillPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.backfillPipelineJob"></a>

```typescript
public readonly backfillPipelineJob: HealthcarePipelineJobBackfillPipelineJobOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference">HealthcarePipelineJobBackfillPipelineJobOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `mappingPipelineJob`<sup>Required</sup> <a name="mappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.mappingPipelineJob"></a>

```typescript
public readonly mappingPipelineJob: HealthcarePipelineJobMappingPipelineJobOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference">HealthcarePipelineJobMappingPipelineJobOutputReference</a>

---

##### `reconciliationPipelineJob`<sup>Required</sup> <a name="reconciliationPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.reconciliationPipelineJob"></a>

```typescript
public readonly reconciliationPipelineJob: HealthcarePipelineJobReconciliationPipelineJobOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference">HealthcarePipelineJobReconciliationPipelineJobOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcarePipelineJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference">HealthcarePipelineJobTimeoutsOutputReference</a>

---

##### `backfillPipelineJobInput`<sup>Optional</sup> <a name="backfillPipelineJobInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.backfillPipelineJobInput"></a>

```typescript
public readonly backfillPipelineJobInput: HealthcarePipelineJobBackfillPipelineJob;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a>

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `disableLineageInput`<sup>Optional</sup> <a name="disableLineageInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.disableLineageInput"></a>

```typescript
public readonly disableLineageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mappingPipelineJobInput`<sup>Optional</sup> <a name="mappingPipelineJobInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.mappingPipelineJobInput"></a>

```typescript
public readonly mappingPipelineJobInput: HealthcarePipelineJobMappingPipelineJob;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `reconciliationPipelineJobInput`<sup>Optional</sup> <a name="reconciliationPipelineJobInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.reconciliationPipelineJobInput"></a>

```typescript
public readonly reconciliationPipelineJobInput: HealthcarePipelineJobReconciliationPipelineJob;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HealthcarePipelineJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `disableLineage`<sup>Required</sup> <a name="disableLineage" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.disableLineage"></a>

```typescript
public readonly disableLineage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcarePipelineJobBackfillPipelineJob <a name="HealthcarePipelineJobBackfillPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

const healthcarePipelineJobBackfillPipelineJob: healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob.property.mappingPipelineJob">mappingPipelineJob</a></code> | <code>string</code> | Specifies the mapping pipeline job to backfill, the name format should follow: projects/{projectId}/locations/{locationId}/datasets/{datasetId}/pipelineJobs/{pipelineJobId}. |

---

##### `mappingPipelineJob`<sup>Optional</sup> <a name="mappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob.property.mappingPipelineJob"></a>

```typescript
public readonly mappingPipelineJob: string;
```

- *Type:* string

Specifies the mapping pipeline job to backfill, the name format should follow: projects/{projectId}/locations/{locationId}/datasets/{datasetId}/pipelineJobs/{pipelineJobId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#mapping_pipeline_job HealthcarePipelineJob#mapping_pipeline_job}

---

### HealthcarePipelineJobConfig <a name="HealthcarePipelineJobConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

const healthcarePipelineJobConfig: healthcarePipelineJob.HealthcarePipelineJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.dataset">dataset</a></code> | <code>string</code> | Healthcare Dataset under which the Pipeline Job is to run. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.location">location</a></code> | <code>string</code> | Location where the Pipeline Job is to run. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the pipeline job. This field is user-assigned. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.backfillPipelineJob">backfillPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a></code> | backfill_pipeline_job block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.disableLineage">disableLineage</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, disables writing lineage for the pipeline. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#id HealthcarePipelineJob#id}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-supplied key-value pairs used to organize Pipeline Jobs. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.mappingPipelineJob">mappingPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a></code> | mapping_pipeline_job block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.reconciliationPipelineJob">reconciliationPipelineJob</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a></code> | reconciliation_pipeline_job block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

Healthcare Dataset under which the Pipeline Job is to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#dataset HealthcarePipelineJob#dataset}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location where the Pipeline Job is to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#location HealthcarePipelineJob#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the pipeline job. This field is user-assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#name HealthcarePipelineJob#name}

---

##### `backfillPipelineJob`<sup>Optional</sup> <a name="backfillPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.backfillPipelineJob"></a>

```typescript
public readonly backfillPipelineJob: HealthcarePipelineJobBackfillPipelineJob;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a>

backfill_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#backfill_pipeline_job HealthcarePipelineJob#backfill_pipeline_job}

---

##### `disableLineage`<sup>Optional</sup> <a name="disableLineage" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.disableLineage"></a>

```typescript
public readonly disableLineage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, disables writing lineage for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#disable_lineage HealthcarePipelineJob#disable_lineage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#id HealthcarePipelineJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-supplied key-value pairs used to organize Pipeline Jobs.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, and must conform to the following PCRE regular expression:
[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}
Label values are optional, must be between 1 and 63 characters long, have a
UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE
regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
No more than 64 labels can be associated with a given pipeline.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#labels HealthcarePipelineJob#labels}

---

##### `mappingPipelineJob`<sup>Optional</sup> <a name="mappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.mappingPipelineJob"></a>

```typescript
public readonly mappingPipelineJob: HealthcarePipelineJobMappingPipelineJob;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a>

mapping_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#mapping_pipeline_job HealthcarePipelineJob#mapping_pipeline_job}

---

##### `reconciliationPipelineJob`<sup>Optional</sup> <a name="reconciliationPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.reconciliationPipelineJob"></a>

```typescript
public readonly reconciliationPipelineJob: HealthcarePipelineJobReconciliationPipelineJob;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a>

reconciliation_pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#reconciliation_pipeline_job HealthcarePipelineJob#reconciliation_pipeline_job}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcarePipelineJobTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#timeouts HealthcarePipelineJob#timeouts}

---

### HealthcarePipelineJobMappingPipelineJob <a name="HealthcarePipelineJobMappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

const healthcarePipelineJobMappingPipelineJob: healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.mappingConfig">mappingConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a></code> | mapping_config block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.fhirStoreDestination">fhirStoreDestination</a></code> | <code>string</code> | If set, the mapping pipeline will write snapshots to this FHIR store without assigning stable IDs. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.fhirStreamingSource">fhirStreamingSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a></code> | fhir_streaming_source block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.reconciliationDestination">reconciliationDestination</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, a mapping pipeline will send output snapshots to the reconciliation pipeline in its dataset. |

---

##### `mappingConfig`<sup>Required</sup> <a name="mappingConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.mappingConfig"></a>

```typescript
public readonly mappingConfig: HealthcarePipelineJobMappingPipelineJobMappingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a>

mapping_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#mapping_config HealthcarePipelineJob#mapping_config}

---

##### `fhirStoreDestination`<sup>Optional</sup> <a name="fhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.fhirStoreDestination"></a>

```typescript
public readonly fhirStoreDestination: string;
```

- *Type:* string

If set, the mapping pipeline will write snapshots to this FHIR store without assigning stable IDs.

You must
grant your pipeline project's Cloud Healthcare Service
Agent serviceaccount healthcare.fhirResources.executeBundle
and healthcare.fhirResources.create permissions on the
destination store. The destination store must set
[disableReferentialIntegrity][FhirStore.disable_referential_integrity]
to true. The destination store must use FHIR version R4.
Format: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{fhirStoreID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#fhir_store_destination HealthcarePipelineJob#fhir_store_destination}

---

##### `fhirStreamingSource`<sup>Optional</sup> <a name="fhirStreamingSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.fhirStreamingSource"></a>

```typescript
public readonly fhirStreamingSource: HealthcarePipelineJobMappingPipelineJobFhirStreamingSource;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

fhir_streaming_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#fhir_streaming_source HealthcarePipelineJob#fhir_streaming_source}

---

##### `reconciliationDestination`<sup>Optional</sup> <a name="reconciliationDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob.property.reconciliationDestination"></a>

```typescript
public readonly reconciliationDestination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, a mapping pipeline will send output snapshots to the reconciliation pipeline in its dataset.

A reconciliation
pipeline must exist in this dataset before a mapping pipeline
with a reconciliation destination can be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#reconciliation_destination HealthcarePipelineJob#reconciliation_destination}

---

### HealthcarePipelineJobMappingPipelineJobFhirStreamingSource <a name="HealthcarePipelineJobMappingPipelineJobFhirStreamingSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

const healthcarePipelineJobMappingPipelineJobFhirStreamingSource: healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.fhirStore">fhirStore</a></code> | <code>string</code> | The path to the FHIR store in the format projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.description">description</a></code> | <code>string</code> | Describes the streaming FHIR data source. |

---

##### `fhirStore`<sup>Required</sup> <a name="fhirStore" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.fhirStore"></a>

```typescript
public readonly fhirStore: string;
```

- *Type:* string

The path to the FHIR store in the format projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#fhir_store HealthcarePipelineJob#fhir_store}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Describes the streaming FHIR data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#description HealthcarePipelineJob#description}

---

### HealthcarePipelineJobMappingPipelineJobMappingConfig <a name="HealthcarePipelineJobMappingPipelineJobMappingConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

const healthcarePipelineJobMappingPipelineJobMappingConfig: healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig.property.description">description</a></code> | <code>string</code> | Describes the mapping configuration. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig.property.whistleConfigSource">whistleConfigSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a></code> | whistle_config_source block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Describes the mapping configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#description HealthcarePipelineJob#description}

---

##### `whistleConfigSource`<sup>Optional</sup> <a name="whistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig.property.whistleConfigSource"></a>

```typescript
public readonly whistleConfigSource: HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

whistle_config_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#whistle_config_source HealthcarePipelineJob#whistle_config_source}

---

### HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource <a name="HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

const healthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource: healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.importUriPrefix">importUriPrefix</a></code> | <code>string</code> | Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.uri">uri</a></code> | <code>string</code> | Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl. |

---

##### `importUriPrefix`<sup>Required</sup> <a name="importUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.importUriPrefix"></a>

```typescript
public readonly importUriPrefix: string;
```

- *Type:* string

Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#import_uri_prefix HealthcarePipelineJob#import_uri_prefix}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#uri HealthcarePipelineJob#uri}

---

### HealthcarePipelineJobReconciliationPipelineJob <a name="HealthcarePipelineJobReconciliationPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

const healthcarePipelineJobReconciliationPipelineJob: healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.matchingUriPrefix">matchingUriPrefix</a></code> | <code>string</code> | Specifies the top level directory of the matching configs used in all mapping pipelines, which extract properties for resources to be matched on. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.mergeConfig">mergeConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a></code> | merge_config block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.fhirStoreDestination">fhirStoreDestination</a></code> | <code>string</code> | The harmonized FHIR store to write harmonized FHIR resources to, in the format of: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{id}. |

---

##### `matchingUriPrefix`<sup>Required</sup> <a name="matchingUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.matchingUriPrefix"></a>

```typescript
public readonly matchingUriPrefix: string;
```

- *Type:* string

Specifies the top level directory of the matching configs used in all mapping pipelines, which extract properties for resources to be matched on.

Example: gs://{bucket-id}/{path/to/matching/configs}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#matching_uri_prefix HealthcarePipelineJob#matching_uri_prefix}

---

##### `mergeConfig`<sup>Required</sup> <a name="mergeConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.mergeConfig"></a>

```typescript
public readonly mergeConfig: HealthcarePipelineJobReconciliationPipelineJobMergeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

merge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#merge_config HealthcarePipelineJob#merge_config}

---

##### `fhirStoreDestination`<sup>Optional</sup> <a name="fhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob.property.fhirStoreDestination"></a>

```typescript
public readonly fhirStoreDestination: string;
```

- *Type:* string

The harmonized FHIR store to write harmonized FHIR resources to, in the format of: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#fhir_store_destination HealthcarePipelineJob#fhir_store_destination}

---

### HealthcarePipelineJobReconciliationPipelineJobMergeConfig <a name="HealthcarePipelineJobReconciliationPipelineJobMergeConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

const healthcarePipelineJobReconciliationPipelineJobMergeConfig: healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.whistleConfigSource">whistleConfigSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a></code> | whistle_config_source block. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.description">description</a></code> | <code>string</code> | Describes the mapping configuration. |

---

##### `whistleConfigSource`<sup>Required</sup> <a name="whistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.whistleConfigSource"></a>

```typescript
public readonly whistleConfigSource: HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

whistle_config_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#whistle_config_source HealthcarePipelineJob#whistle_config_source}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Describes the mapping configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#description HealthcarePipelineJob#description}

---

### HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource <a name="HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

const healthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource: healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.importUriPrefix">importUriPrefix</a></code> | <code>string</code> | Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.uri">uri</a></code> | <code>string</code> | Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl. |

---

##### `importUriPrefix`<sup>Required</sup> <a name="importUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.importUriPrefix"></a>

```typescript
public readonly importUriPrefix: string;
```

- *Type:* string

Directory path where all the Whistle files are located. Example: gs://{bucket-id}/{path/to/import-root/dir}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#import_uri_prefix HealthcarePipelineJob#import_uri_prefix}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Main configuration file which has the entrypoint or the root function. Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#uri HealthcarePipelineJob#uri}

---

### HealthcarePipelineJobTimeouts <a name="HealthcarePipelineJobTimeouts" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

const healthcarePipelineJobTimeouts: healthcarePipelineJob.HealthcarePipelineJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#create HealthcarePipelineJob#create}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#delete HealthcarePipelineJob#delete}. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#update HealthcarePipelineJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#create HealthcarePipelineJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#delete HealthcarePipelineJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/healthcare_pipeline_job#update HealthcarePipelineJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcarePipelineJobBackfillPipelineJobOutputReference <a name="HealthcarePipelineJobBackfillPipelineJobOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

new healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.resetMappingPipelineJob">resetMappingPipelineJob</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMappingPipelineJob` <a name="resetMappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.resetMappingPipelineJob"></a>

```typescript
public resetMappingPipelineJob(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJobInput">mappingPipelineJobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJob">mappingPipelineJob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mappingPipelineJobInput`<sup>Optional</sup> <a name="mappingPipelineJobInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJobInput"></a>

```typescript
public readonly mappingPipelineJobInput: string;
```

- *Type:* string

---

##### `mappingPipelineJob`<sup>Required</sup> <a name="mappingPipelineJob" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.mappingPipelineJob"></a>

```typescript
public readonly mappingPipelineJob: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcarePipelineJobBackfillPipelineJob;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobBackfillPipelineJob">HealthcarePipelineJobBackfillPipelineJob</a>

---


### HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference <a name="HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

new healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStoreInput">fhirStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStore">fhirStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fhirStoreInput`<sup>Optional</sup> <a name="fhirStoreInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStoreInput"></a>

```typescript
public readonly fhirStoreInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fhirStore`<sup>Required</sup> <a name="fhirStore" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.fhirStore"></a>

```typescript
public readonly fhirStore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcarePipelineJobMappingPipelineJobFhirStreamingSource;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

---


### HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference <a name="HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

new healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.putWhistleConfigSource">putWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetWhistleConfigSource">resetWhistleConfigSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWhistleConfigSource` <a name="putWhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.putWhistleConfigSource"></a>

```typescript
public putWhistleConfigSource(value: HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.putWhistleConfigSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetWhistleConfigSource` <a name="resetWhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.resetWhistleConfigSource"></a>

```typescript
public resetWhistleConfigSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSource">whistleConfigSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSourceInput">whistleConfigSourceInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `whistleConfigSource`<sup>Required</sup> <a name="whistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSource"></a>

```typescript
public readonly whistleConfigSource: HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `whistleConfigSourceInput`<sup>Optional</sup> <a name="whistleConfigSourceInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.whistleConfigSourceInput"></a>

```typescript
public readonly whistleConfigSourceInput: HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcarePipelineJobMappingPipelineJobMappingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a>

---


### HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference <a name="HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

new healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput">importUriPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefix">importUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `importUriPrefixInput`<sup>Optional</sup> <a name="importUriPrefixInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput"></a>

```typescript
public readonly importUriPrefixInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `importUriPrefix`<sup>Required</sup> <a name="importUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.importUriPrefix"></a>

```typescript
public readonly importUriPrefix: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource">HealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource</a>

---


### HealthcarePipelineJobMappingPipelineJobOutputReference <a name="HealthcarePipelineJobMappingPipelineJobOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

new healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putFhirStreamingSource">putFhirStreamingSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putMappingConfig">putMappingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStoreDestination">resetFhirStoreDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStreamingSource">resetFhirStreamingSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetReconciliationDestination">resetReconciliationDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFhirStreamingSource` <a name="putFhirStreamingSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putFhirStreamingSource"></a>

```typescript
public putFhirStreamingSource(value: HealthcarePipelineJobMappingPipelineJobFhirStreamingSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putFhirStreamingSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

---

##### `putMappingConfig` <a name="putMappingConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putMappingConfig"></a>

```typescript
public putMappingConfig(value: HealthcarePipelineJobMappingPipelineJobMappingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.putMappingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a>

---

##### `resetFhirStoreDestination` <a name="resetFhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStoreDestination"></a>

```typescript
public resetFhirStoreDestination(): void
```

##### `resetFhirStreamingSource` <a name="resetFhirStreamingSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetFhirStreamingSource"></a>

```typescript
public resetFhirStreamingSource(): void
```

##### `resetReconciliationDestination` <a name="resetReconciliationDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.resetReconciliationDestination"></a>

```typescript
public resetReconciliationDestination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSource">fhirStreamingSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference">HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfig">mappingConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference">HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestinationInput">fhirStoreDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSourceInput">fhirStreamingSourceInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfigInput">mappingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestinationInput">reconciliationDestinationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestination">fhirStoreDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestination">reconciliationDestination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fhirStreamingSource`<sup>Required</sup> <a name="fhirStreamingSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSource"></a>

```typescript
public readonly fhirStreamingSource: HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference">HealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference</a>

---

##### `mappingConfig`<sup>Required</sup> <a name="mappingConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfig"></a>

```typescript
public readonly mappingConfig: HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference">HealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference</a>

---

##### `fhirStoreDestinationInput`<sup>Optional</sup> <a name="fhirStoreDestinationInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestinationInput"></a>

```typescript
public readonly fhirStoreDestinationInput: string;
```

- *Type:* string

---

##### `fhirStreamingSourceInput`<sup>Optional</sup> <a name="fhirStreamingSourceInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStreamingSourceInput"></a>

```typescript
public readonly fhirStreamingSourceInput: HealthcarePipelineJobMappingPipelineJobFhirStreamingSource;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobFhirStreamingSource">HealthcarePipelineJobMappingPipelineJobFhirStreamingSource</a>

---

##### `mappingConfigInput`<sup>Optional</sup> <a name="mappingConfigInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.mappingConfigInput"></a>

```typescript
public readonly mappingConfigInput: HealthcarePipelineJobMappingPipelineJobMappingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobMappingConfig">HealthcarePipelineJobMappingPipelineJobMappingConfig</a>

---

##### `reconciliationDestinationInput`<sup>Optional</sup> <a name="reconciliationDestinationInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestinationInput"></a>

```typescript
public readonly reconciliationDestinationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fhirStoreDestination`<sup>Required</sup> <a name="fhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.fhirStoreDestination"></a>

```typescript
public readonly fhirStoreDestination: string;
```

- *Type:* string

---

##### `reconciliationDestination`<sup>Required</sup> <a name="reconciliationDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.reconciliationDestination"></a>

```typescript
public readonly reconciliationDestination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcarePipelineJobMappingPipelineJob;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobMappingPipelineJob">HealthcarePipelineJobMappingPipelineJob</a>

---


### HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference <a name="HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

new healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.putWhistleConfigSource">putWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWhistleConfigSource` <a name="putWhistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.putWhistleConfigSource"></a>

```typescript
public putWhistleConfigSource(value: HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.putWhistleConfigSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSource">whistleConfigSource</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSourceInput">whistleConfigSourceInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `whistleConfigSource`<sup>Required</sup> <a name="whistleConfigSource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSource"></a>

```typescript
public readonly whistleConfigSource: HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `whistleConfigSourceInput`<sup>Optional</sup> <a name="whistleConfigSourceInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.whistleConfigSourceInput"></a>

```typescript
public readonly whistleConfigSourceInput: HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcarePipelineJobReconciliationPipelineJobMergeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

---


### HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference <a name="HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

new healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput">importUriPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefix">importUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `importUriPrefixInput`<sup>Optional</sup> <a name="importUriPrefixInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefixInput"></a>

```typescript
public readonly importUriPrefixInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `importUriPrefix`<sup>Required</sup> <a name="importUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.importUriPrefix"></a>

```typescript
public readonly importUriPrefix: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource">HealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource</a>

---


### HealthcarePipelineJobReconciliationPipelineJobOutputReference <a name="HealthcarePipelineJobReconciliationPipelineJobOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

new healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.putMergeConfig">putMergeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.resetFhirStoreDestination">resetFhirStoreDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMergeConfig` <a name="putMergeConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.putMergeConfig"></a>

```typescript
public putMergeConfig(value: HealthcarePipelineJobReconciliationPipelineJobMergeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.putMergeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

---

##### `resetFhirStoreDestination` <a name="resetFhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.resetFhirStoreDestination"></a>

```typescript
public resetFhirStoreDestination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfig">mergeConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference">HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestinationInput">fhirStoreDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefixInput">matchingUriPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfigInput">mergeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestination">fhirStoreDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefix">matchingUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mergeConfig`<sup>Required</sup> <a name="mergeConfig" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfig"></a>

```typescript
public readonly mergeConfig: HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference">HealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference</a>

---

##### `fhirStoreDestinationInput`<sup>Optional</sup> <a name="fhirStoreDestinationInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestinationInput"></a>

```typescript
public readonly fhirStoreDestinationInput: string;
```

- *Type:* string

---

##### `matchingUriPrefixInput`<sup>Optional</sup> <a name="matchingUriPrefixInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefixInput"></a>

```typescript
public readonly matchingUriPrefixInput: string;
```

- *Type:* string

---

##### `mergeConfigInput`<sup>Optional</sup> <a name="mergeConfigInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.mergeConfigInput"></a>

```typescript
public readonly mergeConfigInput: HealthcarePipelineJobReconciliationPipelineJobMergeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobMergeConfig">HealthcarePipelineJobReconciliationPipelineJobMergeConfig</a>

---

##### `fhirStoreDestination`<sup>Required</sup> <a name="fhirStoreDestination" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.fhirStoreDestination"></a>

```typescript
public readonly fhirStoreDestination: string;
```

- *Type:* string

---

##### `matchingUriPrefix`<sup>Required</sup> <a name="matchingUriPrefix" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.matchingUriPrefix"></a>

```typescript
public readonly matchingUriPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcarePipelineJobReconciliationPipelineJob;
```

- *Type:* <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobReconciliationPipelineJob">HealthcarePipelineJobReconciliationPipelineJob</a>

---


### HealthcarePipelineJobTimeoutsOutputReference <a name="HealthcarePipelineJobTimeoutsOutputReference" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { healthcarePipelineJob } from '@cdktf/provider-google'

new healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthcarePipelineJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.healthcarePipelineJob.HealthcarePipelineJobTimeouts">HealthcarePipelineJobTimeouts</a>

---



