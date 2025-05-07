# `dataplexTask` Submodule <a name="`dataplexTask` Submodule" id="@cdktf/provider-google.dataplexTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexTask <a name="DataplexTask" id="@cdktf/provider-google.dataplexTask.DataplexTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task google_dataplex_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTask(scope: Construct, id: string, config: DataplexTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig">DataplexTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataplexTask.DataplexTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig">DataplexTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.putExecutionSpec">putExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.putNotebook">putNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.putSpark">putSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.putTriggerSpec">putTriggerSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetLake">resetLake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetNotebook">resetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetSpark">resetSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetTaskId">resetTaskId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataplexTask.DataplexTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataplexTask.DataplexTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexTask.DataplexTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataplexTask.DataplexTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataplexTask.DataplexTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataplexTask.DataplexTask.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataplexTask.DataplexTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataplexTask.DataplexTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataplexTask.DataplexTask.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataplexTask.DataplexTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataplexTask.DataplexTask.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataplexTask.DataplexTask.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexTask.DataplexTask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexTask.DataplexTask.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataplexTask.DataplexTask.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexTask.DataplexTask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataplexTask.DataplexTask.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataplexTask.DataplexTask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataplexTask.DataplexTask.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataplexTask.DataplexTask.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexTask.DataplexTask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExecutionSpec` <a name="putExecutionSpec" id="@cdktf/provider-google.dataplexTask.DataplexTask.putExecutionSpec"></a>

