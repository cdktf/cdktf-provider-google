# `mlEngineModel` Submodule <a name="`mlEngineModel` Submodule" id="@cdktf/provider-google.mlEngineModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MlEngineModel <a name="MlEngineModel" id="@cdktf/provider-google.mlEngineModel.MlEngineModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model google_ml_engine_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer"></a>

```typescript
import { mlEngineModel } from '@cdktf/provider-google'

new mlEngineModel.MlEngineModel(scope: Construct, id: string, config: MlEngineModelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig">MlEngineModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig">MlEngineModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.putDefaultVersion">putDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetDefaultVersion">resetDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOnlinePredictionConsoleLogging">resetOnlinePredictionConsoleLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOnlinePredictionLogging">resetOnlinePredictionLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultVersion` <a name="putDefaultVersion" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putDefaultVersion"></a>

```typescript
public putDefaultVersion(value: MlEngineModelDefaultVersion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putDefaultVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putTimeouts"></a>

```typescript
public putTimeouts(value: MlEngineModelTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a>

---

##### `resetDefaultVersion` <a name="resetDefaultVersion" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetDefaultVersion"></a>

```typescript
public resetDefaultVersion(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetOnlinePredictionConsoleLogging` <a name="resetOnlinePredictionConsoleLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOnlinePredictionConsoleLogging"></a>

```typescript
public resetOnlinePredictionConsoleLogging(): void
```

##### `resetOnlinePredictionLogging` <a name="resetOnlinePredictionLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOnlinePredictionLogging"></a>

```typescript
public resetOnlinePredictionLogging(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MlEngineModel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isConstruct"></a>

```typescript
import { mlEngineModel } from '@cdktf/provider-google'

mlEngineModel.MlEngineModel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformElement"></a>

```typescript
import { mlEngineModel } from '@cdktf/provider-google'

mlEngineModel.MlEngineModel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformResource"></a>

```typescript
import { mlEngineModel } from '@cdktf/provider-google'

mlEngineModel.MlEngineModel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport"></a>

```typescript
import { mlEngineModel } from '@cdktf/provider-google'

mlEngineModel.MlEngineModel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MlEngineModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MlEngineModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MlEngineModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MlEngineModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.defaultVersion">defaultVersion</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference">MlEngineModelDefaultVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference">MlEngineModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.defaultVersionInput">defaultVersionInput</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionConsoleLoggingInput">onlinePredictionConsoleLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionLoggingInput">onlinePredictionLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionConsoleLogging">onlinePredictionConsoleLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionLogging">onlinePredictionLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultVersion`<sup>Required</sup> <a name="defaultVersion" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.defaultVersion"></a>

```typescript
public readonly defaultVersion: MlEngineModelDefaultVersionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference">MlEngineModelDefaultVersionOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.timeouts"></a>

```typescript
public readonly timeouts: MlEngineModelTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference">MlEngineModelTimeoutsOutputReference</a>

---

##### `defaultVersionInput`<sup>Optional</sup> <a name="defaultVersionInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.defaultVersionInput"></a>

```typescript
public readonly defaultVersionInput: MlEngineModelDefaultVersion;
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `onlinePredictionConsoleLoggingInput`<sup>Optional</sup> <a name="onlinePredictionConsoleLoggingInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionConsoleLoggingInput"></a>

```typescript
public readonly onlinePredictionConsoleLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onlinePredictionLoggingInput`<sup>Optional</sup> <a name="onlinePredictionLoggingInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionLoggingInput"></a>

```typescript
public readonly onlinePredictionLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MlEngineModelTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onlinePredictionConsoleLogging`<sup>Required</sup> <a name="onlinePredictionConsoleLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionConsoleLogging"></a>

```typescript
public readonly onlinePredictionConsoleLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onlinePredictionLogging`<sup>Required</sup> <a name="onlinePredictionLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionLogging"></a>

```typescript
public readonly onlinePredictionLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MlEngineModelConfig <a name="MlEngineModelConfig" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.Initializer"></a>

```typescript
import { mlEngineModel } from '@cdktf/provider-google'

const mlEngineModelConfig: mlEngineModel.MlEngineModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.name">name</a></code> | <code>string</code> | The name specified for the model. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.defaultVersion">defaultVersion</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a></code> | default_version block. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.description">description</a></code> | <code>string</code> | The description specified for the model when it was created. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#id MlEngineModel#id}. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | One or more labels that you can add, to organize your models. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.onlinePredictionConsoleLogging">onlinePredictionConsoleLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.onlinePredictionLogging">onlinePredictionLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, online prediction access logs are sent to StackDriver Logging. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#project MlEngineModel#project}. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.regions">regions</a></code> | <code>string[]</code> | The list of regions where the model is going to be deployed. Currently only one region per model is supported. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name specified for the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#name MlEngineModel#name}

---

##### `defaultVersion`<sup>Optional</sup> <a name="defaultVersion" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.defaultVersion"></a>

```typescript
public readonly defaultVersion: MlEngineModelDefaultVersion;
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a>

default_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#default_version MlEngineModel#default_version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description specified for the model when it was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#description MlEngineModel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#id MlEngineModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

One or more labels that you can add, to organize your models.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#labels MlEngineModel#labels}

---

##### `onlinePredictionConsoleLogging`<sup>Optional</sup> <a name="onlinePredictionConsoleLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.onlinePredictionConsoleLogging"></a>

```typescript
public readonly onlinePredictionConsoleLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#online_prediction_console_logging MlEngineModel#online_prediction_console_logging}

---

##### `onlinePredictionLogging`<sup>Optional</sup> <a name="onlinePredictionLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.onlinePredictionLogging"></a>

```typescript
public readonly onlinePredictionLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, online prediction access logs are sent to StackDriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#online_prediction_logging MlEngineModel#online_prediction_logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#project MlEngineModel#project}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

The list of regions where the model is going to be deployed. Currently only one region per model is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#regions MlEngineModel#regions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MlEngineModelTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#timeouts MlEngineModel#timeouts}

---

### MlEngineModelDefaultVersion <a name="MlEngineModelDefaultVersion" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion.Initializer"></a>

```typescript
import { mlEngineModel } from '@cdktf/provider-google'

const mlEngineModelDefaultVersion: mlEngineModel.MlEngineModelDefaultVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion.property.name">name</a></code> | <code>string</code> | The name specified for the version when it was created. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name specified for the version when it was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#name MlEngineModel#name}

---

### MlEngineModelTimeouts <a name="MlEngineModelTimeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.Initializer"></a>

```typescript
import { mlEngineModel } from '@cdktf/provider-google'

const mlEngineModelTimeouts: mlEngineModel.MlEngineModelTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#create MlEngineModel#create}. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#delete MlEngineModel#delete}. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#update MlEngineModel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#create MlEngineModel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#delete MlEngineModel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/ml_engine_model#update MlEngineModel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MlEngineModelDefaultVersionOutputReference <a name="MlEngineModelDefaultVersionOutputReference" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer"></a>

```typescript
import { mlEngineModel } from '@cdktf/provider-google'

new mlEngineModel.MlEngineModelDefaultVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MlEngineModelDefaultVersion;
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a>

---


### MlEngineModelTimeoutsOutputReference <a name="MlEngineModelTimeoutsOutputReference" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer"></a>

```typescript
import { mlEngineModel } from '@cdktf/provider-google'

new mlEngineModel.MlEngineModelTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MlEngineModelTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a>

---



