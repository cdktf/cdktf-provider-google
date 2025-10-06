# `dataplexGlossaryCategory` Submodule <a name="`dataplexGlossaryCategory` Submodule" id="@cdktf/provider-google.dataplexGlossaryCategory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexGlossaryCategory <a name="DataplexGlossaryCategory" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category google_dataplex_glossary_category}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer"></a>

```typescript
import { dataplexGlossaryCategory } from '@cdktf/provider-google'

new dataplexGlossaryCategory.DataplexGlossaryCategory(scope: Construct, id: string, config: DataplexGlossaryCategoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig">DataplexGlossaryCategoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig">DataplexGlossaryCategoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetCategoryId">resetCategoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetGlossaryId">resetGlossaryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.putTimeouts"></a>

```typescript
public putTimeouts(value: DataplexGlossaryCategoryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a>

---

##### `resetCategoryId` <a name="resetCategoryId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetCategoryId"></a>

```typescript
public resetCategoryId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetGlossaryId` <a name="resetGlossaryId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetGlossaryId"></a>

```typescript
public resetGlossaryId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataplexGlossaryCategory resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isConstruct"></a>

```typescript
import { dataplexGlossaryCategory } from '@cdktf/provider-google'

dataplexGlossaryCategory.DataplexGlossaryCategory.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformElement"></a>

```typescript
import { dataplexGlossaryCategory } from '@cdktf/provider-google'

dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformResource"></a>

```typescript
import { dataplexGlossaryCategory } from '@cdktf/provider-google'

dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport"></a>

```typescript
import { dataplexGlossaryCategory } from '@cdktf/provider-google'

dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataplexGlossaryCategory resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataplexGlossaryCategory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataplexGlossaryCategory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataplexGlossaryCategory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference">DataplexGlossaryCategoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.categoryIdInput">categoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.glossaryIdInput">glossaryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.categoryId">categoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.glossaryId">glossaryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.timeouts"></a>

```typescript
public readonly timeouts: DataplexGlossaryCategoryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference">DataplexGlossaryCategoryTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `categoryIdInput`<sup>Optional</sup> <a name="categoryIdInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.categoryIdInput"></a>

```typescript
public readonly categoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `glossaryIdInput`<sup>Optional</sup> <a name="glossaryIdInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.glossaryIdInput"></a>

```typescript
public readonly glossaryIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataplexGlossaryCategoryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a>

---

##### `categoryId`<sup>Required</sup> <a name="categoryId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.categoryId"></a>

```typescript
public readonly categoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `glossaryId`<sup>Required</sup> <a name="glossaryId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.glossaryId"></a>

```typescript
public readonly glossaryId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexGlossaryCategoryConfig <a name="DataplexGlossaryCategoryConfig" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.Initializer"></a>

```typescript
import { dataplexGlossaryCategory } from '@cdktf/provider-google'

const dataplexGlossaryCategoryConfig: dataplexGlossaryCategory.DataplexGlossaryCategoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.location">location</a></code> | <code>string</code> | The location where the glossary category should reside. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.parent">parent</a></code> | <code>string</code> | The immediate parent of the GlossaryCategory in the resource-hierarchy. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.categoryId">categoryId</a></code> | <code>string</code> | The category id for creation. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.description">description</a></code> | <code>string</code> | The user-mutable description of the GlossaryCategory. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.displayName">displayName</a></code> | <code>string</code> | User friendly display name of the GlossaryCategory. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.glossaryId">glossaryId</a></code> | <code>string</code> | The glossary id for creation. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#id DataplexGlossaryCategory#id}. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels for the GlossaryCategory. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#project DataplexGlossaryCategory#project}. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the glossary category should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#location DataplexGlossaryCategory#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The immediate parent of the GlossaryCategory in the resource-hierarchy.

It can either be a Glossary or a Category. Format: projects/{projectId}/locations/{locationId}/glossaries/{glossaryId} OR projects/{projectId}/locations/{locationId}/glossaries/{glossaryId}/categories/{categoryId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#parent DataplexGlossaryCategory#parent}

---

##### `categoryId`<sup>Optional</sup> <a name="categoryId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.categoryId"></a>

```typescript
public readonly categoryId: string;
```

- *Type:* string

The category id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#category_id DataplexGlossaryCategory#category_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The user-mutable description of the GlossaryCategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#description DataplexGlossaryCategory#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User friendly display name of the GlossaryCategory.

This is user-mutable. This will be same as the categoryId, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#display_name DataplexGlossaryCategory#display_name}

---

##### `glossaryId`<sup>Optional</sup> <a name="glossaryId" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.glossaryId"></a>

```typescript
public readonly glossaryId: string;
```

- *Type:* string

The glossary id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#glossary_id DataplexGlossaryCategory#glossary_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#id DataplexGlossaryCategory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels for the GlossaryCategory.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#labels DataplexGlossaryCategory#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#project DataplexGlossaryCategory#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataplexGlossaryCategoryTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#timeouts DataplexGlossaryCategory#timeouts}

---

### DataplexGlossaryCategoryTimeouts <a name="DataplexGlossaryCategoryTimeouts" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.Initializer"></a>

```typescript
import { dataplexGlossaryCategory } from '@cdktf/provider-google'

const dataplexGlossaryCategoryTimeouts: dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#create DataplexGlossaryCategory#create}. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#delete DataplexGlossaryCategory#delete}. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#update DataplexGlossaryCategory#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#create DataplexGlossaryCategory#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#delete DataplexGlossaryCategory#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_glossary_category#update DataplexGlossaryCategory#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexGlossaryCategoryTimeoutsOutputReference <a name="DataplexGlossaryCategoryTimeoutsOutputReference" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataplexGlossaryCategory } from '@cdktf/provider-google'

new dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataplexGlossaryCategoryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a>

---