```typescript
public putExecutionSpec(value: DataplexTaskExecutionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexTask.DataplexTask.putExecutionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec">DataplexTaskExecutionSpec</a>

---

##### `putNotebook` <a name="putNotebook" id="@cdktf/provider-google.dataplexTask.DataplexTask.putNotebook"></a>

```typescript
public putNotebook(value: DataplexTaskNotebook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexTask.DataplexTask.putNotebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook">DataplexTaskNotebook</a>

---

##### `putSpark` <a name="putSpark" id="@cdktf/provider-google.dataplexTask.DataplexTask.putSpark"></a>

```typescript
public putSpark(value: DataplexTaskSpark): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexTask.DataplexTask.putSpark.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark">DataplexTaskSpark</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataplexTask.DataplexTask.putTimeouts"></a>

```typescript
public putTimeouts(value: DataplexTaskTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexTask.DataplexTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts">DataplexTaskTimeouts</a>

---

##### `putTriggerSpec` <a name="putTriggerSpec" id="@cdktf/provider-google.dataplexTask.DataplexTask.putTriggerSpec"></a>

```typescript
public putTriggerSpec(value: DataplexTaskTriggerSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexTask.DataplexTask.putTriggerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec">DataplexTaskTriggerSpec</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLake` <a name="resetLake" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetLake"></a>

```typescript
public resetLake(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetNotebook` <a name="resetNotebook" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetNotebook"></a>

```typescript
public resetNotebook(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSpark` <a name="resetSpark" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetSpark"></a>

```typescript
public resetSpark(): void
```

##### `resetTaskId` <a name="resetTaskId" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetTaskId"></a>

```typescript
public resetTaskId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataplexTask.DataplexTask.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataplexTask resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataplexTask.DataplexTask.isConstruct"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

dataplexTask.DataplexTask.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexTask.DataplexTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataplexTask.DataplexTask.isTerraformElement"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

dataplexTask.DataplexTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexTask.DataplexTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTask.isTerraformResource"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

dataplexTask.DataplexTask.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexTask.DataplexTask.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataplexTask.DataplexTask.generateConfigForImport"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

dataplexTask.DataplexTask.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataplexTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexTask.DataplexTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataplexTask.DataplexTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataplexTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataplexTask.DataplexTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataplexTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexTask.DataplexTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataplexTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.executionSpec">executionSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference">DataplexTaskExecutionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.executionStatus">executionStatus</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList">DataplexTaskExecutionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference">DataplexTaskNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference">DataplexTaskSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference">DataplexTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.triggerSpec">triggerSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference">DataplexTaskTriggerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.executionSpecInput">executionSpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec">DataplexTaskExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.lakeInput">lakeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.notebookInput">notebookInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook">DataplexTaskNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.sparkInput">sparkInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark">DataplexTaskSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.taskIdInput">taskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts">DataplexTaskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.triggerSpecInput">triggerSpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec">DataplexTaskTriggerSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.lake">lake</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.taskId">taskId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `executionSpec`<sup>Required</sup> <a name="executionSpec" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.executionSpec"></a>

```typescript
public readonly executionSpec: DataplexTaskExecutionSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference">DataplexTaskExecutionSpecOutputReference</a>

---

##### `executionStatus`<sup>Required</sup> <a name="executionStatus" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.executionStatus"></a>

```typescript
public readonly executionStatus: DataplexTaskExecutionStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList">DataplexTaskExecutionStatusList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.notebook"></a>

```typescript
public readonly notebook: DataplexTaskNotebookOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference">DataplexTaskNotebookOutputReference</a>

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.spark"></a>

```typescript
public readonly spark: DataplexTaskSparkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference">DataplexTaskSparkOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.timeouts"></a>

```typescript
public readonly timeouts: DataplexTaskTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference">DataplexTaskTimeoutsOutputReference</a>

---

##### `triggerSpec`<sup>Required</sup> <a name="triggerSpec" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.triggerSpec"></a>

```typescript
public readonly triggerSpec: DataplexTaskTriggerSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference">DataplexTaskTriggerSpecOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `executionSpecInput`<sup>Optional</sup> <a name="executionSpecInput" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.executionSpecInput"></a>

```typescript
public readonly executionSpecInput: DataplexTaskExecutionSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec">DataplexTaskExecutionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `lakeInput`<sup>Optional</sup> <a name="lakeInput" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.lakeInput"></a>

```typescript
public readonly lakeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `notebookInput`<sup>Optional</sup> <a name="notebookInput" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.notebookInput"></a>

```typescript
public readonly notebookInput: DataplexTaskNotebook;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook">DataplexTaskNotebook</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sparkInput`<sup>Optional</sup> <a name="sparkInput" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.sparkInput"></a>

```typescript
public readonly sparkInput: DataplexTaskSpark;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark">DataplexTaskSpark</a>

---

##### `taskIdInput`<sup>Optional</sup> <a name="taskIdInput" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.taskIdInput"></a>

```typescript
public readonly taskIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataplexTaskTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts">DataplexTaskTimeouts</a>

---

##### `triggerSpecInput`<sup>Optional</sup> <a name="triggerSpecInput" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.triggerSpecInput"></a>

```typescript
public readonly triggerSpecInput: DataplexTaskTriggerSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec">DataplexTaskTriggerSpec</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.lake"></a>

```typescript
public readonly lake: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataplexTask.DataplexTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexTaskConfig <a name="DataplexTaskConfig" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

const dataplexTaskConfig: dataplexTask.DataplexTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.executionSpec">executionSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec">DataplexTaskExecutionSpec</a></code> | execution_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.triggerSpec">triggerSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec">DataplexTaskTriggerSpec</a></code> | trigger_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.description">description</a></code> | <code>string</code> | User-provided description of the task. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.displayName">displayName</a></code> | <code>string</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#id DataplexTask#id}. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels for the task. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.lake">lake</a></code> | <code>string</code> | The lake in which the task will be created in. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.location">location</a></code> | <code>string</code> | The location in which the task will be created in. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook">DataplexTaskNotebook</a></code> | notebook block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#project DataplexTask#project}. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark">DataplexTaskSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.taskId">taskId</a></code> | <code>string</code> | The task Id of the task. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts">DataplexTaskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `executionSpec`<sup>Required</sup> <a name="executionSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.executionSpec"></a>

```typescript
public readonly executionSpec: DataplexTaskExecutionSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec">DataplexTaskExecutionSpec</a>

execution_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#execution_spec DataplexTask#execution_spec}

---

##### `triggerSpec`<sup>Required</sup> <a name="triggerSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.triggerSpec"></a>

```typescript
public readonly triggerSpec: DataplexTaskTriggerSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec">DataplexTaskTriggerSpec</a>

trigger_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#trigger_spec DataplexTask#trigger_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-provided description of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#description DataplexTask#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#display_name DataplexTask#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#id DataplexTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels for the task.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#labels DataplexTask#labels}

---

##### `lake`<sup>Optional</sup> <a name="lake" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.lake"></a>

```typescript
public readonly lake: string;
```

- *Type:* string

The lake in which the task will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#lake DataplexTask#lake}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location in which the task will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#location DataplexTask#location}

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.notebook"></a>

```typescript
public readonly notebook: DataplexTaskNotebook;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook">DataplexTaskNotebook</a>

notebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#notebook DataplexTask#notebook}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#project DataplexTask#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.spark"></a>

```typescript
public readonly spark: DataplexTaskSpark;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark">DataplexTaskSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#spark DataplexTask#spark}

---

##### `taskId`<sup>Optional</sup> <a name="taskId" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The task Id of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#task_id DataplexTask#task_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexTask.DataplexTaskConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataplexTaskTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts">DataplexTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#timeouts DataplexTask#timeouts}

---

### DataplexTaskExecutionSpec <a name="DataplexTaskExecutionSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

const dataplexTaskExecutionSpec: dataplexTask.DataplexTaskExecutionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Service account to use to execute a task. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.args">args</a></code> | <code>{[ key: string ]: string}</code> | The arguments to pass to the task. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.kmsKey">kmsKey</a></code> | <code>string</code> | The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{locationId}/keyRings/{key-ring-name}/cryptoKeys/{key-name}. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.maxJobExecutionLifetime">maxJobExecutionLifetime</a></code> | <code>string</code> | The maximum duration after which the job execution is expired. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.project">project</a></code> | <code>string</code> | The project in which jobs are run. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Service account to use to execute a task.

If not provided, the default Compute service account for the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#service_account DataplexTask#service_account}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.args"></a>

```typescript
public readonly args: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The arguments to pass to the task.

The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${taskId} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument. An object containing a list of 'key': value pairs. Example: { 'name': 'wrench', 'mass': '1.3kg', 'count': '3' }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#args DataplexTask#args}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{locationId}/keyRings/{key-ring-name}/cryptoKeys/{key-name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#kms_key DataplexTask#kms_key}

---

##### `maxJobExecutionLifetime`<sup>Optional</sup> <a name="maxJobExecutionLifetime" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.maxJobExecutionLifetime"></a>

```typescript
public readonly maxJobExecutionLifetime: string;
```

- *Type:* string

The maximum duration after which the job execution is expired.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#max_job_execution_lifetime DataplexTask#max_job_execution_lifetime}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project in which jobs are run.

By default, the project containing the Lake is used. If a project is provided, the ExecutionSpec.service_account must belong to this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#project DataplexTask#project}

---

### DataplexTaskExecutionStatus <a name="DataplexTaskExecutionStatus" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatus.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

const dataplexTaskExecutionStatus: dataplexTask.DataplexTaskExecutionStatus = { ... }
```


### DataplexTaskExecutionStatusLatestJob <a name="DataplexTaskExecutionStatusLatestJob" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJob.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

const dataplexTaskExecutionStatusLatestJob: dataplexTask.DataplexTaskExecutionStatusLatestJob = { ... }
```


### DataplexTaskNotebook <a name="DataplexTaskNotebook" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

const dataplexTaskNotebook: dataplexTask.DataplexTaskNotebook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.property.notebook">notebook</a></code> | <code>string</code> | Path to input notebook. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.property.archiveUris">archiveUris</a></code> | <code>string[]</code> | Cloud Storage URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.property.fileUris">fileUris</a></code> | <code>string[]</code> | Cloud Storage URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.property.infrastructureSpec">infrastructureSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec">DataplexTaskNotebookInfrastructureSpec</a></code> | infrastructure_spec block. |

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.property.notebook"></a>

```typescript
public readonly notebook: string;
```

- *Type:* string

Path to input notebook.

This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#notebook DataplexTask#notebook}

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.property.archiveUris"></a>

```typescript
public readonly archiveUris: string[];
```

- *Type:* string[]

Cloud Storage URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#archive_uris DataplexTask#archive_uris}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.property.fileUris"></a>

```typescript
public readonly fileUris: string[];
```

- *Type:* string[]

Cloud Storage URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#file_uris DataplexTask#file_uris}

---

##### `infrastructureSpec`<sup>Optional</sup> <a name="infrastructureSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebook.property.infrastructureSpec"></a>

```typescript
public readonly infrastructureSpec: DataplexTaskNotebookInfrastructureSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec">DataplexTaskNotebookInfrastructureSpec</a>

infrastructure_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#infrastructure_spec DataplexTask#infrastructure_spec}

---

### DataplexTaskNotebookInfrastructureSpec <a name="DataplexTaskNotebookInfrastructureSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

const dataplexTaskNotebookInfrastructureSpec: dataplexTask.DataplexTaskNotebookInfrastructureSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec.property.batch">batch</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch">DataplexTaskNotebookInfrastructureSpecBatch</a></code> | batch block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage">DataplexTaskNotebookInfrastructureSpecContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec.property.vpcNetwork">vpcNetwork</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork">DataplexTaskNotebookInfrastructureSpecVpcNetwork</a></code> | vpc_network block. |

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec.property.batch"></a>

```typescript
public readonly batch: DataplexTaskNotebookInfrastructureSpecBatch;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch">DataplexTaskNotebookInfrastructureSpecBatch</a>

batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#batch DataplexTask#batch}

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec.property.containerImage"></a>

```typescript
public readonly containerImage: DataplexTaskNotebookInfrastructureSpecContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage">DataplexTaskNotebookInfrastructureSpecContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#container_image DataplexTask#container_image}

---

##### `vpcNetwork`<sup>Optional</sup> <a name="vpcNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec.property.vpcNetwork"></a>

```typescript
public readonly vpcNetwork: DataplexTaskNotebookInfrastructureSpecVpcNetwork;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork">DataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#vpc_network DataplexTask#vpc_network}

---

### DataplexTaskNotebookInfrastructureSpecBatch <a name="DataplexTaskNotebookInfrastructureSpecBatch" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

const dataplexTaskNotebookInfrastructureSpecBatch: dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch.property.executorsCount">executorsCount</a></code> | <code>number</code> | Total number of job executors. Executor Count should be between 2 and 100. [Default=2]. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch.property.maxExecutorsCount">maxExecutorsCount</a></code> | <code>number</code> | Max configurable executors. |

---

##### `executorsCount`<sup>Optional</sup> <a name="executorsCount" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch.property.executorsCount"></a>

```typescript
public readonly executorsCount: number;
```

- *Type:* number

Total number of job executors. Executor Count should be between 2 and 100. [Default=2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#executors_count DataplexTask#executors_count}

---

##### `maxExecutorsCount`<sup>Optional</sup> <a name="maxExecutorsCount" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch.property.maxExecutorsCount"></a>

```typescript
public readonly maxExecutorsCount: number;
```

- *Type:* number

Max configurable executors.

If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#max_executors_count DataplexTask#max_executors_count}

---

### DataplexTaskNotebookInfrastructureSpecContainerImage <a name="DataplexTaskNotebookInfrastructureSpecContainerImage" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

const dataplexTaskNotebookInfrastructureSpecContainerImage: dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.property.image">image</a></code> | <code>string</code> | Container image to use. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.property.javaJars">javaJars</a></code> | <code>string[]</code> | A list of Java JARS to add to the classpath. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Override to common configuration of open source components installed on the Dataproc cluster. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.property.pythonPackages">pythonPackages</a></code> | <code>string[]</code> | A list of python packages to be installed. |

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#image DataplexTask#image}

---

##### `javaJars`<sup>Optional</sup> <a name="javaJars" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.property.javaJars"></a>

```typescript
public readonly javaJars: string[];
```

- *Type:* string[]

A list of Java JARS to add to the classpath.

Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#java_jars DataplexTask#java_jars}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Override to common configuration of open source components installed on the Dataproc cluster.

The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#properties DataplexTask#properties}

---

##### `pythonPackages`<sup>Optional</sup> <a name="pythonPackages" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage.property.pythonPackages"></a>

```typescript
public readonly pythonPackages: string[];
```

- *Type:* string[]

A list of python packages to be installed.

Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#python_packages DataplexTask#python_packages}

---

### DataplexTaskNotebookInfrastructureSpecVpcNetwork <a name="DataplexTaskNotebookInfrastructureSpecVpcNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

const dataplexTaskNotebookInfrastructureSpecVpcNetwork: dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork.property.network">network</a></code> | <code>string</code> | The Cloud VPC network in which the job is run. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork.property.networkTags">networkTags</a></code> | <code>string[]</code> | List of network tags to apply to the job. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork.property.subNetwork">subNetwork</a></code> | <code>string</code> | The Cloud VPC sub-network in which the job is run. |

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The Cloud VPC network in which the job is run.

By default, the Cloud VPC network named Default within the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#network DataplexTask#network}

---

##### `networkTags`<sup>Optional</sup> <a name="networkTags" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork.property.networkTags"></a>

```typescript
public readonly networkTags: string[];
```

- *Type:* string[]

List of network tags to apply to the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#network_tags DataplexTask#network_tags}

---

##### `subNetwork`<sup>Optional</sup> <a name="subNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork.property.subNetwork"></a>

```typescript
public readonly subNetwork: string;
```

- *Type:* string

The Cloud VPC sub-network in which the job is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#sub_network DataplexTask#sub_network}

---

### DataplexTaskSpark <a name="DataplexTaskSpark" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

const dataplexTaskSpark: dataplexTask.DataplexTaskSpark = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.archiveUris">archiveUris</a></code> | <code>string[]</code> | Cloud Storage URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.fileUris">fileUris</a></code> | <code>string[]</code> | Cloud Storage URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.infrastructureSpec">infrastructureSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec">DataplexTaskSparkInfrastructureSpec</a></code> | infrastructure_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.mainClass">mainClass</a></code> | <code>string</code> | The name of the driver's main class. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.mainJarFileUri">mainJarFileUri</a></code> | <code>string</code> | The Cloud Storage URI of the jar file that contains the main class. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.pythonScriptFile">pythonScriptFile</a></code> | <code>string</code> | The Gcloud Storage URI of the main Python file to use as the driver. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.sqlScript">sqlScript</a></code> | <code>string</code> | The query text. The execution args are used to declare a set of script variables (set key='value';). |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.sqlScriptFile">sqlScriptFile</a></code> | <code>string</code> | A reference to a query file. |

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.archiveUris"></a>

```typescript
public readonly archiveUris: string[];
```

- *Type:* string[]

Cloud Storage URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#archive_uris DataplexTask#archive_uris}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.fileUris"></a>

```typescript
public readonly fileUris: string[];
```

- *Type:* string[]

Cloud Storage URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#file_uris DataplexTask#file_uris}

---

##### `infrastructureSpec`<sup>Optional</sup> <a name="infrastructureSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.infrastructureSpec"></a>

```typescript
public readonly infrastructureSpec: DataplexTaskSparkInfrastructureSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec">DataplexTaskSparkInfrastructureSpec</a>

infrastructure_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#infrastructure_spec DataplexTask#infrastructure_spec}

---

##### `mainClass`<sup>Optional</sup> <a name="mainClass" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.mainClass"></a>

```typescript
public readonly mainClass: string;
```

- *Type:* string

The name of the driver's main class.

The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#main_class DataplexTask#main_class}

---

##### `mainJarFileUri`<sup>Optional</sup> <a name="mainJarFileUri" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.mainJarFileUri"></a>

```typescript
public readonly mainJarFileUri: string;
```

- *Type:* string

The Cloud Storage URI of the jar file that contains the main class.

The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#main_jar_file_uri DataplexTask#main_jar_file_uri}

---

##### `pythonScriptFile`<sup>Optional</sup> <a name="pythonScriptFile" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.pythonScriptFile"></a>

```typescript
public readonly pythonScriptFile: string;
```

- *Type:* string

The Gcloud Storage URI of the main Python file to use as the driver.

Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#python_script_file DataplexTask#python_script_file}

---

##### `sqlScript`<sup>Optional</sup> <a name="sqlScript" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.sqlScript"></a>

```typescript
public readonly sqlScript: string;
```

- *Type:* string

The query text. The execution args are used to declare a set of script variables (set key='value';).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#sql_script DataplexTask#sql_script}

---

##### `sqlScriptFile`<sup>Optional</sup> <a name="sqlScriptFile" id="@cdktf/provider-google.dataplexTask.DataplexTaskSpark.property.sqlScriptFile"></a>

```typescript
public readonly sqlScriptFile: string;
```

- *Type:* string

A reference to a query file.

This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key='value';).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#sql_script_file DataplexTask#sql_script_file}

---

### DataplexTaskSparkInfrastructureSpec <a name="DataplexTaskSparkInfrastructureSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

const dataplexTaskSparkInfrastructureSpec: dataplexTask.DataplexTaskSparkInfrastructureSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec.property.batch">batch</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch">DataplexTaskSparkInfrastructureSpecBatch</a></code> | batch block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage">DataplexTaskSparkInfrastructureSpecContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec.property.vpcNetwork">vpcNetwork</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork">DataplexTaskSparkInfrastructureSpecVpcNetwork</a></code> | vpc_network block. |

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec.property.batch"></a>

```typescript
public readonly batch: DataplexTaskSparkInfrastructureSpecBatch;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch">DataplexTaskSparkInfrastructureSpecBatch</a>

batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#batch DataplexTask#batch}

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec.property.containerImage"></a>

```typescript
public readonly containerImage: DataplexTaskSparkInfrastructureSpecContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage">DataplexTaskSparkInfrastructureSpecContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#container_image DataplexTask#container_image}

---

##### `vpcNetwork`<sup>Optional</sup> <a name="vpcNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec.property.vpcNetwork"></a>

```typescript
public readonly vpcNetwork: DataplexTaskSparkInfrastructureSpecVpcNetwork;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork">DataplexTaskSparkInfrastructureSpecVpcNetwork</a>

vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#vpc_network DataplexTask#vpc_network}

---

### DataplexTaskSparkInfrastructureSpecBatch <a name="DataplexTaskSparkInfrastructureSpecBatch" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

const dataplexTaskSparkInfrastructureSpecBatch: dataplexTask.DataplexTaskSparkInfrastructureSpecBatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch.property.executorsCount">executorsCount</a></code> | <code>number</code> | Total number of job executors. Executor Count should be between 2 and 100. [Default=2]. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch.property.maxExecutorsCount">maxExecutorsCount</a></code> | <code>number</code> | Max configurable executors. |

---

##### `executorsCount`<sup>Optional</sup> <a name="executorsCount" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch.property.executorsCount"></a>

```typescript
public readonly executorsCount: number;
```

- *Type:* number

Total number of job executors. Executor Count should be between 2 and 100. [Default=2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#executors_count DataplexTask#executors_count}

---

##### `maxExecutorsCount`<sup>Optional</sup> <a name="maxExecutorsCount" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch.property.maxExecutorsCount"></a>

```typescript
public readonly maxExecutorsCount: number;
```

- *Type:* number

Max configurable executors.

If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#max_executors_count DataplexTask#max_executors_count}

---

### DataplexTaskSparkInfrastructureSpecContainerImage <a name="DataplexTaskSparkInfrastructureSpecContainerImage" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

const dataplexTaskSparkInfrastructureSpecContainerImage: dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.property.image">image</a></code> | <code>string</code> | Container image to use. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.property.javaJars">javaJars</a></code> | <code>string[]</code> | A list of Java JARS to add to the classpath. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Override to common configuration of open source components installed on the Dataproc cluster. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.property.pythonPackages">pythonPackages</a></code> | <code>string[]</code> | A list of python packages to be installed. |

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#image DataplexTask#image}

---

##### `javaJars`<sup>Optional</sup> <a name="javaJars" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.property.javaJars"></a>

```typescript
public readonly javaJars: string[];
```

- *Type:* string[]

A list of Java JARS to add to the classpath.

Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#java_jars DataplexTask#java_jars}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Override to common configuration of open source components installed on the Dataproc cluster.

The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#properties DataplexTask#properties}

---

##### `pythonPackages`<sup>Optional</sup> <a name="pythonPackages" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage.property.pythonPackages"></a>

```typescript
public readonly pythonPackages: string[];
```

- *Type:* string[]

A list of python packages to be installed.

Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#python_packages DataplexTask#python_packages}

---

### DataplexTaskSparkInfrastructureSpecVpcNetwork <a name="DataplexTaskSparkInfrastructureSpecVpcNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

const dataplexTaskSparkInfrastructureSpecVpcNetwork: dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork.property.network">network</a></code> | <code>string</code> | The Cloud VPC network in which the job is run. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork.property.networkTags">networkTags</a></code> | <code>string[]</code> | List of network tags to apply to the job. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork.property.subNetwork">subNetwork</a></code> | <code>string</code> | The Cloud VPC sub-network in which the job is run. |

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The Cloud VPC network in which the job is run.

By default, the Cloud VPC network named Default within the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#network DataplexTask#network}

---

##### `networkTags`<sup>Optional</sup> <a name="networkTags" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork.property.networkTags"></a>

```typescript
public readonly networkTags: string[];
```

- *Type:* string[]

List of network tags to apply to the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#network_tags DataplexTask#network_tags}

---

##### `subNetwork`<sup>Optional</sup> <a name="subNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork.property.subNetwork"></a>

```typescript
public readonly subNetwork: string;
```

- *Type:* string

The Cloud VPC sub-network in which the job is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#sub_network DataplexTask#sub_network}

---

### DataplexTaskTimeouts <a name="DataplexTaskTimeouts" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

const dataplexTaskTimeouts: dataplexTask.DataplexTaskTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#create DataplexTask#create}. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#delete DataplexTask#delete}. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#update DataplexTask#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#create DataplexTask#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#delete DataplexTask#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#update DataplexTask#update}.

---

### DataplexTaskTriggerSpec <a name="DataplexTaskTriggerSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

const dataplexTaskTriggerSpec: dataplexTask.DataplexTaskTriggerSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.type">type</a></code> | <code>string</code> | Trigger type of the user-specified Task Possible values: ["ON_DEMAND", "RECURRING"]. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prevent the task from executing. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.maxRetries">maxRetries</a></code> | <code>number</code> | Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.schedule">schedule</a></code> | <code>string</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: 'CRON_TZ=${IANA_TIME_ZONE}' or 'TZ=${IANA_TIME_ZONE}'. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.startTime">startTime</a></code> | <code>string</code> | The first run of the task will be after this time. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Trigger type of the user-specified Task Possible values: ["ON_DEMAND", "RECURRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#type DataplexTask#type}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prevent the task from executing.

This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#disabled DataplexTask#disabled}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#max_retries DataplexTask#max_retries}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: 'CRON_TZ=${IANA_TIME_ZONE}' or 'TZ=${IANA_TIME_ZONE}'. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#schedule DataplexTask#schedule}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The first run of the task will be after this time.

If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataplex_task#start_time DataplexTask#start_time}

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexTaskExecutionSpecOutputReference <a name="DataplexTaskExecutionSpecOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskExecutionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resetMaxJobExecutionLifetime">resetMaxJobExecutionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resetProject">resetProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetMaxJobExecutionLifetime` <a name="resetMaxJobExecutionLifetime" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resetMaxJobExecutionLifetime"></a>

```typescript
public resetMaxJobExecutionLifetime(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.resetProject"></a>

```typescript
public resetProject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.argsInput">argsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetimeInput">maxJobExecutionLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.args">args</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetime">maxJobExecutionLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec">DataplexTaskExecutionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `maxJobExecutionLifetimeInput`<sup>Optional</sup> <a name="maxJobExecutionLifetimeInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetimeInput"></a>

```typescript
public readonly maxJobExecutionLifetimeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.args"></a>

```typescript
public readonly args: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `maxJobExecutionLifetime`<sup>Required</sup> <a name="maxJobExecutionLifetime" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetime"></a>

```typescript
public readonly maxJobExecutionLifetime: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexTaskExecutionSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionSpec">DataplexTaskExecutionSpec</a>

---


### DataplexTaskExecutionStatusLatestJobList <a name="DataplexTaskExecutionStatusLatestJobList" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskExecutionStatusLatestJobList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.get"></a>

```typescript
public get(index: number): DataplexTaskExecutionStatusLatestJobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataplexTaskExecutionStatusLatestJobOutputReference <a name="DataplexTaskExecutionStatusLatestJobOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.retryCount">retryCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.serviceJob">serviceJob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJob">DataplexTaskExecutionStatusLatestJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retryCount`<sup>Required</sup> <a name="retryCount" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.retryCount"></a>

```typescript
public readonly retryCount: number;
```

- *Type:* number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `serviceJob`<sup>Required</sup> <a name="serviceJob" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.serviceJob"></a>

```typescript
public readonly serviceJob: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexTaskExecutionStatusLatestJob;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJob">DataplexTaskExecutionStatusLatestJob</a>

---


### DataplexTaskExecutionStatusList <a name="DataplexTaskExecutionStatusList" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskExecutionStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.get"></a>

```typescript
public get(index: number): DataplexTaskExecutionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataplexTaskExecutionStatusOutputReference <a name="DataplexTaskExecutionStatusOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskExecutionStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.latestJob">latestJob</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList">DataplexTaskExecutionStatusLatestJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatus">DataplexTaskExecutionStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latestJob`<sup>Required</sup> <a name="latestJob" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.latestJob"></a>

```typescript
public readonly latestJob: DataplexTaskExecutionStatusLatestJobList;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusLatestJobList">DataplexTaskExecutionStatusLatestJobList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexTaskExecutionStatus;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskExecutionStatus">DataplexTaskExecutionStatus</a>

---


### DataplexTaskNotebookInfrastructureSpecBatchOutputReference <a name="DataplexTaskNotebookInfrastructureSpecBatchOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetExecutorsCount">resetExecutorsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount">resetMaxExecutorsCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutorsCount` <a name="resetExecutorsCount" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetExecutorsCount"></a>

```typescript
public resetExecutorsCount(): void
```

##### `resetMaxExecutorsCount` <a name="resetMaxExecutorsCount" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount"></a>

```typescript
public resetMaxExecutorsCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCountInput">executorsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput">maxExecutorsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCount">executorsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCount">maxExecutorsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch">DataplexTaskNotebookInfrastructureSpecBatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executorsCountInput`<sup>Optional</sup> <a name="executorsCountInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCountInput"></a>

```typescript
public readonly executorsCountInput: number;
```

- *Type:* number

---

##### `maxExecutorsCountInput`<sup>Optional</sup> <a name="maxExecutorsCountInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput"></a>

```typescript
public readonly maxExecutorsCountInput: number;
```

- *Type:* number

---

##### `executorsCount`<sup>Required</sup> <a name="executorsCount" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCount"></a>

```typescript
public readonly executorsCount: number;
```

- *Type:* number

---

##### `maxExecutorsCount`<sup>Required</sup> <a name="maxExecutorsCount" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCount"></a>

```typescript
public readonly maxExecutorsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexTaskNotebookInfrastructureSpecBatch;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch">DataplexTaskNotebookInfrastructureSpecBatch</a>

---


### DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference <a name="DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetJavaJars">resetJavaJars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetPythonPackages">resetPythonPackages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImage` <a name="resetImage" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetJavaJars` <a name="resetJavaJars" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetJavaJars"></a>

```typescript
public resetJavaJars(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetPythonPackages` <a name="resetPythonPackages" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetPythonPackages"></a>

```typescript
public resetPythonPackages(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJarsInput">javaJarsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput">pythonPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJars">javaJars</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackages">pythonPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage">DataplexTaskNotebookInfrastructureSpecContainerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `javaJarsInput`<sup>Optional</sup> <a name="javaJarsInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJarsInput"></a>

```typescript
public readonly javaJarsInput: string[];
```

- *Type:* string[]

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pythonPackagesInput`<sup>Optional</sup> <a name="pythonPackagesInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput"></a>

```typescript
public readonly pythonPackagesInput: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `javaJars`<sup>Required</sup> <a name="javaJars" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJars"></a>

```typescript
public readonly javaJars: string[];
```

- *Type:* string[]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pythonPackages`<sup>Required</sup> <a name="pythonPackages" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackages"></a>

```typescript
public readonly pythonPackages: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexTaskNotebookInfrastructureSpecContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage">DataplexTaskNotebookInfrastructureSpecContainerImage</a>

---


### DataplexTaskNotebookInfrastructureSpecOutputReference <a name="DataplexTaskNotebookInfrastructureSpecOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putBatch">putBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage">putContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork">putVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resetBatch">resetBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resetVpcNetwork">resetVpcNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBatch` <a name="putBatch" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putBatch"></a>

```typescript
public putBatch(value: DataplexTaskNotebookInfrastructureSpecBatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch">DataplexTaskNotebookInfrastructureSpecBatch</a>

---

##### `putContainerImage` <a name="putContainerImage" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage"></a>

```typescript
public putContainerImage(value: DataplexTaskNotebookInfrastructureSpecContainerImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage">DataplexTaskNotebookInfrastructureSpecContainerImage</a>

---

##### `putVpcNetwork` <a name="putVpcNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork"></a>

```typescript
public putVpcNetwork(value: DataplexTaskNotebookInfrastructureSpecVpcNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork">DataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

---

##### `resetBatch` <a name="resetBatch" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resetBatch"></a>

```typescript
public resetBatch(): void
```

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resetContainerImage"></a>

```typescript
public resetContainerImage(): void
```

##### `resetVpcNetwork` <a name="resetVpcNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.resetVpcNetwork"></a>

```typescript
public resetVpcNetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.batch">batch</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference">DataplexTaskNotebookInfrastructureSpecBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference">DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetwork">vpcNetwork</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference">DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.batchInput">batchInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch">DataplexTaskNotebookInfrastructureSpecBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImageInput">containerImageInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage">DataplexTaskNotebookInfrastructureSpecContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetworkInput">vpcNetworkInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork">DataplexTaskNotebookInfrastructureSpecVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec">DataplexTaskNotebookInfrastructureSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batch`<sup>Required</sup> <a name="batch" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.batch"></a>

```typescript
public readonly batch: DataplexTaskNotebookInfrastructureSpecBatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatchOutputReference">DataplexTaskNotebookInfrastructureSpecBatchOutputReference</a>

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImage"></a>

```typescript
public readonly containerImage: DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference">DataplexTaskNotebookInfrastructureSpecContainerImageOutputReference</a>

---

##### `vpcNetwork`<sup>Required</sup> <a name="vpcNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetwork"></a>

```typescript
public readonly vpcNetwork: DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference">DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference</a>

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.batchInput"></a>

```typescript
public readonly batchInput: DataplexTaskNotebookInfrastructureSpecBatch;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecBatch">DataplexTaskNotebookInfrastructureSpecBatch</a>

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImageInput"></a>

```typescript
public readonly containerImageInput: DataplexTaskNotebookInfrastructureSpecContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecContainerImage">DataplexTaskNotebookInfrastructureSpecContainerImage</a>

---

##### `vpcNetworkInput`<sup>Optional</sup> <a name="vpcNetworkInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetworkInput"></a>

```typescript
public readonly vpcNetworkInput: DataplexTaskNotebookInfrastructureSpecVpcNetwork;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork">DataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexTaskNotebookInfrastructureSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec">DataplexTaskNotebookInfrastructureSpec</a>

---


### DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference <a name="DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags">resetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork">resetSubNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNetworkTags` <a name="resetNetworkTags" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags"></a>

```typescript
public resetNetworkTags(): void
```

##### `resetSubNetwork` <a name="resetSubNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork"></a>

```typescript
public resetSubNetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput">networkTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput">subNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTags">networkTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetwork">subNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork">DataplexTaskNotebookInfrastructureSpecVpcNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `networkTagsInput`<sup>Optional</sup> <a name="networkTagsInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput"></a>

```typescript
public readonly networkTagsInput: string[];
```

- *Type:* string[]

---

##### `subNetworkInput`<sup>Optional</sup> <a name="subNetworkInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput"></a>

```typescript
public readonly subNetworkInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkTags`<sup>Required</sup> <a name="networkTags" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTags"></a>

```typescript
public readonly networkTags: string[];
```

- *Type:* string[]

---

##### `subNetwork`<sup>Required</sup> <a name="subNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetwork"></a>

```typescript
public readonly subNetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexTaskNotebookInfrastructureSpecVpcNetwork;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecVpcNetwork">DataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

---


### DataplexTaskNotebookOutputReference <a name="DataplexTaskNotebookOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskNotebookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.putInfrastructureSpec">putInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resetInfrastructureSpec">resetInfrastructureSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInfrastructureSpec` <a name="putInfrastructureSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.putInfrastructureSpec"></a>

```typescript
public putInfrastructureSpec(value: DataplexTaskNotebookInfrastructureSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.putInfrastructureSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec">DataplexTaskNotebookInfrastructureSpec</a>

---

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resetArchiveUris"></a>

```typescript
public resetArchiveUris(): void
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resetFileUris"></a>

```typescript
public resetFileUris(): void
```

##### `resetInfrastructureSpec` <a name="resetInfrastructureSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.resetInfrastructureSpec"></a>

```typescript
public resetInfrastructureSpec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.infrastructureSpec">infrastructureSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference">DataplexTaskNotebookInfrastructureSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.infrastructureSpecInput">infrastructureSpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec">DataplexTaskNotebookInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.notebookInput">notebookInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.archiveUris">archiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.fileUris">fileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.notebook">notebook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook">DataplexTaskNotebook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `infrastructureSpec`<sup>Required</sup> <a name="infrastructureSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.infrastructureSpec"></a>

```typescript
public readonly infrastructureSpec: DataplexTaskNotebookInfrastructureSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpecOutputReference">DataplexTaskNotebookInfrastructureSpecOutputReference</a>

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.archiveUrisInput"></a>

```typescript
public readonly archiveUrisInput: string[];
```

- *Type:* string[]

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.fileUrisInput"></a>

```typescript
public readonly fileUrisInput: string[];
```

- *Type:* string[]

---

##### `infrastructureSpecInput`<sup>Optional</sup> <a name="infrastructureSpecInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.infrastructureSpecInput"></a>

```typescript
public readonly infrastructureSpecInput: DataplexTaskNotebookInfrastructureSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebookInfrastructureSpec">DataplexTaskNotebookInfrastructureSpec</a>

---

##### `notebookInput`<sup>Optional</sup> <a name="notebookInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.notebookInput"></a>

```typescript
public readonly notebookInput: string;
```

- *Type:* string

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.archiveUris"></a>

```typescript
public readonly archiveUris: string[];
```

- *Type:* string[]

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.fileUris"></a>

```typescript
public readonly fileUris: string[];
```

- *Type:* string[]

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.notebook"></a>

```typescript
public readonly notebook: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexTask.DataplexTaskNotebookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexTaskNotebook;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskNotebook">DataplexTaskNotebook</a>

---


### DataplexTaskSparkInfrastructureSpecBatchOutputReference <a name="DataplexTaskSparkInfrastructureSpecBatchOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.resetExecutorsCount">resetExecutorsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount">resetMaxExecutorsCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutorsCount` <a name="resetExecutorsCount" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.resetExecutorsCount"></a>

```typescript
public resetExecutorsCount(): void
```

##### `resetMaxExecutorsCount` <a name="resetMaxExecutorsCount" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount"></a>

```typescript
public resetMaxExecutorsCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCountInput">executorsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput">maxExecutorsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCount">executorsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCount">maxExecutorsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch">DataplexTaskSparkInfrastructureSpecBatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executorsCountInput`<sup>Optional</sup> <a name="executorsCountInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCountInput"></a>

```typescript
public readonly executorsCountInput: number;
```

- *Type:* number

---

##### `maxExecutorsCountInput`<sup>Optional</sup> <a name="maxExecutorsCountInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput"></a>

```typescript
public readonly maxExecutorsCountInput: number;
```

- *Type:* number

---

##### `executorsCount`<sup>Required</sup> <a name="executorsCount" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCount"></a>

```typescript
public readonly executorsCount: number;
```

- *Type:* number

---

##### `maxExecutorsCount`<sup>Required</sup> <a name="maxExecutorsCount" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCount"></a>

```typescript
public readonly maxExecutorsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexTaskSparkInfrastructureSpecBatch;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch">DataplexTaskSparkInfrastructureSpecBatch</a>

---


### DataplexTaskSparkInfrastructureSpecContainerImageOutputReference <a name="DataplexTaskSparkInfrastructureSpecContainerImageOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetJavaJars">resetJavaJars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetPythonPackages">resetPythonPackages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImage` <a name="resetImage" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetJavaJars` <a name="resetJavaJars" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetJavaJars"></a>

```typescript
public resetJavaJars(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetPythonPackages` <a name="resetPythonPackages" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetPythonPackages"></a>

```typescript
public resetPythonPackages(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJarsInput">javaJarsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput">pythonPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJars">javaJars</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackages">pythonPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage">DataplexTaskSparkInfrastructureSpecContainerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `javaJarsInput`<sup>Optional</sup> <a name="javaJarsInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJarsInput"></a>

```typescript
public readonly javaJarsInput: string[];
```

- *Type:* string[]

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pythonPackagesInput`<sup>Optional</sup> <a name="pythonPackagesInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput"></a>

```typescript
public readonly pythonPackagesInput: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `javaJars`<sup>Required</sup> <a name="javaJars" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJars"></a>

```typescript
public readonly javaJars: string[];
```

- *Type:* string[]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pythonPackages`<sup>Required</sup> <a name="pythonPackages" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackages"></a>

```typescript
public readonly pythonPackages: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexTaskSparkInfrastructureSpecContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage">DataplexTaskSparkInfrastructureSpecContainerImage</a>

---


### DataplexTaskSparkInfrastructureSpecOutputReference <a name="DataplexTaskSparkInfrastructureSpecOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putBatch">putBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage">putContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork">putVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resetBatch">resetBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resetVpcNetwork">resetVpcNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBatch` <a name="putBatch" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putBatch"></a>

```typescript
public putBatch(value: DataplexTaskSparkInfrastructureSpecBatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch">DataplexTaskSparkInfrastructureSpecBatch</a>

---

##### `putContainerImage` <a name="putContainerImage" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage"></a>

```typescript
public putContainerImage(value: DataplexTaskSparkInfrastructureSpecContainerImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage">DataplexTaskSparkInfrastructureSpecContainerImage</a>

---

##### `putVpcNetwork` <a name="putVpcNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork"></a>

```typescript
public putVpcNetwork(value: DataplexTaskSparkInfrastructureSpecVpcNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork">DataplexTaskSparkInfrastructureSpecVpcNetwork</a>

---

##### `resetBatch` <a name="resetBatch" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resetBatch"></a>

```typescript
public resetBatch(): void
```

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resetContainerImage"></a>

```typescript
public resetContainerImage(): void
```

##### `resetVpcNetwork` <a name="resetVpcNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.resetVpcNetwork"></a>

```typescript
public resetVpcNetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.batch">batch</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference">DataplexTaskSparkInfrastructureSpecBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference">DataplexTaskSparkInfrastructureSpecContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetwork">vpcNetwork</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference">DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.batchInput">batchInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch">DataplexTaskSparkInfrastructureSpecBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.containerImageInput">containerImageInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage">DataplexTaskSparkInfrastructureSpecContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetworkInput">vpcNetworkInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork">DataplexTaskSparkInfrastructureSpecVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec">DataplexTaskSparkInfrastructureSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batch`<sup>Required</sup> <a name="batch" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.batch"></a>

```typescript
public readonly batch: DataplexTaskSparkInfrastructureSpecBatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatchOutputReference">DataplexTaskSparkInfrastructureSpecBatchOutputReference</a>

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.containerImage"></a>

```typescript
public readonly containerImage: DataplexTaskSparkInfrastructureSpecContainerImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImageOutputReference">DataplexTaskSparkInfrastructureSpecContainerImageOutputReference</a>

---

##### `vpcNetwork`<sup>Required</sup> <a name="vpcNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetwork"></a>

```typescript
public readonly vpcNetwork: DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference">DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference</a>

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.batchInput"></a>

```typescript
public readonly batchInput: DataplexTaskSparkInfrastructureSpecBatch;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecBatch">DataplexTaskSparkInfrastructureSpecBatch</a>

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.containerImageInput"></a>

```typescript
public readonly containerImageInput: DataplexTaskSparkInfrastructureSpecContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecContainerImage">DataplexTaskSparkInfrastructureSpecContainerImage</a>

---

##### `vpcNetworkInput`<sup>Optional</sup> <a name="vpcNetworkInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetworkInput"></a>

```typescript
public readonly vpcNetworkInput: DataplexTaskSparkInfrastructureSpecVpcNetwork;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork">DataplexTaskSparkInfrastructureSpecVpcNetwork</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexTaskSparkInfrastructureSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec">DataplexTaskSparkInfrastructureSpec</a>

---


### DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference <a name="DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags">resetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork">resetSubNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNetworkTags` <a name="resetNetworkTags" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags"></a>

```typescript
public resetNetworkTags(): void
```

##### `resetSubNetwork` <a name="resetSubNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork"></a>

```typescript
public resetSubNetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput">networkTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput">subNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTags">networkTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetwork">subNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork">DataplexTaskSparkInfrastructureSpecVpcNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `networkTagsInput`<sup>Optional</sup> <a name="networkTagsInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput"></a>

```typescript
public readonly networkTagsInput: string[];
```

- *Type:* string[]

---

##### `subNetworkInput`<sup>Optional</sup> <a name="subNetworkInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput"></a>

```typescript
public readonly subNetworkInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkTags`<sup>Required</sup> <a name="networkTags" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTags"></a>

```typescript
public readonly networkTags: string[];
```

- *Type:* string[]

---

##### `subNetwork`<sup>Required</sup> <a name="subNetwork" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetwork"></a>

```typescript
public readonly subNetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexTaskSparkInfrastructureSpecVpcNetwork;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecVpcNetwork">DataplexTaskSparkInfrastructureSpecVpcNetwork</a>

---


### DataplexTaskSparkOutputReference <a name="DataplexTaskSparkOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskSparkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.putInfrastructureSpec">putInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetInfrastructureSpec">resetInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetMainClass">resetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetMainJarFileUri">resetMainJarFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetPythonScriptFile">resetPythonScriptFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetSqlScript">resetSqlScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetSqlScriptFile">resetSqlScriptFile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInfrastructureSpec` <a name="putInfrastructureSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.putInfrastructureSpec"></a>

```typescript
public putInfrastructureSpec(value: DataplexTaskSparkInfrastructureSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.putInfrastructureSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec">DataplexTaskSparkInfrastructureSpec</a>

---

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetArchiveUris"></a>

```typescript
public resetArchiveUris(): void
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetFileUris"></a>

```typescript
public resetFileUris(): void
```

##### `resetInfrastructureSpec` <a name="resetInfrastructureSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetInfrastructureSpec"></a>

```typescript
public resetInfrastructureSpec(): void
```

##### `resetMainClass` <a name="resetMainClass" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetMainClass"></a>

```typescript
public resetMainClass(): void
```

##### `resetMainJarFileUri` <a name="resetMainJarFileUri" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetMainJarFileUri"></a>

```typescript
public resetMainJarFileUri(): void
```

##### `resetPythonScriptFile` <a name="resetPythonScriptFile" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetPythonScriptFile"></a>

```typescript
public resetPythonScriptFile(): void
```

##### `resetSqlScript` <a name="resetSqlScript" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetSqlScript"></a>

```typescript
public resetSqlScript(): void
```

##### `resetSqlScriptFile` <a name="resetSqlScriptFile" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.resetSqlScriptFile"></a>

```typescript
public resetSqlScriptFile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.infrastructureSpec">infrastructureSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference">DataplexTaskSparkInfrastructureSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.infrastructureSpecInput">infrastructureSpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec">DataplexTaskSparkInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.mainClassInput">mainClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.mainJarFileUriInput">mainJarFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.pythonScriptFileInput">pythonScriptFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.sqlScriptFileInput">sqlScriptFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.sqlScriptInput">sqlScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.archiveUris">archiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.fileUris">fileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.mainClass">mainClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.mainJarFileUri">mainJarFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.pythonScriptFile">pythonScriptFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.sqlScript">sqlScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.sqlScriptFile">sqlScriptFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark">DataplexTaskSpark</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `infrastructureSpec`<sup>Required</sup> <a name="infrastructureSpec" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.infrastructureSpec"></a>

```typescript
public readonly infrastructureSpec: DataplexTaskSparkInfrastructureSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpecOutputReference">DataplexTaskSparkInfrastructureSpecOutputReference</a>

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.archiveUrisInput"></a>

```typescript
public readonly archiveUrisInput: string[];
```

- *Type:* string[]

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.fileUrisInput"></a>

```typescript
public readonly fileUrisInput: string[];
```

- *Type:* string[]

---

##### `infrastructureSpecInput`<sup>Optional</sup> <a name="infrastructureSpecInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.infrastructureSpecInput"></a>

```typescript
public readonly infrastructureSpecInput: DataplexTaskSparkInfrastructureSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSparkInfrastructureSpec">DataplexTaskSparkInfrastructureSpec</a>

---

##### `mainClassInput`<sup>Optional</sup> <a name="mainClassInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.mainClassInput"></a>

```typescript
public readonly mainClassInput: string;
```

- *Type:* string

---

##### `mainJarFileUriInput`<sup>Optional</sup> <a name="mainJarFileUriInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.mainJarFileUriInput"></a>

```typescript
public readonly mainJarFileUriInput: string;
```

- *Type:* string

---

##### `pythonScriptFileInput`<sup>Optional</sup> <a name="pythonScriptFileInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.pythonScriptFileInput"></a>

```typescript
public readonly pythonScriptFileInput: string;
```

- *Type:* string

---

##### `sqlScriptFileInput`<sup>Optional</sup> <a name="sqlScriptFileInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.sqlScriptFileInput"></a>

```typescript
public readonly sqlScriptFileInput: string;
```

- *Type:* string

---

##### `sqlScriptInput`<sup>Optional</sup> <a name="sqlScriptInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.sqlScriptInput"></a>

```typescript
public readonly sqlScriptInput: string;
```

- *Type:* string

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.archiveUris"></a>

```typescript
public readonly archiveUris: string[];
```

- *Type:* string[]

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.fileUris"></a>

```typescript
public readonly fileUris: string[];
```

- *Type:* string[]

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.mainClass"></a>

```typescript
public readonly mainClass: string;
```

- *Type:* string

---

##### `mainJarFileUri`<sup>Required</sup> <a name="mainJarFileUri" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.mainJarFileUri"></a>

```typescript
public readonly mainJarFileUri: string;
```

- *Type:* string

---

##### `pythonScriptFile`<sup>Required</sup> <a name="pythonScriptFile" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.pythonScriptFile"></a>

```typescript
public readonly pythonScriptFile: string;
```

- *Type:* string

---

##### `sqlScript`<sup>Required</sup> <a name="sqlScript" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.sqlScript"></a>

```typescript
public readonly sqlScript: string;
```

- *Type:* string

---

##### `sqlScriptFile`<sup>Required</sup> <a name="sqlScriptFile" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.sqlScriptFile"></a>

```typescript
public readonly sqlScriptFile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexTask.DataplexTaskSparkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexTaskSpark;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskSpark">DataplexTaskSpark</a>

---


### DataplexTaskTimeoutsOutputReference <a name="DataplexTaskTimeoutsOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts">DataplexTaskTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexTask.DataplexTaskTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataplexTaskTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTimeouts">DataplexTaskTimeouts</a>

---


### DataplexTaskTriggerSpecOutputReference <a name="DataplexTaskTriggerSpecOutputReference" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.Initializer"></a>

```typescript
import { dataplexTask } from '@cdktf/provider-google'

new dataplexTask.DataplexTaskTriggerSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec">DataplexTaskTriggerSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexTaskTriggerSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexTask.DataplexTaskTriggerSpec">DataplexTaskTriggerSpec</a>

---



