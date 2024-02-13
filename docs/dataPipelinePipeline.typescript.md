# `dataPipelinePipeline` Submodule <a name="`dataPipelinePipeline` Submodule" id="@cdktf/provider-google.dataPipelinePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPipelinePipeline <a name="DataPipelinePipeline" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline google_data_pipeline_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

new dataPipelinePipeline.DataPipelinePipeline(scope: Construct, id: string, config: DataPipelinePipelineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig">DataPipelinePipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig">DataPipelinePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putScheduleInfo">putScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putWorkload">putWorkload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetPipelineSources">resetPipelineSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetScheduleInfo">resetScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetSchedulerServiceAccountEmail">resetSchedulerServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetWorkload">resetWorkload</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScheduleInfo` <a name="putScheduleInfo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putScheduleInfo"></a>

```typescript
public putScheduleInfo(value: DataPipelinePipelineScheduleInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putScheduleInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putTimeouts"></a>

```typescript
public putTimeouts(value: DataPipelinePipelineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts">DataPipelinePipelineTimeouts</a>

---

##### `putWorkload` <a name="putWorkload" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putWorkload"></a>

```typescript
public putWorkload(value: DataPipelinePipelineWorkload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.putWorkload.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPipelineSources` <a name="resetPipelineSources" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetPipelineSources"></a>

```typescript
public resetPipelineSources(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetScheduleInfo` <a name="resetScheduleInfo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetScheduleInfo"></a>

```typescript
public resetScheduleInfo(): void
```

##### `resetSchedulerServiceAccountEmail` <a name="resetSchedulerServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetSchedulerServiceAccountEmail"></a>

```typescript
public resetSchedulerServiceAccountEmail(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkload` <a name="resetWorkload" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.resetWorkload"></a>

```typescript
public resetWorkload(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataPipelinePipeline resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isConstruct"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

dataPipelinePipeline.DataPipelinePipeline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformElement"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

dataPipelinePipeline.DataPipelinePipeline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformResource"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

dataPipelinePipeline.DataPipelinePipeline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataPipelinePipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPipelinePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPipelinePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPipelinePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.jobCount">jobCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.lastUpdateTime">lastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.scheduleInfo">scheduleInfo</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference">DataPipelinePipelineScheduleInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference">DataPipelinePipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.workload">workload</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference">DataPipelinePipelineWorkloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.pipelineSourcesInput">pipelineSourcesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.scheduleInfoInput">scheduleInfoInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.schedulerServiceAccountEmailInput">schedulerServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts">DataPipelinePipelineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.workloadInput">workloadInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.pipelineSources">pipelineSources</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.schedulerServiceAccountEmail">schedulerServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `jobCount`<sup>Required</sup> <a name="jobCount" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.jobCount"></a>

```typescript
public readonly jobCount: number;
```

- *Type:* number

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.lastUpdateTime"></a>

```typescript
public readonly lastUpdateTime: string;
```

- *Type:* string

---

##### `scheduleInfo`<sup>Required</sup> <a name="scheduleInfo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.scheduleInfo"></a>

```typescript
public readonly scheduleInfo: DataPipelinePipelineScheduleInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference">DataPipelinePipelineScheduleInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.timeouts"></a>

```typescript
public readonly timeouts: DataPipelinePipelineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference">DataPipelinePipelineTimeoutsOutputReference</a>

---

##### `workload`<sup>Required</sup> <a name="workload" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.workload"></a>

```typescript
public readonly workload: DataPipelinePipelineWorkloadOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference">DataPipelinePipelineWorkloadOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pipelineSourcesInput`<sup>Optional</sup> <a name="pipelineSourcesInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.pipelineSourcesInput"></a>

```typescript
public readonly pipelineSourcesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `scheduleInfoInput`<sup>Optional</sup> <a name="scheduleInfoInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.scheduleInfoInput"></a>

```typescript
public readonly scheduleInfoInput: DataPipelinePipelineScheduleInfo;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a>

---

##### `schedulerServiceAccountEmailInput`<sup>Optional</sup> <a name="schedulerServiceAccountEmailInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.schedulerServiceAccountEmailInput"></a>

```typescript
public readonly schedulerServiceAccountEmailInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataPipelinePipelineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts">DataPipelinePipelineTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `workloadInput`<sup>Optional</sup> <a name="workloadInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.workloadInput"></a>

```typescript
public readonly workloadInput: DataPipelinePipelineWorkload;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pipelineSources`<sup>Required</sup> <a name="pipelineSources" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.pipelineSources"></a>

```typescript
public readonly pipelineSources: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `schedulerServiceAccountEmail`<sup>Required</sup> <a name="schedulerServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.schedulerServiceAccountEmail"></a>

```typescript
public readonly schedulerServiceAccountEmail: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipeline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPipelinePipelineConfig <a name="DataPipelinePipelineConfig" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

const dataPipelinePipelineConfig: dataPipelinePipeline.DataPipelinePipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.name">name</a></code> | <code>string</code> | "The pipeline name. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.state">state</a></code> | <code>string</code> | The state of the pipeline. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.type">type</a></code> | <code>string</code> | The type of the pipeline. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_). |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#id DataPipelinePipeline#id}. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.pipelineSources">pipelineSources</a></code> | <code>{[ key: string ]: string}</code> | The sources of the pipeline (for example, Dataplex). |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#project DataPipelinePipeline#project}. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.region">region</a></code> | <code>string</code> | A reference to the region. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.scheduleInfo">scheduleInfo</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a></code> | schedule_info block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.schedulerServiceAccountEmail">schedulerServiceAccountEmail</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts">DataPipelinePipelineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.workload">workload</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a></code> | workload block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

"The pipeline name.

For example': 'projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID."
"- PROJECT_ID can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see Identifying projects."
"LOCATION_ID is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling google.cloud.location.Locations.ListLocations. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in App Engine regions."
"PIPELINE_ID is the ID of the pipeline. Must be unique for the selected project and location."

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#name DataPipelinePipeline#name}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The state of the pipeline.

When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through pipelines.patch requests.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#state Possible values: ["STATE_UNSPECIFIED", "STATE_RESUMING", "STATE_ACTIVE", "STATE_STOPPING", "STATE_ARCHIVED", "STATE_PAUSED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#state DataPipelinePipeline#state}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the pipeline.

This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#pipelinetype Possible values: ["PIPELINE_TYPE_UNSPECIFIED", "PIPELINE_TYPE_BATCH", "PIPELINE_TYPE_STREAMING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#type DataPipelinePipeline#type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#display_name DataPipelinePipeline#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#id DataPipelinePipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pipelineSources`<sup>Optional</sup> <a name="pipelineSources" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.pipelineSources"></a>

```typescript
public readonly pipelineSources: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The sources of the pipeline (for example, Dataplex).

The keys and values are set by the corresponding sources during pipeline creation.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#pipeline_sources DataPipelinePipeline#pipeline_sources}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#project DataPipelinePipeline#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#region DataPipelinePipeline#region}

---

##### `scheduleInfo`<sup>Optional</sup> <a name="scheduleInfo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.scheduleInfo"></a>

```typescript
public readonly scheduleInfo: DataPipelinePipelineScheduleInfo;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a>

schedule_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#schedule_info DataPipelinePipeline#schedule_info}

---

##### `schedulerServiceAccountEmail`<sup>Optional</sup> <a name="schedulerServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.schedulerServiceAccountEmail"></a>

```typescript
public readonly schedulerServiceAccountEmail: string;
```

- *Type:* string

Optional.

A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#scheduler_service_account_email DataPipelinePipeline#scheduler_service_account_email}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataPipelinePipelineTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts">DataPipelinePipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#timeouts DataPipelinePipeline#timeouts}

---

##### `workload`<sup>Optional</sup> <a name="workload" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineConfig.property.workload"></a>

```typescript
public readonly workload: DataPipelinePipelineWorkload;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a>

workload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#workload DataPipelinePipeline#workload}

---

### DataPipelinePipelineScheduleInfo <a name="DataPipelinePipelineScheduleInfo" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

const dataPipelinePipelineScheduleInfo: dataPipelinePipeline.DataPipelinePipelineScheduleInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo.property.schedule">schedule</a></code> | <code>string</code> | Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo.property.timeZone">timeZone</a></code> | <code>string</code> | Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed. |

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#schedule DataPipelinePipeline#schedule}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#time_zone DataPipelinePipeline#time_zone}

---

### DataPipelinePipelineTimeouts <a name="DataPipelinePipelineTimeouts" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

const dataPipelinePipelineTimeouts: dataPipelinePipeline.DataPipelinePipelineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#create DataPipelinePipeline#create}. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#delete DataPipelinePipeline#delete}. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#update DataPipelinePipeline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#create DataPipelinePipeline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#delete DataPipelinePipeline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#update DataPipelinePipeline#update}.

---

### DataPipelinePipelineWorkload <a name="DataPipelinePipelineWorkload" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

const dataPipelinePipelineWorkload: dataPipelinePipeline.DataPipelinePipelineWorkload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload.property.dataflowFlexTemplateRequest">dataflowFlexTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a></code> | dataflow_flex_template_request block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload.property.dataflowLaunchTemplateRequest">dataflowLaunchTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a></code> | dataflow_launch_template_request block. |

---

##### `dataflowFlexTemplateRequest`<sup>Optional</sup> <a name="dataflowFlexTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload.property.dataflowFlexTemplateRequest"></a>

```typescript
public readonly dataflowFlexTemplateRequest: DataPipelinePipelineWorkloadDataflowFlexTemplateRequest;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

dataflow_flex_template_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#dataflow_flex_template_request DataPipelinePipeline#dataflow_flex_template_request}

---

##### `dataflowLaunchTemplateRequest`<sup>Optional</sup> <a name="dataflowLaunchTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload.property.dataflowLaunchTemplateRequest"></a>

```typescript
public readonly dataflowLaunchTemplateRequest: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

dataflow_launch_template_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#dataflow_launch_template_request DataPipelinePipeline#dataflow_launch_template_request}

---

### DataPipelinePipelineWorkloadDataflowFlexTemplateRequest <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

const dataPipelinePipelineWorkloadDataflowFlexTemplateRequest: dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.launchParameter">launchParameter</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a></code> | launch_parameter block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.location">location</a></code> | <code>string</code> | The regional endpoint to which to direct the request. For example, us-central1, us-west1. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.projectId">projectId</a></code> | <code>string</code> | The ID of the Cloud Platform project that the job belongs to. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.validateOnly">validateOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the request is validated but not actually executed. Defaults to false. |

---

##### `launchParameter`<sup>Required</sup> <a name="launchParameter" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.launchParameter"></a>

```typescript
public readonly launchParameter: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

launch_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#launch_parameter DataPipelinePipeline#launch_parameter}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The regional endpoint to which to direct the request. For example, us-central1, us-west1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#location DataPipelinePipeline#location}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the Cloud Platform project that the job belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#project_id DataPipelinePipeline#project_id}

---

##### `validateOnly`<sup>Optional</sup> <a name="validateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.validateOnly"></a>

```typescript
public readonly validateOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the request is validated but not actually executed. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#validate_only DataPipelinePipeline#validate_only}

---

### DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

const dataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter: dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.jobName">jobName</a></code> | <code>string</code> | The job name to use for the created job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.containerSpecGcsPath">containerSpecGcsPath</a></code> | <code>string</code> | Cloud Storage path to a file with a JSON-serialized ContainerSpec as content. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.launchOptions">launchOptions</a></code> | <code>{[ key: string ]: string}</code> | Launch options for this Flex Template job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | 'The parameters for the Flex Template. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.transformNameMappings">transformNameMappings</a></code> | <code>{[ key: string ]: string}</code> | 'Use this to pass transform name mappings for streaming update jobs. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.update">update</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set this to true if you are sending a request to update a running streaming job. |

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The job name to use for the created job.

For an update job request, the job name should be the same as the existing running job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#job_name DataPipelinePipeline#job_name}

---

##### `containerSpecGcsPath`<sup>Optional</sup> <a name="containerSpecGcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.containerSpecGcsPath"></a>

```typescript
public readonly containerSpecGcsPath: string;
```

- *Type:* string

Cloud Storage path to a file with a JSON-serialized ContainerSpec as content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#container_spec_gcs_path DataPipelinePipeline#container_spec_gcs_path}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.environment"></a>

```typescript
public readonly environment: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#environment DataPipelinePipeline#environment}

---

##### `launchOptions`<sup>Optional</sup> <a name="launchOptions" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.launchOptions"></a>

```typescript
public readonly launchOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Launch options for this Flex Template job.

This is a common set of options across languages and templates. This should not be used to pass job parameters.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#launch_options DataPipelinePipeline#launch_options}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

'The parameters for the Flex Template.

Example: {"numWorkers":"5"}'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#parameters DataPipelinePipeline#parameters}

---

##### `transformNameMappings`<sup>Optional</sup> <a name="transformNameMappings" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.transformNameMappings"></a>

```typescript
public readonly transformNameMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

'Use this to pass transform name mappings for streaming update jobs.

Example: {"oldTransformName":"newTransformName",...}'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#transform_name_mappings DataPipelinePipeline#transform_name_mappings}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.update"></a>

```typescript
public readonly update: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set this to true if you are sending a request to update a running streaming job.

When set, the job name should be the same as the running job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#update DataPipelinePipeline#update}

---

### DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

const dataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment: dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalExperiments">additionalExperiments</a></code> | <code>string[]</code> | Additional experiment flags for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalUserLabels">additionalUserLabels</a></code> | <code>{[ key: string ]: string}</code> | Additional user labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable Streaming Engine for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.flexrsGoal">flexrsGoal</a></code> | <code>string</code> | Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#FlexResourceSchedulingGoal Possible values: ["FLEXRS_UNSPECIFIED", "FLEXRS_SPEED_OPTIMIZED", "FLEXRS_COST_OPTIMIZED"]. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.ipConfiguration">ipConfiguration</a></code> | <code>string</code> | Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"]. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | 'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.machineType">machineType</a></code> | <code>string</code> | The machine type to use for the job. Defaults to the value from the template if not specified. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.network">network</a></code> | <code>string</code> | Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.numWorkers">numWorkers</a></code> | <code>number</code> | The initial number of Compute Engine instances for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | The email address of the service account to run the job as. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.subnetwork">subnetwork</a></code> | <code>string</code> | Subnetwork to which VMs will be assigned, if desired. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.tempLocation">tempLocation</a></code> | <code>string</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerRegion">workerRegion</a></code> | <code>string</code> | The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerZone">workerZone</a></code> | <code>string</code> | The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.zone">zone</a></code> | <code>string</code> | The Compute Engine availability zone for launching worker instances to run your pipeline. |

---

##### `additionalExperiments`<sup>Optional</sup> <a name="additionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalExperiments"></a>

```typescript
public readonly additionalExperiments: string[];
```

- *Type:* string[]

Additional experiment flags for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#additional_experiments DataPipelinePipeline#additional_experiments}

---

##### `additionalUserLabels`<sup>Optional</sup> <a name="additionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalUserLabels"></a>

```typescript
public readonly additionalUserLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional user labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.
'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#additional_user_labels DataPipelinePipeline#additional_user_labels}

---

##### `enableStreamingEngine`<sup>Optional</sup> <a name="enableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.enableStreamingEngine"></a>

```typescript
public readonly enableStreamingEngine: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable Streaming Engine for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#enable_streaming_engine DataPipelinePipeline#enable_streaming_engine}

---

##### `flexrsGoal`<sup>Optional</sup> <a name="flexrsGoal" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.flexrsGoal"></a>

```typescript
public readonly flexrsGoal: string;
```

- *Type:* string

Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#FlexResourceSchedulingGoal Possible values: ["FLEXRS_UNSPECIFIED", "FLEXRS_SPEED_OPTIMIZED", "FLEXRS_COST_OPTIMIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#flexrs_goal DataPipelinePipeline#flexrs_goal}

---

##### `ipConfiguration`<sup>Optional</sup> <a name="ipConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: string;
```

- *Type:* string

Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#ip_configuration DataPipelinePipeline#ip_configuration}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#kms_key_name DataPipelinePipeline#kms_key_name}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The machine type to use for the job. Defaults to the value from the template if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#machine_type DataPipelinePipeline#machine_type}

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#max_workers DataPipelinePipeline#max_workers}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#network DataPipelinePipeline#network}

---

##### `numWorkers`<sup>Optional</sup> <a name="numWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.numWorkers"></a>

```typescript
public readonly numWorkers: number;
```

- *Type:* number

The initial number of Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#num_workers DataPipelinePipeline#num_workers}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

The email address of the service account to run the job as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#service_account_email DataPipelinePipeline#service_account_email}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

Subnetwork to which VMs will be assigned, if desired.

You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#subnetwork DataPipelinePipeline#subnetwork}

---

##### `tempLocation`<sup>Optional</sup> <a name="tempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.tempLocation"></a>

```typescript
public readonly tempLocation: string;
```

- *Type:* string

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#temp_location DataPipelinePipeline#temp_location}

---

##### `workerRegion`<sup>Optional</sup> <a name="workerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerRegion"></a>

```typescript
public readonly workerRegion: string;
```

- *Type:* string

The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#worker_region DataPipelinePipeline#worker_region}

---

##### `workerZone`<sup>Optional</sup> <a name="workerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerZone"></a>

```typescript
public readonly workerZone: string;
```

- *Type:* string

The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#worker_zone DataPipelinePipeline#worker_zone}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The Compute Engine availability zone for launching worker instances to run your pipeline.

In the future, workerZone will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#zone DataPipelinePipeline#zone}

---

### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

const dataPipelinePipelineWorkloadDataflowLaunchTemplateRequest: dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.projectId">projectId</a></code> | <code>string</code> | The ID of the Cloud Platform project that the job belongs to. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.gcsPath">gcsPath</a></code> | <code>string</code> | A Cloud Storage path to the template from which to create the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.launchParameters">launchParameters</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a></code> | launch_parameters block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.location">location</a></code> | <code>string</code> | The regional endpoint to which to direct the request. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.validateOnly">validateOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#validate_only DataPipelinePipeline#validate_only}. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the Cloud Platform project that the job belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#project_id DataPipelinePipeline#project_id}

---

##### `gcsPath`<sup>Optional</sup> <a name="gcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.gcsPath"></a>

```typescript
public readonly gcsPath: string;
```

- *Type:* string

A Cloud Storage path to the template from which to create the job.

Must be a valid Cloud Storage URL, beginning with 'gs://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#gcs_path DataPipelinePipeline#gcs_path}

---

##### `launchParameters`<sup>Optional</sup> <a name="launchParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.launchParameters"></a>

```typescript
public readonly launchParameters: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

launch_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#launch_parameters DataPipelinePipeline#launch_parameters}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The regional endpoint to which to direct the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#location DataPipelinePipeline#location}

---

##### `validateOnly`<sup>Optional</sup> <a name="validateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.validateOnly"></a>

```typescript
public readonly validateOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#validate_only DataPipelinePipeline#validate_only}.

---

### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

const dataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters: dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.jobName">jobName</a></code> | <code>string</code> | The job name to use for the created job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | The runtime parameters to pass to the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.transformNameMapping">transformNameMapping</a></code> | <code>{[ key: string ]: string}</code> | Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.update">update</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state. |

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The job name to use for the created job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#job_name DataPipelinePipeline#job_name}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.environment"></a>

```typescript
public readonly environment: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#environment DataPipelinePipeline#environment}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The runtime parameters to pass to the job.

'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#parameters DataPipelinePipeline#parameters}

---

##### `transformNameMapping`<sup>Optional</sup> <a name="transformNameMapping" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.transformNameMapping"></a>

```typescript
public readonly transformNameMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.

Only applicable when updating a pipeline.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#transform_name_mapping DataPipelinePipeline#transform_name_mapping}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.update"></a>

```typescript
public readonly update: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#update DataPipelinePipeline#update}

---

### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

const dataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment: dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalExperiments">additionalExperiments</a></code> | <code>string[]</code> | Additional experiment flags for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalUserLabels">additionalUserLabels</a></code> | <code>{[ key: string ]: string}</code> | Additional user labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.bypassTempDirValidation">bypassTempDirValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to bypass the safety checks for the job's temporary directory. Use with caution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable Streaming Engine for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.ipConfiguration">ipConfiguration</a></code> | <code>string</code> | Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"]. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | 'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.machineType">machineType</a></code> | <code>string</code> | The machine type to use for the job. Defaults to the value from the template if not specified. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.network">network</a></code> | <code>string</code> | Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.numWorkers">numWorkers</a></code> | <code>number</code> | The initial number of Compute Engine instances for the job. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | The email address of the service account to run the job as. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.subnetwork">subnetwork</a></code> | <code>string</code> | Subnetwork to which VMs will be assigned, if desired. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.tempLocation">tempLocation</a></code> | <code>string</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerRegion">workerRegion</a></code> | <code>string</code> | The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerZone">workerZone</a></code> | <code>string</code> | The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.zone">zone</a></code> | <code>string</code> | The Compute Engine availability zone for launching worker instances to run your pipeline. |

---

##### `additionalExperiments`<sup>Optional</sup> <a name="additionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalExperiments"></a>

```typescript
public readonly additionalExperiments: string[];
```

- *Type:* string[]

Additional experiment flags for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#additional_experiments DataPipelinePipeline#additional_experiments}

---

##### `additionalUserLabels`<sup>Optional</sup> <a name="additionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalUserLabels"></a>

```typescript
public readonly additionalUserLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional user labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.
'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#additional_user_labels DataPipelinePipeline#additional_user_labels}

---

##### `bypassTempDirValidation`<sup>Optional</sup> <a name="bypassTempDirValidation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.bypassTempDirValidation"></a>

```typescript
public readonly bypassTempDirValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to bypass the safety checks for the job's temporary directory. Use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#bypass_temp_dir_validation DataPipelinePipeline#bypass_temp_dir_validation}

---

##### `enableStreamingEngine`<sup>Optional</sup> <a name="enableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.enableStreamingEngine"></a>

```typescript
public readonly enableStreamingEngine: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable Streaming Engine for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#enable_streaming_engine DataPipelinePipeline#enable_streaming_engine}

---

##### `ipConfiguration`<sup>Optional</sup> <a name="ipConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: string;
```

- *Type:* string

Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#ip_configuration DataPipelinePipeline#ip_configuration}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#kms_key_name DataPipelinePipeline#kms_key_name}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The machine type to use for the job. Defaults to the value from the template if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#machine_type DataPipelinePipeline#machine_type}

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#max_workers DataPipelinePipeline#max_workers}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#network DataPipelinePipeline#network}

---

##### `numWorkers`<sup>Optional</sup> <a name="numWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.numWorkers"></a>

```typescript
public readonly numWorkers: number;
```

- *Type:* number

The initial number of Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#num_workers DataPipelinePipeline#num_workers}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

The email address of the service account to run the job as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#service_account_email DataPipelinePipeline#service_account_email}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

Subnetwork to which VMs will be assigned, if desired.

You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#subnetwork DataPipelinePipeline#subnetwork}

---

##### `tempLocation`<sup>Optional</sup> <a name="tempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.tempLocation"></a>

```typescript
public readonly tempLocation: string;
```

- *Type:* string

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#temp_location DataPipelinePipeline#temp_location}

---

##### `workerRegion`<sup>Optional</sup> <a name="workerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerRegion"></a>

```typescript
public readonly workerRegion: string;
```

- *Type:* string

The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#worker_region DataPipelinePipeline#worker_region}

---

##### `workerZone`<sup>Optional</sup> <a name="workerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerZone"></a>

```typescript
public readonly workerZone: string;
```

- *Type:* string

The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#worker_zone DataPipelinePipeline#worker_zone}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The Compute Engine availability zone for launching worker instances to run your pipeline.

In the future, workerZone will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/data_pipeline_pipeline#zone DataPipelinePipeline#zone}

---

## Classes <a name="Classes" id="Classes"></a>

### DataPipelinePipelineScheduleInfoOutputReference <a name="DataPipelinePipelineScheduleInfoOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

new dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.nextJobTime">nextJobTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nextJobTime`<sup>Required</sup> <a name="nextJobTime" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.nextJobTime"></a>

```typescript
public readonly nextJobTime: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPipelinePipelineScheduleInfo;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineScheduleInfo">DataPipelinePipelineScheduleInfo</a>

---


### DataPipelinePipelineTimeoutsOutputReference <a name="DataPipelinePipelineTimeoutsOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

new dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts">DataPipelinePipelineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataPipelinePipelineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineTimeouts">DataPipelinePipelineTimeouts</a>

---


### DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

new dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalExperiments">resetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalUserLabels">resetAdditionalUserLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetEnableStreamingEngine">resetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetFlexrsGoal">resetFlexrsGoal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetIpConfiguration">resetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMaxWorkers">resetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNumWorkers">resetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetTempLocation">resetTempLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerRegion">resetWorkerRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerZone">resetWorkerZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalExperiments` <a name="resetAdditionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalExperiments"></a>

```typescript
public resetAdditionalExperiments(): void
```

##### `resetAdditionalUserLabels` <a name="resetAdditionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalUserLabels"></a>

```typescript
public resetAdditionalUserLabels(): void
```

##### `resetEnableStreamingEngine` <a name="resetEnableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetEnableStreamingEngine"></a>

```typescript
public resetEnableStreamingEngine(): void
```

##### `resetFlexrsGoal` <a name="resetFlexrsGoal" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetFlexrsGoal"></a>

```typescript
public resetFlexrsGoal(): void
```

##### `resetIpConfiguration` <a name="resetIpConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetIpConfiguration"></a>

```typescript
public resetIpConfiguration(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetMaxWorkers` <a name="resetMaxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMaxWorkers"></a>

```typescript
public resetMaxWorkers(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNumWorkers` <a name="resetNumWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNumWorkers"></a>

```typescript
public resetNumWorkers(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTempLocation` <a name="resetTempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetTempLocation"></a>

```typescript
public resetTempLocation(): void
```

##### `resetWorkerRegion` <a name="resetWorkerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerRegion"></a>

```typescript
public resetWorkerRegion(): void
```

##### `resetWorkerZone` <a name="resetWorkerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerZone"></a>

```typescript
public resetWorkerZone(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetZone"></a>

```typescript
public resetZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperimentsInput">additionalExperimentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabelsInput">additionalUserLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngineInput">enableStreamingEngineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoalInput">flexrsGoalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkersInput">maxWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkersInput">numWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocationInput">tempLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegionInput">workerRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZoneInput">workerZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperiments">additionalExperiments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabels">additionalUserLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoal">flexrsGoal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfiguration">ipConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkers">numWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocation">tempLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegion">workerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZone">workerZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalExperimentsInput`<sup>Optional</sup> <a name="additionalExperimentsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperimentsInput"></a>

```typescript
public readonly additionalExperimentsInput: string[];
```

- *Type:* string[]

---

##### `additionalUserLabelsInput`<sup>Optional</sup> <a name="additionalUserLabelsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabelsInput"></a>

```typescript
public readonly additionalUserLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enableStreamingEngineInput`<sup>Optional</sup> <a name="enableStreamingEngineInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngineInput"></a>

```typescript
public readonly enableStreamingEngineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `flexrsGoalInput`<sup>Optional</sup> <a name="flexrsGoalInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoalInput"></a>

```typescript
public readonly flexrsGoalInput: string;
```

- *Type:* string

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfigurationInput"></a>

```typescript
public readonly ipConfigurationInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `maxWorkersInput`<sup>Optional</sup> <a name="maxWorkersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkersInput"></a>

```typescript
public readonly maxWorkersInput: number;
```

- *Type:* number

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `numWorkersInput`<sup>Optional</sup> <a name="numWorkersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkersInput"></a>

```typescript
public readonly numWorkersInput: number;
```

- *Type:* number

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `tempLocationInput`<sup>Optional</sup> <a name="tempLocationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocationInput"></a>

```typescript
public readonly tempLocationInput: string;
```

- *Type:* string

---

##### `workerRegionInput`<sup>Optional</sup> <a name="workerRegionInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegionInput"></a>

```typescript
public readonly workerRegionInput: string;
```

- *Type:* string

---

##### `workerZoneInput`<sup>Optional</sup> <a name="workerZoneInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZoneInput"></a>

```typescript
public readonly workerZoneInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `additionalExperiments`<sup>Required</sup> <a name="additionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperiments"></a>

```typescript
public readonly additionalExperiments: string[];
```

- *Type:* string[]

---

##### `additionalUserLabels`<sup>Required</sup> <a name="additionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabels"></a>

```typescript
public readonly additionalUserLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enableStreamingEngine`<sup>Required</sup> <a name="enableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngine"></a>

```typescript
public readonly enableStreamingEngine: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `flexrsGoal`<sup>Required</sup> <a name="flexrsGoal" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoal"></a>

```typescript
public readonly flexrsGoal: string;
```

- *Type:* string

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `maxWorkers`<sup>Required</sup> <a name="maxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `numWorkers`<sup>Required</sup> <a name="numWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkers"></a>

```typescript
public readonly numWorkers: number;
```

- *Type:* number

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `tempLocation`<sup>Required</sup> <a name="tempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocation"></a>

```typescript
public readonly tempLocation: string;
```

- *Type:* string

---

##### `workerRegion`<sup>Required</sup> <a name="workerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegion"></a>

```typescript
public readonly workerRegion: string;
```

- *Type:* string

---

##### `workerZone`<sup>Required</sup> <a name="workerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZone"></a>

```typescript
public readonly workerZone: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

---


### DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

new dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetContainerSpecGcsPath">resetContainerSpecGcsPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetLaunchOptions">resetLaunchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetTransformNameMappings">resetTransformNameMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvironment` <a name="putEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.putEnvironment"></a>

```typescript
public putEnvironment(value: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

---

##### `resetContainerSpecGcsPath` <a name="resetContainerSpecGcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetContainerSpecGcsPath"></a>

```typescript
public resetContainerSpecGcsPath(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetLaunchOptions` <a name="resetLaunchOptions" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetLaunchOptions"></a>

```typescript
public resetLaunchOptions(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetTransformNameMappings` <a name="resetTransformNameMappings" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetTransformNameMappings"></a>

```typescript
public resetTransformNameMappings(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPathInput">containerSpecGcsPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environmentInput">environmentInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptionsInput">launchOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappingsInput">transformNameMappingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.updateInput">updateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPath">containerSpecGcsPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptions">launchOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappings">transformNameMappings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.update">update</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environment"></a>

```typescript
public readonly environment: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference</a>

---

##### `containerSpecGcsPathInput`<sup>Optional</sup> <a name="containerSpecGcsPathInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPathInput"></a>

```typescript
public readonly containerSpecGcsPathInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobNameInput"></a>

```typescript
public readonly jobNameInput: string;
```

- *Type:* string

---

##### `launchOptionsInput`<sup>Optional</sup> <a name="launchOptionsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptionsInput"></a>

```typescript
public readonly launchOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transformNameMappingsInput`<sup>Optional</sup> <a name="transformNameMappingsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappingsInput"></a>

```typescript
public readonly transformNameMappingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `containerSpecGcsPath`<sup>Required</sup> <a name="containerSpecGcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPath"></a>

```typescript
public readonly containerSpecGcsPath: string;
```

- *Type:* string

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `launchOptions`<sup>Required</sup> <a name="launchOptions" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptions"></a>

```typescript
public readonly launchOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transformNameMappings`<sup>Required</sup> <a name="transformNameMappings" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappings"></a>

```typescript
public readonly transformNameMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.update"></a>

```typescript
public readonly update: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

---


### DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference <a name="DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

new dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.putLaunchParameter">putLaunchParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resetValidateOnly">resetValidateOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLaunchParameter` <a name="putLaunchParameter" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.putLaunchParameter"></a>

```typescript
public putLaunchParameter(value: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.putLaunchParameter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

---

##### `resetValidateOnly` <a name="resetValidateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resetValidateOnly"></a>

```typescript
public resetValidateOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameter">launchParameter</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameterInput">launchParameterInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnlyInput">validateOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnly">validateOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchParameter`<sup>Required</sup> <a name="launchParameter" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameter"></a>

```typescript
public readonly launchParameter: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference</a>

---

##### `launchParameterInput`<sup>Optional</sup> <a name="launchParameterInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameterInput"></a>

```typescript
public readonly launchParameterInput: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `validateOnlyInput`<sup>Optional</sup> <a name="validateOnlyInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnlyInput"></a>

```typescript
public readonly validateOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `validateOnly`<sup>Required</sup> <a name="validateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnly"></a>

```typescript
public readonly validateOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPipelinePipelineWorkloadDataflowFlexTemplateRequest;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

---


### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

new dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalExperiments">resetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalUserLabels">resetAdditionalUserLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetBypassTempDirValidation">resetBypassTempDirValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetEnableStreamingEngine">resetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetIpConfiguration">resetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMaxWorkers">resetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNumWorkers">resetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetTempLocation">resetTempLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerRegion">resetWorkerRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerZone">resetWorkerZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalExperiments` <a name="resetAdditionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalExperiments"></a>

```typescript
public resetAdditionalExperiments(): void
```

##### `resetAdditionalUserLabels` <a name="resetAdditionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalUserLabels"></a>

```typescript
public resetAdditionalUserLabels(): void
```

##### `resetBypassTempDirValidation` <a name="resetBypassTempDirValidation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetBypassTempDirValidation"></a>

```typescript
public resetBypassTempDirValidation(): void
```

##### `resetEnableStreamingEngine` <a name="resetEnableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetEnableStreamingEngine"></a>

```typescript
public resetEnableStreamingEngine(): void
```

##### `resetIpConfiguration` <a name="resetIpConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetIpConfiguration"></a>

```typescript
public resetIpConfiguration(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetMaxWorkers` <a name="resetMaxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMaxWorkers"></a>

```typescript
public resetMaxWorkers(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNumWorkers` <a name="resetNumWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNumWorkers"></a>

```typescript
public resetNumWorkers(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTempLocation` <a name="resetTempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetTempLocation"></a>

```typescript
public resetTempLocation(): void
```

##### `resetWorkerRegion` <a name="resetWorkerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerRegion"></a>

```typescript
public resetWorkerRegion(): void
```

##### `resetWorkerZone` <a name="resetWorkerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerZone"></a>

```typescript
public resetWorkerZone(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetZone"></a>

```typescript
public resetZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperimentsInput">additionalExperimentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabelsInput">additionalUserLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidationInput">bypassTempDirValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngineInput">enableStreamingEngineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkersInput">maxWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkersInput">numWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocationInput">tempLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegionInput">workerRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZoneInput">workerZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperiments">additionalExperiments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabels">additionalUserLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidation">bypassTempDirValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfiguration">ipConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkers">numWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocation">tempLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegion">workerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZone">workerZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalExperimentsInput`<sup>Optional</sup> <a name="additionalExperimentsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperimentsInput"></a>

```typescript
public readonly additionalExperimentsInput: string[];
```

- *Type:* string[]

---

##### `additionalUserLabelsInput`<sup>Optional</sup> <a name="additionalUserLabelsInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabelsInput"></a>

```typescript
public readonly additionalUserLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bypassTempDirValidationInput`<sup>Optional</sup> <a name="bypassTempDirValidationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidationInput"></a>

```typescript
public readonly bypassTempDirValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStreamingEngineInput`<sup>Optional</sup> <a name="enableStreamingEngineInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngineInput"></a>

```typescript
public readonly enableStreamingEngineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfigurationInput"></a>

```typescript
public readonly ipConfigurationInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `maxWorkersInput`<sup>Optional</sup> <a name="maxWorkersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkersInput"></a>

```typescript
public readonly maxWorkersInput: number;
```

- *Type:* number

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `numWorkersInput`<sup>Optional</sup> <a name="numWorkersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkersInput"></a>

```typescript
public readonly numWorkersInput: number;
```

- *Type:* number

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `tempLocationInput`<sup>Optional</sup> <a name="tempLocationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocationInput"></a>

```typescript
public readonly tempLocationInput: string;
```

- *Type:* string

---

##### `workerRegionInput`<sup>Optional</sup> <a name="workerRegionInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegionInput"></a>

```typescript
public readonly workerRegionInput: string;
```

- *Type:* string

---

##### `workerZoneInput`<sup>Optional</sup> <a name="workerZoneInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZoneInput"></a>

```typescript
public readonly workerZoneInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `additionalExperiments`<sup>Required</sup> <a name="additionalExperiments" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperiments"></a>

```typescript
public readonly additionalExperiments: string[];
```

- *Type:* string[]

---

##### `additionalUserLabels`<sup>Required</sup> <a name="additionalUserLabels" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabels"></a>

```typescript
public readonly additionalUserLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bypassTempDirValidation`<sup>Required</sup> <a name="bypassTempDirValidation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidation"></a>

```typescript
public readonly bypassTempDirValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStreamingEngine`<sup>Required</sup> <a name="enableStreamingEngine" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngine"></a>

```typescript
public readonly enableStreamingEngine: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `maxWorkers`<sup>Required</sup> <a name="maxWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `numWorkers`<sup>Required</sup> <a name="numWorkers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkers"></a>

```typescript
public readonly numWorkers: number;
```

- *Type:* number

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `tempLocation`<sup>Required</sup> <a name="tempLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocation"></a>

```typescript
public readonly tempLocation: string;
```

- *Type:* string

---

##### `workerRegion`<sup>Required</sup> <a name="workerRegion" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegion"></a>

```typescript
public readonly workerRegion: string;
```

- *Type:* string

---

##### `workerZone`<sup>Required</sup> <a name="workerZone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZone"></a>

```typescript
public readonly workerZone: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

---


### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

new dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetTransformNameMapping">resetTransformNameMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvironment` <a name="putEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.putEnvironment"></a>

```typescript
public putEnvironment(value: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

---

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetTransformNameMapping` <a name="resetTransformNameMapping" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetTransformNameMapping"></a>

```typescript
public resetTransformNameMapping(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environmentInput">environmentInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMappingInput">transformNameMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.updateInput">updateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMapping">transformNameMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.update">update</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environment"></a>

```typescript
public readonly environment: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference</a>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobNameInput"></a>

```typescript
public readonly jobNameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transformNameMappingInput`<sup>Optional</sup> <a name="transformNameMappingInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMappingInput"></a>

```typescript
public readonly transformNameMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transformNameMapping`<sup>Required</sup> <a name="transformNameMapping" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMapping"></a>

```typescript
public readonly transformNameMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.update"></a>

```typescript
public readonly update: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

---


### DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference <a name="DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

new dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.putLaunchParameters">putLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetGcsPath">resetGcsPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLaunchParameters">resetLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetValidateOnly">resetValidateOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLaunchParameters` <a name="putLaunchParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.putLaunchParameters"></a>

```typescript
public putLaunchParameters(value: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.putLaunchParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

---

##### `resetGcsPath` <a name="resetGcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetGcsPath"></a>

```typescript
public resetGcsPath(): void
```

##### `resetLaunchParameters` <a name="resetLaunchParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLaunchParameters"></a>

```typescript
public resetLaunchParameters(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetValidateOnly` <a name="resetValidateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetValidateOnly"></a>

```typescript
public resetValidateOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParameters">launchParameters</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPathInput">gcsPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParametersInput">launchParametersInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnlyInput">validateOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPath">gcsPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnly">validateOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchParameters`<sup>Required</sup> <a name="launchParameters" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParameters"></a>

```typescript
public readonly launchParameters: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference</a>

---

##### `gcsPathInput`<sup>Optional</sup> <a name="gcsPathInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPathInput"></a>

```typescript
public readonly gcsPathInput: string;
```

- *Type:* string

---

##### `launchParametersInput`<sup>Optional</sup> <a name="launchParametersInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParametersInput"></a>

```typescript
public readonly launchParametersInput: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `validateOnlyInput`<sup>Optional</sup> <a name="validateOnlyInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnlyInput"></a>

```typescript
public readonly validateOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gcsPath`<sup>Required</sup> <a name="gcsPath" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPath"></a>

```typescript
public readonly gcsPath: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `validateOnly`<sup>Required</sup> <a name="validateOnly" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnly"></a>

```typescript
public readonly validateOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

---


### DataPipelinePipelineWorkloadOutputReference <a name="DataPipelinePipelineWorkloadOutputReference" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.Initializer"></a>

```typescript
import { dataPipelinePipeline } from '@cdktf/provider-google'

new dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowFlexTemplateRequest">putDataflowFlexTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowLaunchTemplateRequest">putDataflowLaunchTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resetDataflowFlexTemplateRequest">resetDataflowFlexTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resetDataflowLaunchTemplateRequest">resetDataflowLaunchTemplateRequest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataflowFlexTemplateRequest` <a name="putDataflowFlexTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowFlexTemplateRequest"></a>

```typescript
public putDataflowFlexTemplateRequest(value: DataPipelinePipelineWorkloadDataflowFlexTemplateRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowFlexTemplateRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

---

##### `putDataflowLaunchTemplateRequest` <a name="putDataflowLaunchTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowLaunchTemplateRequest"></a>

```typescript
public putDataflowLaunchTemplateRequest(value: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.putDataflowLaunchTemplateRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

---

##### `resetDataflowFlexTemplateRequest` <a name="resetDataflowFlexTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resetDataflowFlexTemplateRequest"></a>

```typescript
public resetDataflowFlexTemplateRequest(): void
```

##### `resetDataflowLaunchTemplateRequest` <a name="resetDataflowLaunchTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.resetDataflowLaunchTemplateRequest"></a>

```typescript
public resetDataflowLaunchTemplateRequest(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequest">dataflowFlexTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequest">dataflowLaunchTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequestInput">dataflowFlexTemplateRequestInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequestInput">dataflowLaunchTemplateRequestInput</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataflowFlexTemplateRequest`<sup>Required</sup> <a name="dataflowFlexTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequest"></a>

```typescript
public readonly dataflowFlexTemplateRequest: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference">DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference</a>

---

##### `dataflowLaunchTemplateRequest`<sup>Required</sup> <a name="dataflowLaunchTemplateRequest" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequest"></a>

```typescript
public readonly dataflowLaunchTemplateRequest: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference</a>

---

##### `dataflowFlexTemplateRequestInput`<sup>Optional</sup> <a name="dataflowFlexTemplateRequestInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequestInput"></a>

```typescript
public readonly dataflowFlexTemplateRequestInput: DataPipelinePipelineWorkloadDataflowFlexTemplateRequest;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowFlexTemplateRequest">DataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

---

##### `dataflowLaunchTemplateRequestInput`<sup>Optional</sup> <a name="dataflowLaunchTemplateRequestInput" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequestInput"></a>

```typescript
public readonly dataflowLaunchTemplateRequestInput: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPipelinePipelineWorkload;
```

- *Type:* <a href="#@cdktf/provider-google.dataPipelinePipeline.DataPipelinePipelineWorkload">DataPipelinePipelineWorkload</a>

---



