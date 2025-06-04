# `composerUserWorkloadsConfigMap` Submodule <a name="`composerUserWorkloadsConfigMap` Submodule" id="@cdktf/provider-google.composerUserWorkloadsConfigMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComposerUserWorkloadsConfigMap <a name="ComposerUserWorkloadsConfigMap" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map google_composer_user_workloads_config_map}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer"></a>

```typescript
import { composerUserWorkloadsConfigMap } from '@cdktf/provider-google'

new composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap(scope: Construct, id: string, config: ComposerUserWorkloadsConfigMapConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig">ComposerUserWorkloadsConfigMapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig">ComposerUserWorkloadsConfigMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.putTimeouts"></a>

```typescript
public putTimeouts(value: ComposerUserWorkloadsConfigMapTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a>

---

##### `resetData` <a name="resetData" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetData"></a>

```typescript
public resetData(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComposerUserWorkloadsConfigMap resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isConstruct"></a>

```typescript
import { composerUserWorkloadsConfigMap } from '@cdktf/provider-google'

composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformElement"></a>

```typescript
import { composerUserWorkloadsConfigMap } from '@cdktf/provider-google'

composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformResource"></a>

```typescript
import { composerUserWorkloadsConfigMap } from '@cdktf/provider-google'

composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport"></a>

```typescript
import { composerUserWorkloadsConfigMap } from '@cdktf/provider-google'

composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComposerUserWorkloadsConfigMap resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComposerUserWorkloadsConfigMap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComposerUserWorkloadsConfigMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComposerUserWorkloadsConfigMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference">ComposerUserWorkloadsConfigMapTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.timeouts"></a>

```typescript
public readonly timeouts: ComposerUserWorkloadsConfigMapTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference">ComposerUserWorkloadsConfigMapTimeoutsOutputReference</a>

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComposerUserWorkloadsConfigMapTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a>

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComposerUserWorkloadsConfigMapConfig <a name="ComposerUserWorkloadsConfigMapConfig" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.Initializer"></a>

```typescript
import { composerUserWorkloadsConfigMap } from '@cdktf/provider-google'

const composerUserWorkloadsConfigMapConfig: composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.environment">environment</a></code> | <code>string</code> | Environment where the Kubernetes ConfigMap will be stored and used. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.name">name</a></code> | <code>string</code> | Name of the Kubernetes ConfigMap. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | The "data" field of Kubernetes ConfigMap, organized in key-value pairs. For details see: https://kubernetes.io/docs/concepts/configuration/configmap/. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map#id ComposerUserWorkloadsConfigMap#id}. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map#project ComposerUserWorkloadsConfigMap#project}. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.region">region</a></code> | <code>string</code> | The location or Compute Engine region for the environment. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

Environment where the Kubernetes ConfigMap will be stored and used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map#environment ComposerUserWorkloadsConfigMap#environment}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Kubernetes ConfigMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map#name ComposerUserWorkloadsConfigMap#name}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The "data" field of Kubernetes ConfigMap, organized in key-value pairs. For details see: https://kubernetes.io/docs/concepts/configuration/configmap/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map#data ComposerUserWorkloadsConfigMap#data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map#id ComposerUserWorkloadsConfigMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map#project ComposerUserWorkloadsConfigMap#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map#region ComposerUserWorkloadsConfigMap#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComposerUserWorkloadsConfigMapTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map#timeouts ComposerUserWorkloadsConfigMap#timeouts}

---

### ComposerUserWorkloadsConfigMapTimeouts <a name="ComposerUserWorkloadsConfigMapTimeouts" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.Initializer"></a>

```typescript
import { composerUserWorkloadsConfigMap } from '@cdktf/provider-google'

const composerUserWorkloadsConfigMapTimeouts: composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map#create ComposerUserWorkloadsConfigMap#create}. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map#delete ComposerUserWorkloadsConfigMap#delete}. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map#update ComposerUserWorkloadsConfigMap#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map#create ComposerUserWorkloadsConfigMap#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map#delete ComposerUserWorkloadsConfigMap#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/composer_user_workloads_config_map#update ComposerUserWorkloadsConfigMap#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComposerUserWorkloadsConfigMapTimeoutsOutputReference <a name="ComposerUserWorkloadsConfigMapTimeoutsOutputReference" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer"></a>

```typescript
import { composerUserWorkloadsConfigMap } from '@cdktf/provider-google'

new composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComposerUserWorkloadsConfigMapTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a>

---



