# `composerUserWorkloadsSecret` Submodule <a name="`composerUserWorkloadsSecret` Submodule" id="@cdktf/provider-google.composerUserWorkloadsSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComposerUserWorkloadsSecret <a name="ComposerUserWorkloadsSecret" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/composer_user_workloads_secret google_composer_user_workloads_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.Initializer"></a>

```typescript
import { composerUserWorkloadsSecret } from '@cdktf/provider-google'

new composerUserWorkloadsSecret.ComposerUserWorkloadsSecret(scope: Construct, id: string, config: ComposerUserWorkloadsSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig">ComposerUserWorkloadsSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig">ComposerUserWorkloadsSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.putTimeouts"></a>

```typescript
public putTimeouts(value: ComposerUserWorkloadsSecretTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeouts">ComposerUserWorkloadsSecretTimeouts</a>

---

##### `resetData` <a name="resetData" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.resetData"></a>

```typescript
public resetData(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComposerUserWorkloadsSecret resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.isConstruct"></a>

```typescript
import { composerUserWorkloadsSecret } from '@cdktf/provider-google'

composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.isTerraformElement"></a>

```typescript
import { composerUserWorkloadsSecret } from '@cdktf/provider-google'

composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.isTerraformResource"></a>

```typescript
import { composerUserWorkloadsSecret } from '@cdktf/provider-google'

composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.generateConfigForImport"></a>

```typescript
import { composerUserWorkloadsSecret } from '@cdktf/provider-google'

composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComposerUserWorkloadsSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComposerUserWorkloadsSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComposerUserWorkloadsSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/composer_user_workloads_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComposerUserWorkloadsSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference">ComposerUserWorkloadsSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeouts">ComposerUserWorkloadsSecretTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.timeouts"></a>

```typescript
public readonly timeouts: ComposerUserWorkloadsSecretTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference">ComposerUserWorkloadsSecretTimeoutsOutputReference</a>

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComposerUserWorkloadsSecretTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeouts">ComposerUserWorkloadsSecretTimeouts</a>

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComposerUserWorkloadsSecretConfig <a name="ComposerUserWorkloadsSecretConfig" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.Initializer"></a>

```typescript
import { composerUserWorkloadsSecret } from '@cdktf/provider-google'

const composerUserWorkloadsSecretConfig: composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.environment">environment</a></code> | <code>string</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.name">name</a></code> | <code>string</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of the secret data. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/composer_user_workloads_secret#id ComposerUserWorkloadsSecret#id}. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.region">region</a></code> | <code>string</code> | The location or Compute Engine region for the environment. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeouts">ComposerUserWorkloadsSecretTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/composer_user_workloads_secret#environment ComposerUserWorkloadsSecret#environment}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/composer_user_workloads_secret#name ComposerUserWorkloadsSecret#name}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of the secret data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/composer_user_workloads_secret#data ComposerUserWorkloadsSecret#data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/composer_user_workloads_secret#id ComposerUserWorkloadsSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/composer_user_workloads_secret#project ComposerUserWorkloadsSecret#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/composer_user_workloads_secret#region ComposerUserWorkloadsSecret#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComposerUserWorkloadsSecretTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeouts">ComposerUserWorkloadsSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/composer_user_workloads_secret#timeouts ComposerUserWorkloadsSecret#timeouts}

---

### ComposerUserWorkloadsSecretTimeouts <a name="ComposerUserWorkloadsSecretTimeouts" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeouts.Initializer"></a>

```typescript
import { composerUserWorkloadsSecret } from '@cdktf/provider-google'

const composerUserWorkloadsSecretTimeouts: composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/composer_user_workloads_secret#create ComposerUserWorkloadsSecret#create}. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/composer_user_workloads_secret#delete ComposerUserWorkloadsSecret#delete}. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/composer_user_workloads_secret#update ComposerUserWorkloadsSecret#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/composer_user_workloads_secret#create ComposerUserWorkloadsSecret#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/composer_user_workloads_secret#delete ComposerUserWorkloadsSecret#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/composer_user_workloads_secret#update ComposerUserWorkloadsSecret#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComposerUserWorkloadsSecretTimeoutsOutputReference <a name="ComposerUserWorkloadsSecretTimeoutsOutputReference" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.Initializer"></a>

```typescript
import { composerUserWorkloadsSecret } from '@cdktf/provider-google'

new composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeouts">ComposerUserWorkloadsSecretTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComposerUserWorkloadsSecretTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerUserWorkloadsSecret.ComposerUserWorkloadsSecretTimeouts">ComposerUserWorkloadsSecretTimeouts</a>

---



