# `accessContextManagerAccessLevel` Submodule <a name="`accessContextManagerAccessLevel` Submodule" id="@cdktf/provider-google.accessContextManagerAccessLevel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerAccessLevel <a name="AccessContextManagerAccessLevel" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level google_access_context_manager_access_level}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

new accessContextManagerAccessLevel.AccessContextManagerAccessLevel(scope: Construct, id: string, config: AccessContextManagerAccessLevelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig">AccessContextManagerAccessLevelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig">AccessContextManagerAccessLevelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putBasic">putBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putCustom">putCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetBasic">resetBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetCustom">resetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBasic` <a name="putBasic" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putBasic"></a>

```typescript
public putBasic(value: AccessContextManagerAccessLevelBasic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic">AccessContextManagerAccessLevelBasic</a>

---

##### `putCustom` <a name="putCustom" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putCustom"></a>

```typescript
public putCustom(value: AccessContextManagerAccessLevelCustom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom">AccessContextManagerAccessLevelCustom</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putTimeouts"></a>

```typescript
public putTimeouts(value: AccessContextManagerAccessLevelTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts">AccessContextManagerAccessLevelTimeouts</a>

---

##### `resetBasic` <a name="resetBasic" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetBasic"></a>

```typescript
public resetBasic(): void
```

##### `resetCustom` <a name="resetCustom" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetCustom"></a>

```typescript
public resetCustom(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccessContextManagerAccessLevel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isConstruct"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isTerraformElement"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isTerraformResource"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.generateConfigForImport"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

accessContextManagerAccessLevel.AccessContextManagerAccessLevel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AccessContextManagerAccessLevel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessContextManagerAccessLevel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessContextManagerAccessLevel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccessContextManagerAccessLevel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference">AccessContextManagerAccessLevelBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference">AccessContextManagerAccessLevelCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference">AccessContextManagerAccessLevelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.basicInput">basicInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic">AccessContextManagerAccessLevelBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.customInput">customInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom">AccessContextManagerAccessLevelCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts">AccessContextManagerAccessLevelTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.basic"></a>

```typescript
public readonly basic: AccessContextManagerAccessLevelBasicOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference">AccessContextManagerAccessLevelBasicOutputReference</a>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.custom"></a>

```typescript
public readonly custom: AccessContextManagerAccessLevelCustomOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference">AccessContextManagerAccessLevelCustomOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.timeouts"></a>

```typescript
public readonly timeouts: AccessContextManagerAccessLevelTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference">AccessContextManagerAccessLevelTimeoutsOutputReference</a>

---

##### `basicInput`<sup>Optional</sup> <a name="basicInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.basicInput"></a>

```typescript
public readonly basicInput: AccessContextManagerAccessLevelBasic;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic">AccessContextManagerAccessLevelBasic</a>

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.customInput"></a>

```typescript
public readonly customInput: AccessContextManagerAccessLevelCustom;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom">AccessContextManagerAccessLevelCustom</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: AccessContextManagerAccessLevelTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts">AccessContextManagerAccessLevelTimeouts</a> | cdktf.IResolvable

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerAccessLevelBasic <a name="AccessContextManagerAccessLevelBasic" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

const accessContextManagerAccessLevelBasic: accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic.property.combiningFunction">combiningFunction</a></code> | <code>string</code> | How the conditions list should be combined to determine if a request is granted this AccessLevel. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | AccessContextManagerAccessLevelBasicConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#conditions AccessContextManagerAccessLevel#conditions}

---

##### `combiningFunction`<sup>Optional</sup> <a name="combiningFunction" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic.property.combiningFunction"></a>

```typescript
public readonly combiningFunction: string;
```

- *Type:* string

How the conditions list should be combined to determine if a request is granted this AccessLevel.

If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#combining_function AccessContextManagerAccessLevel#combining_function}

---

### AccessContextManagerAccessLevelBasicConditions <a name="AccessContextManagerAccessLevelBasicConditions" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

const accessContextManagerAccessLevelBasicConditions: accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.devicePolicy">devicePolicy</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy">AccessContextManagerAccessLevelBasicConditionsDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.ipSubnetworks">ipSubnetworks</a></code> | <code>string[]</code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.members">members</a></code> | <code>string[]</code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.regions">regions</a></code> | <code>string[]</code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.requiredAccessLevels">requiredAccessLevels</a></code> | <code>string[]</code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.vpcNetworkSources">vpcNetworkSources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>[]</code> | vpc_network_sources block. |

---

##### `devicePolicy`<sup>Optional</sup> <a name="devicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.devicePolicy"></a>

```typescript
public readonly devicePolicy: AccessContextManagerAccessLevelBasicConditionsDevicePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy">AccessContextManagerAccessLevelBasicConditionsDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#device_policy AccessContextManagerAccessLevel#device_policy}

---

##### `ipSubnetworks`<sup>Optional</sup> <a name="ipSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.ipSubnetworks"></a>

```typescript
public readonly ipSubnetworks: string[];
```

- *Type:* string[]

A list of CIDR block IP subnetwork specification.

May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#ip_subnetworks AccessContextManagerAccessLevel#ip_subnetworks}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#members AccessContextManagerAccessLevel#members}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#negate AccessContextManagerAccessLevel#negate}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#regions AccessContextManagerAccessLevel#regions}

---

##### `requiredAccessLevels`<sup>Optional</sup> <a name="requiredAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.requiredAccessLevels"></a>

```typescript
public readonly requiredAccessLevels: string[];
```

- *Type:* string[]

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#required_access_levels AccessContextManagerAccessLevel#required_access_levels}

---

##### `vpcNetworkSources`<sup>Optional</sup> <a name="vpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.vpcNetworkSources"></a>

```typescript
public readonly vpcNetworkSources: IResolvable | AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>[]

vpc_network_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#vpc_network_sources AccessContextManagerAccessLevel#vpc_network_sources}

---

### AccessContextManagerAccessLevelBasicConditionsDevicePolicy <a name="AccessContextManagerAccessLevelBasicConditionsDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

const accessContextManagerAccessLevelBasicConditionsDevicePolicy: accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels">allowedDeviceManagementLevels</a></code> | <code>string[]</code> | A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.allowedEncryptionStatuses">allowedEncryptionStatuses</a></code> | <code>string[]</code> | A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.osConstraints">osConstraints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>[]</code> | os_constraints block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireAdminApproval">requireAdminApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the device needs to be approved by the customer admin. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireCorpOwned">requireCorpOwned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the device needs to be corp owned. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireScreenLock">requireScreenLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false. |

---

##### `allowedDeviceManagementLevels`<sup>Optional</sup> <a name="allowedDeviceManagementLevels" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels"></a>

```typescript
public readonly allowedDeviceManagementLevels: string[];
```

- *Type:* string[]

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#allowed_device_management_levels AccessContextManagerAccessLevel#allowed_device_management_levels}

---

##### `allowedEncryptionStatuses`<sup>Optional</sup> <a name="allowedEncryptionStatuses" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.allowedEncryptionStatuses"></a>

```typescript
public readonly allowedEncryptionStatuses: string[];
```

- *Type:* string[]

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#allowed_encryption_statuses AccessContextManagerAccessLevel#allowed_encryption_statuses}

---

##### `osConstraints`<sup>Optional</sup> <a name="osConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.osConstraints"></a>

```typescript
public readonly osConstraints: IResolvable | AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>[]

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#os_constraints AccessContextManagerAccessLevel#os_constraints}

---

##### `requireAdminApproval`<sup>Optional</sup> <a name="requireAdminApproval" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireAdminApproval"></a>

```typescript
public readonly requireAdminApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#require_admin_approval AccessContextManagerAccessLevel#require_admin_approval}

---

##### `requireCorpOwned`<sup>Optional</sup> <a name="requireCorpOwned" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireCorpOwned"></a>

```typescript
public readonly requireCorpOwned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#require_corp_owned AccessContextManagerAccessLevel#require_corp_owned}

---

##### `requireScreenLock`<sup>Optional</sup> <a name="requireScreenLock" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireScreenLock"></a>

```typescript
public readonly requireScreenLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#require_screen_lock AccessContextManagerAccessLevel#require_screen_lock}

---

### AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints <a name="AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

const accessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints: accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.osType">osType</a></code> | <code>string</code> | The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.minimumVersion">minimumVersion</a></code> | <code>string</code> | The minimum allowed OS version. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.requireVerifiedChromeOs">requireVerifiedChromeOs</a></code> | <code>boolean \| cdktf.IResolvable</code> | If you specify DESKTOP_CHROME_OS for osType, you can optionally include requireVerifiedChromeOs to require Chrome Verified Access. |

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#os_type AccessContextManagerAccessLevel#os_type}

---

##### `minimumVersion`<sup>Optional</sup> <a name="minimumVersion" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.minimumVersion"></a>

```typescript
public readonly minimumVersion: string;
```

- *Type:* string

The minimum allowed OS version.

If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#minimum_version AccessContextManagerAccessLevel#minimum_version}

---

##### `requireVerifiedChromeOs`<sup>Optional</sup> <a name="requireVerifiedChromeOs" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.requireVerifiedChromeOs"></a>

```typescript
public readonly requireVerifiedChromeOs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If you specify DESKTOP_CHROME_OS for osType, you can optionally include requireVerifiedChromeOs to require Chrome Verified Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#require_verified_chrome_os AccessContextManagerAccessLevel#require_verified_chrome_os}

---

### AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources <a name="AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

const accessContextManagerAccessLevelBasicConditionsVpcNetworkSources: accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources.property.vpcSubnetwork">vpcSubnetwork</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | vpc_subnetwork block. |

---

##### `vpcSubnetwork`<sup>Optional</sup> <a name="vpcSubnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources.property.vpcSubnetwork"></a>

```typescript
public readonly vpcSubnetwork: AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

vpc_subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#vpc_subnetwork AccessContextManagerAccessLevel#vpc_subnetwork}

---

### AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork <a name="AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

const accessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork: accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.network">network</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks">vpcIpSubnetworks</a></code> | <code>string[]</code> | CIDR block IP subnetwork specification. Must be IPv4. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Required.

Network name to be allowed by this Access Level. Networks of foreign organizations requires 'compute.network.get' permission to be granted to caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#network AccessContextManagerAccessLevel#network}

---

##### `vpcIpSubnetworks`<sup>Optional</sup> <a name="vpcIpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks"></a>

```typescript
public readonly vpcIpSubnetworks: string[];
```

- *Type:* string[]

CIDR block IP subnetwork specification. Must be IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#vpc_ip_subnetworks AccessContextManagerAccessLevel#vpc_ip_subnetworks}

---

### AccessContextManagerAccessLevelConfig <a name="AccessContextManagerAccessLevelConfig" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

const accessContextManagerAccessLevelConfig: accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.name">name</a></code> | <code>string</code> | Resource name for the Access Level. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.parent">parent</a></code> | <code>string</code> | The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.title">title</a></code> | <code>string</code> | Human readable title. Must be unique within the Policy. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic">AccessContextManagerAccessLevelBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom">AccessContextManagerAccessLevelCustom</a></code> | custom block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.description">description</a></code> | <code>string</code> | Description of the AccessLevel and its use. Does not affect behavior. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#id AccessContextManagerAccessLevel#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts">AccessContextManagerAccessLevelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Resource name for the Access Level.

The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#name AccessContextManagerAccessLevel#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#parent AccessContextManagerAccessLevel#parent}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Human readable title. Must be unique within the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#title AccessContextManagerAccessLevel#title}

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.basic"></a>

```typescript
public readonly basic: AccessContextManagerAccessLevelBasic;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic">AccessContextManagerAccessLevelBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#basic AccessContextManagerAccessLevel#basic}

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.custom"></a>

```typescript
public readonly custom: AccessContextManagerAccessLevelCustom;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom">AccessContextManagerAccessLevelCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#custom AccessContextManagerAccessLevel#custom}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the AccessLevel and its use. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#description AccessContextManagerAccessLevel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#id AccessContextManagerAccessLevel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AccessContextManagerAccessLevelTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts">AccessContextManagerAccessLevelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#timeouts AccessContextManagerAccessLevel#timeouts}

---

### AccessContextManagerAccessLevelCustom <a name="AccessContextManagerAccessLevelCustom" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

const accessContextManagerAccessLevelCustom: accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr">AccessContextManagerAccessLevelCustomExpr</a></code> | expr block. |

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom.property.expr"></a>

```typescript
public readonly expr: AccessContextManagerAccessLevelCustomExpr;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr">AccessContextManagerAccessLevelCustomExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#expr AccessContextManagerAccessLevel#expr}

---

### AccessContextManagerAccessLevelCustomExpr <a name="AccessContextManagerAccessLevelCustomExpr" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

const accessContextManagerAccessLevelCustomExpr: accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#expression AccessContextManagerAccessLevel#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#description AccessContextManagerAccessLevel#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#location AccessContextManagerAccessLevel#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#title AccessContextManagerAccessLevel#title}

---

### AccessContextManagerAccessLevelTimeouts <a name="AccessContextManagerAccessLevelTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

const accessContextManagerAccessLevelTimeouts: accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#create AccessContextManagerAccessLevel#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#delete AccessContextManagerAccessLevel#delete}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#update AccessContextManagerAccessLevel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#create AccessContextManagerAccessLevel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#delete AccessContextManagerAccessLevel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/access_context_manager_access_level#update AccessContextManagerAccessLevel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList <a name="AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

new accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.get"></a>

```typescript
public get(index: number): AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>[]

---


### AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference <a name="AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

new accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion">resetMinimumVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resetRequireVerifiedChromeOs">resetRequireVerifiedChromeOs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumVersion` <a name="resetMinimumVersion" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion"></a>

```typescript
public resetMinimumVersion(): void
```

##### `resetRequireVerifiedChromeOs` <a name="resetRequireVerifiedChromeOs" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resetRequireVerifiedChromeOs"></a>

```typescript
public resetRequireVerifiedChromeOs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput">minimumVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput">osTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.requireVerifiedChromeOsInput">requireVerifiedChromeOsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion">minimumVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.requireVerifiedChromeOs">requireVerifiedChromeOs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minimumVersionInput`<sup>Optional</sup> <a name="minimumVersionInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput"></a>

```typescript
public readonly minimumVersionInput: string;
```

- *Type:* string

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput"></a>

```typescript
public readonly osTypeInput: string;
```

- *Type:* string

---

##### `requireVerifiedChromeOsInput`<sup>Optional</sup> <a name="requireVerifiedChromeOsInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.requireVerifiedChromeOsInput"></a>

```typescript
public readonly requireVerifiedChromeOsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minimumVersion`<sup>Required</sup> <a name="minimumVersion" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion"></a>

```typescript
public readonly minimumVersion: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `requireVerifiedChromeOs`<sup>Required</sup> <a name="requireVerifiedChromeOs" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.requireVerifiedChromeOs"></a>

```typescript
public readonly requireVerifiedChromeOs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a> | cdktf.IResolvable

---


### AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference <a name="AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

new accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.putOsConstraints">putOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels">resetAllowedDeviceManagementLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses">resetAllowedEncryptionStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetOsConstraints">resetOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval">resetRequireAdminApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned">resetRequireCorpOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock">resetRequireScreenLock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOsConstraints` <a name="putOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.putOsConstraints"></a>

```typescript
public putOsConstraints(value: IResolvable | AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.putOsConstraints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>[]

---

##### `resetAllowedDeviceManagementLevels` <a name="resetAllowedDeviceManagementLevels" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels"></a>

```typescript
public resetAllowedDeviceManagementLevels(): void
```

##### `resetAllowedEncryptionStatuses` <a name="resetAllowedEncryptionStatuses" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses"></a>

```typescript
public resetAllowedEncryptionStatuses(): void
```

##### `resetOsConstraints` <a name="resetOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetOsConstraints"></a>

```typescript
public resetOsConstraints(): void
```

##### `resetRequireAdminApproval` <a name="resetRequireAdminApproval" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval"></a>

```typescript
public resetRequireAdminApproval(): void
```

##### `resetRequireCorpOwned` <a name="resetRequireCorpOwned" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned"></a>

```typescript
public resetRequireCorpOwned(): void
```

##### `resetRequireScreenLock` <a name="resetRequireScreenLock" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock"></a>

```typescript
public resetRequireScreenLock(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.osConstraints">osConstraints</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput">allowedDeviceManagementLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput">allowedEncryptionStatusesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput">osConstraintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput">requireAdminApprovalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput">requireCorpOwnedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput">requireScreenLockInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels">allowedDeviceManagementLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses">allowedEncryptionStatuses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval">requireAdminApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned">requireCorpOwned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireScreenLock">requireScreenLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy">AccessContextManagerAccessLevelBasicConditionsDevicePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `osConstraints`<sup>Required</sup> <a name="osConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.osConstraints"></a>

```typescript
public readonly osConstraints: AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList</a>

---

##### `allowedDeviceManagementLevelsInput`<sup>Optional</sup> <a name="allowedDeviceManagementLevelsInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput"></a>

```typescript
public readonly allowedDeviceManagementLevelsInput: string[];
```

- *Type:* string[]

---

##### `allowedEncryptionStatusesInput`<sup>Optional</sup> <a name="allowedEncryptionStatusesInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput"></a>

```typescript
public readonly allowedEncryptionStatusesInput: string[];
```

- *Type:* string[]

---

##### `osConstraintsInput`<sup>Optional</sup> <a name="osConstraintsInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput"></a>

```typescript
public readonly osConstraintsInput: IResolvable | AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>[]

---

##### `requireAdminApprovalInput`<sup>Optional</sup> <a name="requireAdminApprovalInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput"></a>

```typescript
public readonly requireAdminApprovalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireCorpOwnedInput`<sup>Optional</sup> <a name="requireCorpOwnedInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput"></a>

```typescript
public readonly requireCorpOwnedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireScreenLockInput`<sup>Optional</sup> <a name="requireScreenLockInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput"></a>

```typescript
public readonly requireScreenLockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedDeviceManagementLevels`<sup>Required</sup> <a name="allowedDeviceManagementLevels" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels"></a>

```typescript
public readonly allowedDeviceManagementLevels: string[];
```

- *Type:* string[]

---

##### `allowedEncryptionStatuses`<sup>Required</sup> <a name="allowedEncryptionStatuses" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses"></a>

```typescript
public readonly allowedEncryptionStatuses: string[];
```

- *Type:* string[]

---

##### `requireAdminApproval`<sup>Required</sup> <a name="requireAdminApproval" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval"></a>

```typescript
public readonly requireAdminApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireCorpOwned`<sup>Required</sup> <a name="requireCorpOwned" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned"></a>

```typescript
public readonly requireCorpOwned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireScreenLock`<sup>Required</sup> <a name="requireScreenLock" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireScreenLock"></a>

```typescript
public readonly requireScreenLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessContextManagerAccessLevelBasicConditionsDevicePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy">AccessContextManagerAccessLevelBasicConditionsDevicePolicy</a>

---


### AccessContextManagerAccessLevelBasicConditionsList <a name="AccessContextManagerAccessLevelBasicConditionsList" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

new accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.get"></a>

```typescript
public get(index: number): AccessContextManagerAccessLevelBasicConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessContextManagerAccessLevelBasicConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>[]

---


### AccessContextManagerAccessLevelBasicConditionsOutputReference <a name="AccessContextManagerAccessLevelBasicConditionsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

new accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy">putDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putVpcNetworkSources">putVpcNetworkSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetDevicePolicy">resetDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetIpSubnetworks">resetIpSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetMembers">resetMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetRequiredAccessLevels">resetRequiredAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetVpcNetworkSources">resetVpcNetworkSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDevicePolicy` <a name="putDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy"></a>

```typescript
public putDevicePolicy(value: AccessContextManagerAccessLevelBasicConditionsDevicePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy">AccessContextManagerAccessLevelBasicConditionsDevicePolicy</a>

---

##### `putVpcNetworkSources` <a name="putVpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putVpcNetworkSources"></a>

```typescript
public putVpcNetworkSources(value: IResolvable | AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putVpcNetworkSources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>[]

---

##### `resetDevicePolicy` <a name="resetDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetDevicePolicy"></a>

```typescript
public resetDevicePolicy(): void
```

##### `resetIpSubnetworks` <a name="resetIpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetIpSubnetworks"></a>

```typescript
public resetIpSubnetworks(): void
```

##### `resetMembers` <a name="resetMembers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetMembers"></a>

```typescript
public resetMembers(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetRequiredAccessLevels` <a name="resetRequiredAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetRequiredAccessLevels"></a>

```typescript
public resetRequiredAccessLevels(): void
```

##### `resetVpcNetworkSources` <a name="resetVpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetVpcNetworkSources"></a>

```typescript
public resetVpcNetworkSources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.devicePolicy">devicePolicy</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.vpcNetworkSources">vpcNetworkSources</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.devicePolicyInput">devicePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy">AccessContextManagerAccessLevelBasicConditionsDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.ipSubnetworksInput">ipSubnetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.requiredAccessLevelsInput">requiredAccessLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.vpcNetworkSourcesInput">vpcNetworkSourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.ipSubnetworks">ipSubnetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.requiredAccessLevels">requiredAccessLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `devicePolicy`<sup>Required</sup> <a name="devicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.devicePolicy"></a>

```typescript
public readonly devicePolicy: AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference</a>

---

##### `vpcNetworkSources`<sup>Required</sup> <a name="vpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.vpcNetworkSources"></a>

```typescript
public readonly vpcNetworkSources: AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList</a>

---

##### `devicePolicyInput`<sup>Optional</sup> <a name="devicePolicyInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.devicePolicyInput"></a>

```typescript
public readonly devicePolicyInput: AccessContextManagerAccessLevelBasicConditionsDevicePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy">AccessContextManagerAccessLevelBasicConditionsDevicePolicy</a>

---

##### `ipSubnetworksInput`<sup>Optional</sup> <a name="ipSubnetworksInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.ipSubnetworksInput"></a>

```typescript
public readonly ipSubnetworksInput: string[];
```

- *Type:* string[]

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `requiredAccessLevelsInput`<sup>Optional</sup> <a name="requiredAccessLevelsInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.requiredAccessLevelsInput"></a>

```typescript
public readonly requiredAccessLevelsInput: string[];
```

- *Type:* string[]

---

##### `vpcNetworkSourcesInput`<sup>Optional</sup> <a name="vpcNetworkSourcesInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.vpcNetworkSourcesInput"></a>

```typescript
public readonly vpcNetworkSourcesInput: IResolvable | AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>[]

---

##### `ipSubnetworks`<sup>Required</sup> <a name="ipSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.ipSubnetworks"></a>

```typescript
public readonly ipSubnetworks: string[];
```

- *Type:* string[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `requiredAccessLevels`<sup>Required</sup> <a name="requiredAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.requiredAccessLevels"></a>

```typescript
public readonly requiredAccessLevels: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessContextManagerAccessLevelBasicConditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>

---


### AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList <a name="AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

new accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.get"></a>

```typescript
public get(index: number): AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>[]

---


### AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference <a name="AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

new accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork">putVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resetVpcSubnetwork">resetVpcSubnetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcSubnetwork` <a name="putVpcSubnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork"></a>

```typescript
public putVpcSubnetwork(value: AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---

##### `resetVpcSubnetwork` <a name="resetVpcSubnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resetVpcSubnetwork"></a>

```typescript
public resetVpcSubnetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetwork">vpcSubnetwork</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput">vpcSubnetworkInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcSubnetwork`<sup>Required</sup> <a name="vpcSubnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetwork"></a>

```typescript
public readonly vpcSubnetwork: AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference</a>

---

##### `vpcSubnetworkInput`<sup>Optional</sup> <a name="vpcSubnetworkInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput"></a>

```typescript
public readonly vpcSubnetworkInput: AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>

---


### AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference <a name="AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

new accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks">resetVpcIpSubnetworks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcIpSubnetworks` <a name="resetVpcIpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks"></a>

```typescript
public resetVpcIpSubnetworks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput">vpcIpSubnetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks">vpcIpSubnetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `vpcIpSubnetworksInput`<sup>Optional</sup> <a name="vpcIpSubnetworksInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput"></a>

```typescript
public readonly vpcIpSubnetworksInput: string[];
```

- *Type:* string[]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `vpcIpSubnetworks`<sup>Required</sup> <a name="vpcIpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks"></a>

```typescript
public readonly vpcIpSubnetworks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---


### AccessContextManagerAccessLevelBasicOutputReference <a name="AccessContextManagerAccessLevelBasicOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

new accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.resetCombiningFunction">resetCombiningFunction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | AccessContextManagerAccessLevelBasicConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>[]

---

##### `resetCombiningFunction` <a name="resetCombiningFunction" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.resetCombiningFunction"></a>

```typescript
public resetCombiningFunction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList">AccessContextManagerAccessLevelBasicConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.combiningFunctionInput">combiningFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.combiningFunction">combiningFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic">AccessContextManagerAccessLevelBasic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.conditions"></a>

```typescript
public readonly conditions: AccessContextManagerAccessLevelBasicConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList">AccessContextManagerAccessLevelBasicConditionsList</a>

---

##### `combiningFunctionInput`<sup>Optional</sup> <a name="combiningFunctionInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.combiningFunctionInput"></a>

```typescript
public readonly combiningFunctionInput: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | AccessContextManagerAccessLevelBasicConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>[]

---

##### `combiningFunction`<sup>Required</sup> <a name="combiningFunction" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.combiningFunction"></a>

```typescript
public readonly combiningFunction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessContextManagerAccessLevelBasic;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic">AccessContextManagerAccessLevelBasic</a>

---


### AccessContextManagerAccessLevelCustomExprOutputReference <a name="AccessContextManagerAccessLevelCustomExprOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

new accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr">AccessContextManagerAccessLevelCustomExpr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessContextManagerAccessLevelCustomExpr;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr">AccessContextManagerAccessLevelCustomExpr</a>

---


### AccessContextManagerAccessLevelCustomOutputReference <a name="AccessContextManagerAccessLevelCustomOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

new accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.putExpr">putExpr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpr` <a name="putExpr" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.putExpr"></a>

```typescript
public putExpr(value: AccessContextManagerAccessLevelCustomExpr): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr">AccessContextManagerAccessLevelCustomExpr</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference">AccessContextManagerAccessLevelCustomExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.exprInput">exprInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr">AccessContextManagerAccessLevelCustomExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom">AccessContextManagerAccessLevelCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.expr"></a>

```typescript
public readonly expr: AccessContextManagerAccessLevelCustomExprOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference">AccessContextManagerAccessLevelCustomExprOutputReference</a>

---

##### `exprInput`<sup>Optional</sup> <a name="exprInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.exprInput"></a>

```typescript
public readonly exprInput: AccessContextManagerAccessLevelCustomExpr;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr">AccessContextManagerAccessLevelCustomExpr</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessContextManagerAccessLevelCustom;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom">AccessContextManagerAccessLevelCustom</a>

---


### AccessContextManagerAccessLevelTimeoutsOutputReference <a name="AccessContextManagerAccessLevelTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.Initializer"></a>

```typescript
import { accessContextManagerAccessLevel } from '@cdktf/provider-google'

new accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts">AccessContextManagerAccessLevelTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccessContextManagerAccessLevelTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts">AccessContextManagerAccessLevelTimeouts</a> | cdktf.IResolvable

---



