# `bigtableAuthorizedView` Submodule <a name="`bigtableAuthorizedView` Submodule" id="@cdktf/provider-google.bigtableAuthorizedView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableAuthorizedView <a name="BigtableAuthorizedView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view google_bigtable_authorized_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer"></a>

```typescript
import { bigtableAuthorizedView } from '@cdktf/provider-google'

new bigtableAuthorizedView.BigtableAuthorizedView(scope: Construct, id: string, config: BigtableAuthorizedViewConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig">BigtableAuthorizedViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig">BigtableAuthorizedViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putSubsetView">putSubsetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetSubsetView">resetSubsetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSubsetView` <a name="putSubsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putSubsetView"></a>

```typescript
public putSubsetView(value: BigtableAuthorizedViewSubsetView): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putSubsetView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putTimeouts"></a>

```typescript
public putTimeouts(value: BigtableAuthorizedViewTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSubsetView` <a name="resetSubsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetSubsetView"></a>

```typescript
public resetSubsetView(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigtableAuthorizedView resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isConstruct"></a>

```typescript
import { bigtableAuthorizedView } from '@cdktf/provider-google'

bigtableAuthorizedView.BigtableAuthorizedView.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformElement"></a>

```typescript
import { bigtableAuthorizedView } from '@cdktf/provider-google'

bigtableAuthorizedView.BigtableAuthorizedView.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformResource"></a>

```typescript
import { bigtableAuthorizedView } from '@cdktf/provider-google'

bigtableAuthorizedView.BigtableAuthorizedView.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport"></a>

```typescript
import { bigtableAuthorizedView } from '@cdktf/provider-google'

bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BigtableAuthorizedView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigtableAuthorizedView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigtableAuthorizedView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigtableAuthorizedView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.subsetView">subsetView</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference">BigtableAuthorizedViewSubsetViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference">BigtableAuthorizedViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.instanceNameInput">instanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.subsetViewInput">subsetViewInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.deletionProtection">deletionProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.instanceName">instanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `subsetView`<sup>Required</sup> <a name="subsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.subsetView"></a>

```typescript
public readonly subsetView: BigtableAuthorizedViewSubsetViewOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference">BigtableAuthorizedViewSubsetViewOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.timeouts"></a>

```typescript
public readonly timeouts: BigtableAuthorizedViewTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference">BigtableAuthorizedViewTimeoutsOutputReference</a>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.instanceNameInput"></a>

```typescript
public readonly instanceNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `subsetViewInput`<sup>Optional</sup> <a name="subsetViewInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.subsetViewInput"></a>

```typescript
public readonly subsetViewInput: BigtableAuthorizedViewSubsetView;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BigtableAuthorizedViewTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableAuthorizedViewConfig <a name="BigtableAuthorizedViewConfig" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.Initializer"></a>

```typescript
import { bigtableAuthorizedView } from '@cdktf/provider-google'

const bigtableAuthorizedViewConfig: bigtableAuthorizedView.BigtableAuthorizedViewConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.instanceName">instanceName</a></code> | <code>string</code> | The name of the Bigtable instance in which the authorized view belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.name">name</a></code> | <code>string</code> | The name of the authorized view. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.tableName">tableName</a></code> | <code>string</code> | The name of the Bigtable table in which the authorized view belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.deletionProtection">deletionProtection</a></code> | <code>string</code> | A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#id BigtableAuthorizedView#id}. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.subsetView">subsetView</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a></code> | subset_view block. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

The name of the Bigtable instance in which the authorized view belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#instance_name BigtableAuthorizedView#instance_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the authorized view.

Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#name BigtableAuthorizedView#name}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The name of the Bigtable table in which the authorized view belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#table_name BigtableAuthorizedView#table_name}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: string;
```

- *Type:* string

A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#deletion_protection BigtableAuthorizedView#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#id BigtableAuthorizedView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#project BigtableAuthorizedView#project}

---

##### `subsetView`<sup>Optional</sup> <a name="subsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.subsetView"></a>

```typescript
public readonly subsetView: BigtableAuthorizedViewSubsetView;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

subset_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#subset_view BigtableAuthorizedView#subset_view}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BigtableAuthorizedViewTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#timeouts BigtableAuthorizedView#timeouts}

---

### BigtableAuthorizedViewSubsetView <a name="BigtableAuthorizedViewSubsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.Initializer"></a>

```typescript
import { bigtableAuthorizedView } from '@cdktf/provider-google'

const bigtableAuthorizedViewSubsetView: bigtableAuthorizedView.BigtableAuthorizedViewSubsetView = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.property.familySubsets">familySubsets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>[]</code> | family_subsets block. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.property.rowPrefixes">rowPrefixes</a></code> | <code>string[]</code> | Base64-encoded row prefixes to be included in the authorized view. |

---

##### `familySubsets`<sup>Optional</sup> <a name="familySubsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.property.familySubsets"></a>

```typescript
public readonly familySubsets: IResolvable | BigtableAuthorizedViewSubsetViewFamilySubsets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>[]

family_subsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#family_subsets BigtableAuthorizedView#family_subsets}

---

##### `rowPrefixes`<sup>Optional</sup> <a name="rowPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.property.rowPrefixes"></a>

```typescript
public readonly rowPrefixes: string[];
```

- *Type:* string[]

Base64-encoded row prefixes to be included in the authorized view.

To provide access to all rows, include the empty string as a prefix ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#row_prefixes BigtableAuthorizedView#row_prefixes}

---

### BigtableAuthorizedViewSubsetViewFamilySubsets <a name="BigtableAuthorizedViewSubsetViewFamilySubsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.Initializer"></a>

```typescript
import { bigtableAuthorizedView } from '@cdktf/provider-google'

const bigtableAuthorizedViewSubsetViewFamilySubsets: bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.familyName">familyName</a></code> | <code>string</code> | Name of the column family to be included in the authorized view. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifierPrefixes">qualifierPrefixes</a></code> | <code>string[]</code> | Base64-encoded prefixes for qualifiers of the column family to be included in the authorized view. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifiers">qualifiers</a></code> | <code>string[]</code> | Base64-encoded individual exact column qualifiers of the column family to be included in the authorized view. |

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.familyName"></a>

```typescript
public readonly familyName: string;
```

- *Type:* string

Name of the column family to be included in the authorized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#family_name BigtableAuthorizedView#family_name}

---

##### `qualifierPrefixes`<sup>Optional</sup> <a name="qualifierPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifierPrefixes"></a>

```typescript
public readonly qualifierPrefixes: string[];
```

- *Type:* string[]

Base64-encoded prefixes for qualifiers of the column family to be included in the authorized view.

Every qualifier starting with one of these prefixes is included in the authorized view. To provide access to all qualifiers, include the empty string as a prefix ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#qualifier_prefixes BigtableAuthorizedView#qualifier_prefixes}

---

##### `qualifiers`<sup>Optional</sup> <a name="qualifiers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifiers"></a>

```typescript
public readonly qualifiers: string[];
```

- *Type:* string[]

Base64-encoded individual exact column qualifiers of the column family to be included in the authorized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#qualifiers BigtableAuthorizedView#qualifiers}

---

### BigtableAuthorizedViewTimeouts <a name="BigtableAuthorizedViewTimeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.Initializer"></a>

```typescript
import { bigtableAuthorizedView } from '@cdktf/provider-google'

const bigtableAuthorizedViewTimeouts: bigtableAuthorizedView.BigtableAuthorizedViewTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#create BigtableAuthorizedView#create}. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#update BigtableAuthorizedView#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#create BigtableAuthorizedView#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/bigtable_authorized_view#update BigtableAuthorizedView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableAuthorizedViewSubsetViewFamilySubsetsList <a name="BigtableAuthorizedViewSubsetViewFamilySubsetsList" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer"></a>

```typescript
import { bigtableAuthorizedView } from '@cdktf/provider-google'

new bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.get"></a>

```typescript
public get(index: number): BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigtableAuthorizedViewSubsetViewFamilySubsets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>[]

---


### BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference <a name="BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer"></a>

```typescript
import { bigtableAuthorizedView } from '@cdktf/provider-google'

new bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifierPrefixes">resetQualifierPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifiers">resetQualifiers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQualifierPrefixes` <a name="resetQualifierPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifierPrefixes"></a>

```typescript
public resetQualifierPrefixes(): void
```

##### `resetQualifiers` <a name="resetQualifiers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifiers"></a>

```typescript
public resetQualifiers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyNameInput">familyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixesInput">qualifierPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiersInput">qualifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyName">familyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixes">qualifierPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiers">qualifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `familyNameInput`<sup>Optional</sup> <a name="familyNameInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyNameInput"></a>

```typescript
public readonly familyNameInput: string;
```

- *Type:* string

---

##### `qualifierPrefixesInput`<sup>Optional</sup> <a name="qualifierPrefixesInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixesInput"></a>

```typescript
public readonly qualifierPrefixesInput: string[];
```

- *Type:* string[]

---

##### `qualifiersInput`<sup>Optional</sup> <a name="qualifiersInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiersInput"></a>

```typescript
public readonly qualifiersInput: string[];
```

- *Type:* string[]

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyName"></a>

```typescript
public readonly familyName: string;
```

- *Type:* string

---

##### `qualifierPrefixes`<sup>Required</sup> <a name="qualifierPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixes"></a>

```typescript
public readonly qualifierPrefixes: string[];
```

- *Type:* string[]

---

##### `qualifiers`<sup>Required</sup> <a name="qualifiers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiers"></a>

```typescript
public readonly qualifiers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigtableAuthorizedViewSubsetViewFamilySubsets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>

---


### BigtableAuthorizedViewSubsetViewOutputReference <a name="BigtableAuthorizedViewSubsetViewOutputReference" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer"></a>

```typescript
import { bigtableAuthorizedView } from '@cdktf/provider-google'

new bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets">putFamilySubsets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resetFamilySubsets">resetFamilySubsets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resetRowPrefixes">resetRowPrefixes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFamilySubsets` <a name="putFamilySubsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets"></a>

```typescript
public putFamilySubsets(value: IResolvable | BigtableAuthorizedViewSubsetViewFamilySubsets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>[]

---

##### `resetFamilySubsets` <a name="resetFamilySubsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resetFamilySubsets"></a>

```typescript
public resetFamilySubsets(): void
```

##### `resetRowPrefixes` <a name="resetRowPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resetRowPrefixes"></a>

```typescript
public resetRowPrefixes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.familySubsets">familySubsets</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList">BigtableAuthorizedViewSubsetViewFamilySubsetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.familySubsetsInput">familySubsetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixesInput">rowPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixes">rowPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `familySubsets`<sup>Required</sup> <a name="familySubsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.familySubsets"></a>

```typescript
public readonly familySubsets: BigtableAuthorizedViewSubsetViewFamilySubsetsList;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList">BigtableAuthorizedViewSubsetViewFamilySubsetsList</a>

---

##### `familySubsetsInput`<sup>Optional</sup> <a name="familySubsetsInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.familySubsetsInput"></a>

```typescript
public readonly familySubsetsInput: IResolvable | BigtableAuthorizedViewSubsetViewFamilySubsets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>[]

---

##### `rowPrefixesInput`<sup>Optional</sup> <a name="rowPrefixesInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixesInput"></a>

```typescript
public readonly rowPrefixesInput: string[];
```

- *Type:* string[]

---

##### `rowPrefixes`<sup>Required</sup> <a name="rowPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixes"></a>

```typescript
public readonly rowPrefixes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigtableAuthorizedViewSubsetView;
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

---


### BigtableAuthorizedViewTimeoutsOutputReference <a name="BigtableAuthorizedViewTimeoutsOutputReference" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer"></a>

```typescript
import { bigtableAuthorizedView } from '@cdktf/provider-google'

new bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigtableAuthorizedViewTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>

---



