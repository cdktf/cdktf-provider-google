# `loggingLinkedDataset` Submodule <a name="`loggingLinkedDataset` Submodule" id="@cdktf/provider-google.loggingLinkedDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingLinkedDataset <a name="LoggingLinkedDataset" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/logging_linked_dataset google_logging_linked_dataset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer"></a>

```typescript
import { loggingLinkedDataset } from '@cdktf/provider-google'

new loggingLinkedDataset.LoggingLinkedDataset(scope: Construct, id: string, config: LoggingLinkedDatasetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig">LoggingLinkedDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig">LoggingLinkedDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.putBigqueryDataset">putBigqueryDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetBigqueryDataset">resetBigqueryDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigqueryDataset` <a name="putBigqueryDataset" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.putBigqueryDataset"></a>

```typescript
public putBigqueryDataset(value: IResolvable | LoggingLinkedDatasetBigqueryDataset[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.putBigqueryDataset.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.putTimeouts"></a>

```typescript
public putTimeouts(value: LoggingLinkedDatasetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts">LoggingLinkedDatasetTimeouts</a>

---

##### `resetBigqueryDataset` <a name="resetBigqueryDataset" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetBigqueryDataset"></a>

```typescript
public resetBigqueryDataset(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoggingLinkedDataset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isConstruct"></a>

```typescript
import { loggingLinkedDataset } from '@cdktf/provider-google'

loggingLinkedDataset.LoggingLinkedDataset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isTerraformElement"></a>

```typescript
import { loggingLinkedDataset } from '@cdktf/provider-google'

loggingLinkedDataset.LoggingLinkedDataset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isTerraformResource"></a>

```typescript
import { loggingLinkedDataset } from '@cdktf/provider-google'

loggingLinkedDataset.LoggingLinkedDataset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.generateConfigForImport"></a>

```typescript
import { loggingLinkedDataset } from '@cdktf/provider-google'

loggingLinkedDataset.LoggingLinkedDataset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LoggingLinkedDataset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoggingLinkedDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoggingLinkedDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/logging_linked_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoggingLinkedDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.bigqueryDataset">bigqueryDataset</a></code> | <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList">LoggingLinkedDatasetBigqueryDatasetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference">LoggingLinkedDatasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.bigqueryDatasetInput">bigqueryDatasetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.linkIdInput">linkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts">LoggingLinkedDatasetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.linkId">linkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bigqueryDataset`<sup>Required</sup> <a name="bigqueryDataset" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.bigqueryDataset"></a>

```typescript
public readonly bigqueryDataset: LoggingLinkedDatasetBigqueryDatasetList;
```

- *Type:* <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList">LoggingLinkedDatasetBigqueryDatasetList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.timeouts"></a>

```typescript
public readonly timeouts: LoggingLinkedDatasetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference">LoggingLinkedDatasetTimeoutsOutputReference</a>

---

##### `bigqueryDatasetInput`<sup>Optional</sup> <a name="bigqueryDatasetInput" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.bigqueryDatasetInput"></a>

```typescript
public readonly bigqueryDatasetInput: IResolvable | LoggingLinkedDatasetBigqueryDataset[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>[]

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linkIdInput`<sup>Optional</sup> <a name="linkIdInput" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.linkIdInput"></a>

```typescript
public readonly linkIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LoggingLinkedDatasetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts">LoggingLinkedDatasetTimeouts</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingLinkedDatasetBigqueryDataset <a name="LoggingLinkedDatasetBigqueryDataset" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset.Initializer"></a>

```typescript
import { loggingLinkedDataset } from '@cdktf/provider-google'

const loggingLinkedDatasetBigqueryDataset: loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset = { ... }
```


### LoggingLinkedDatasetConfig <a name="LoggingLinkedDatasetConfig" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.Initializer"></a>

```typescript
import { loggingLinkedDataset } from '@cdktf/provider-google'

const loggingLinkedDatasetConfig: loggingLinkedDataset.LoggingLinkedDatasetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.bucket">bucket</a></code> | <code>string</code> | The bucket to which the linked dataset is attached. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.linkId">linkId</a></code> | <code>string</code> | The id of the linked dataset. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.bigqueryDataset">bigqueryDataset</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>[]</code> | bigquery_dataset block. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.description">description</a></code> | <code>string</code> | Describes this link. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/logging_linked_dataset#id LoggingLinkedDataset#id}. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.location">location</a></code> | <code>string</code> | The location of the linked dataset. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the linked dataset. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts">LoggingLinkedDatasetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The bucket to which the linked dataset is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/logging_linked_dataset#bucket LoggingLinkedDataset#bucket}

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

The id of the linked dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/logging_linked_dataset#link_id LoggingLinkedDataset#link_id}

---

##### `bigqueryDataset`<sup>Optional</sup> <a name="bigqueryDataset" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.bigqueryDataset"></a>

```typescript
public readonly bigqueryDataset: IResolvable | LoggingLinkedDatasetBigqueryDataset[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>[]

bigquery_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/logging_linked_dataset#bigquery_dataset LoggingLinkedDataset#bigquery_dataset}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Describes this link. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/logging_linked_dataset#description LoggingLinkedDataset#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/logging_linked_dataset#id LoggingLinkedDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the linked dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/logging_linked_dataset#location LoggingLinkedDataset#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the linked dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/logging_linked_dataset#parent LoggingLinkedDataset#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LoggingLinkedDatasetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts">LoggingLinkedDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/logging_linked_dataset#timeouts LoggingLinkedDataset#timeouts}

---

### LoggingLinkedDatasetTimeouts <a name="LoggingLinkedDatasetTimeouts" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts.Initializer"></a>

```typescript
import { loggingLinkedDataset } from '@cdktf/provider-google'

const loggingLinkedDatasetTimeouts: loggingLinkedDataset.LoggingLinkedDatasetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/logging_linked_dataset#create LoggingLinkedDataset#create}. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/logging_linked_dataset#delete LoggingLinkedDataset#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/logging_linked_dataset#create LoggingLinkedDataset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.37.0/docs/resources/logging_linked_dataset#delete LoggingLinkedDataset#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingLinkedDatasetBigqueryDatasetList <a name="LoggingLinkedDatasetBigqueryDatasetList" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.Initializer"></a>

```typescript
import { loggingLinkedDataset } from '@cdktf/provider-google'

new loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.get"></a>

```typescript
public get(index: number): LoggingLinkedDatasetBigqueryDatasetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingLinkedDatasetBigqueryDataset[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>[]

---


### LoggingLinkedDatasetBigqueryDatasetOutputReference <a name="LoggingLinkedDatasetBigqueryDatasetOutputReference" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer"></a>

```typescript
import { loggingLinkedDataset } from '@cdktf/provider-google'

new loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingLinkedDatasetBigqueryDataset;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>

---


### LoggingLinkedDatasetTimeoutsOutputReference <a name="LoggingLinkedDatasetTimeoutsOutputReference" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.Initializer"></a>

```typescript
import { loggingLinkedDataset } from '@cdktf/provider-google'

new loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts">LoggingLinkedDatasetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingLinkedDatasetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts">LoggingLinkedDatasetTimeouts</a>

---



