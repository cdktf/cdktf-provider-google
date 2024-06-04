# `composerEnvironment` Submodule <a name="`composerEnvironment` Submodule" id="@cdktf/provider-google.composerEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComposerEnvironment <a name="ComposerEnvironment" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment google_composer_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironment(scope: Construct, id: string, config: ComposerEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig">ComposerEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig">ComposerEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putStorageConfig">putStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetStorageConfig">resetStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig"></a>

```typescript
public putConfig(value: ComposerEnvironmentConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a>

---

##### `putStorageConfig` <a name="putStorageConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putStorageConfig"></a>

```typescript
public putStorageConfig(value: ComposerEnvironmentStorageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig">ComposerEnvironmentStorageConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putTimeouts"></a>

```typescript
public putTimeouts(value: ComposerEnvironmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStorageConfig` <a name="resetStorageConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetStorageConfig"></a>

```typescript
public resetStorageConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComposerEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isConstruct"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

composerEnvironment.ComposerEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformElement"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

composerEnvironment.ComposerEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformResource"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

composerEnvironment.ComposerEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.generateConfigForImport"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

composerEnvironment.ComposerEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComposerEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComposerEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComposerEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComposerEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference">ComposerEnvironmentConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference">ComposerEnvironmentStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference">ComposerEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.storageConfigInput">storageConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig">ComposerEnvironmentStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.config"></a>

```typescript
public readonly config: ComposerEnvironmentConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference">ComposerEnvironmentConfigAOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `storageConfig`<sup>Required</sup> <a name="storageConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.storageConfig"></a>

```typescript
public readonly storageConfig: ComposerEnvironmentStorageConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference">ComposerEnvironmentStorageConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.timeouts"></a>

```typescript
public readonly timeouts: ComposerEnvironmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference">ComposerEnvironmentTimeoutsOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.configInput"></a>

```typescript
public readonly configInput: ComposerEnvironmentConfigA;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `storageConfigInput`<sup>Optional</sup> <a name="storageConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.storageConfigInput"></a>

```typescript
public readonly storageConfigInput: ComposerEnvironmentStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig">ComposerEnvironmentStorageConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComposerEnvironmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComposerEnvironmentConfig <a name="ComposerEnvironmentConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfig: composerEnvironment.ComposerEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.name">name</a></code> | <code>string</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#id ComposerEnvironment#id}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels for this environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.region">region</a></code> | <code>string</code> | The location or Compute Engine region for the environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig">ComposerEnvironmentStorageConfig</a></code> | storage_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#name ComposerEnvironment#name}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.config"></a>

```typescript
public readonly config: ComposerEnvironmentConfigA;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#config ComposerEnvironment#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#id ComposerEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels for this environment.

The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])?. Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?. No more than 64 labels can be associated with a given environment. Both keys and values must be <= 128 bytes in size.

				**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
				Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#labels ComposerEnvironment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#project ComposerEnvironment#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#region ComposerEnvironment#region}

---

##### `storageConfig`<sup>Optional</sup> <a name="storageConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.storageConfig"></a>

```typescript
public readonly storageConfig: ComposerEnvironmentStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig">ComposerEnvironmentStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#storage_config ComposerEnvironment#storage_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComposerEnvironmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#timeouts ComposerEnvironment#timeouts}

---

### ComposerEnvironmentConfigA <a name="ComposerEnvironmentConfigA" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigA: composerEnvironment.ComposerEnvironmentConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.databaseConfig">databaseConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a></code> | database_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.dataRetentionConfig">dataRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfig</a></code> | data_retention_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.environmentSize">environmentSize</a></code> | <code>string</code> | The size of the Cloud Composer environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.masterAuthorizedNetworksConfig">masterAuthorizedNetworksConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | master_authorized_networks_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.nodeCount">nodeCount</a></code> | <code>number</code> | The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.privateEnvironmentConfig">privateEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | private_environment_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.recoveryConfig">recoveryConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a></code> | recovery_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.resilienceMode">resilienceMode</a></code> | <code>string</code> | Whether high resilience is enabled or not. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.softwareConfig">softwareConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.webServerConfig">webServerConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a></code> | web_server_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.webServerNetworkAccessControl">webServerNetworkAccessControl</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | web_server_network_access_control block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.workloadsConfig">workloadsConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a></code> | workloads_config block. |

---

##### `databaseConfig`<sup>Optional</sup> <a name="databaseConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.databaseConfig"></a>

```typescript
public readonly databaseConfig: ComposerEnvironmentConfigDatabaseConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a>

database_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#database_config ComposerEnvironment#database_config}

---

##### `dataRetentionConfig`<sup>Optional</sup> <a name="dataRetentionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.dataRetentionConfig"></a>

```typescript
public readonly dataRetentionConfig: ComposerEnvironmentConfigDataRetentionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfig</a>

data_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#data_retention_config ComposerEnvironment#data_retention_config}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: ComposerEnvironmentConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#encryption_config ComposerEnvironment#encryption_config}

---

##### `environmentSize`<sup>Optional</sup> <a name="environmentSize" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.environmentSize"></a>

```typescript
public readonly environmentSize: string;
```

- *Type:* string

The size of the Cloud Composer environment.

This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#environment_size ComposerEnvironment#environment_size}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: ComposerEnvironmentConfigMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#maintenance_window ComposerEnvironment#maintenance_window}

---

##### `masterAuthorizedNetworksConfig`<sup>Optional</sup> <a name="masterAuthorizedNetworksConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.masterAuthorizedNetworksConfig"></a>

```typescript
public readonly masterAuthorizedNetworksConfig: ComposerEnvironmentConfigMasterAuthorizedNetworksConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

master_authorized_networks_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#master_authorized_networks_config ComposerEnvironment#master_authorized_networks_config}

---

##### `nodeConfig`<sup>Optional</sup> <a name="nodeConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: ComposerEnvironmentConfigNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#node_config ComposerEnvironment#node_config}

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

The number of nodes in the Kubernetes Engine cluster that will be used to run this environment.

This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#node_count ComposerEnvironment#node_count}

---

##### `privateEnvironmentConfig`<sup>Optional</sup> <a name="privateEnvironmentConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.privateEnvironmentConfig"></a>

```typescript
public readonly privateEnvironmentConfig: ComposerEnvironmentConfigPrivateEnvironmentConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a>

private_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#private_environment_config ComposerEnvironment#private_environment_config}

---

##### `recoveryConfig`<sup>Optional</sup> <a name="recoveryConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.recoveryConfig"></a>

```typescript
public readonly recoveryConfig: ComposerEnvironmentConfigRecoveryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a>

recovery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#recovery_config ComposerEnvironment#recovery_config}

---

##### `resilienceMode`<sup>Optional</sup> <a name="resilienceMode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.resilienceMode"></a>

```typescript
public readonly resilienceMode: string;
```

- *Type:* string

Whether high resilience is enabled or not.

This field is supported for Cloud Composer environments in versions composer-2.1.15-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#resilience_mode ComposerEnvironment#resilience_mode}

---

##### `softwareConfig`<sup>Optional</sup> <a name="softwareConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.softwareConfig"></a>

```typescript
public readonly softwareConfig: ComposerEnvironmentConfigSoftwareConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#software_config ComposerEnvironment#software_config}

---

##### `webServerConfig`<sup>Optional</sup> <a name="webServerConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.webServerConfig"></a>

```typescript
public readonly webServerConfig: ComposerEnvironmentConfigWebServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a>

web_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#web_server_config ComposerEnvironment#web_server_config}

---

##### `webServerNetworkAccessControl`<sup>Optional</sup> <a name="webServerNetworkAccessControl" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.webServerNetworkAccessControl"></a>

```typescript
public readonly webServerNetworkAccessControl: ComposerEnvironmentConfigWebServerNetworkAccessControl;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a>

web_server_network_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#web_server_network_access_control ComposerEnvironment#web_server_network_access_control}

---

##### `workloadsConfig`<sup>Optional</sup> <a name="workloadsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.workloadsConfig"></a>

```typescript
public readonly workloadsConfig: ComposerEnvironmentConfigWorkloadsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a>

workloads_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#workloads_config ComposerEnvironment#workloads_config}

---

### ComposerEnvironmentConfigDatabaseConfig <a name="ComposerEnvironmentConfigDatabaseConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigDatabaseConfig: composerEnvironment.ComposerEnvironmentConfigDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig.property.machineType">machineType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig.property.zone">zone</a></code> | <code>string</code> | Optional. Cloud SQL database preferred zone. |

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

Optional.

Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#machine_type ComposerEnvironment#machine_type}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Optional. Cloud SQL database preferred zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#zone ComposerEnvironment#zone}

---

### ComposerEnvironmentConfigDataRetentionConfig <a name="ComposerEnvironmentConfigDataRetentionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigDataRetentionConfig: composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig.property.taskLogsRetentionConfig">taskLogsRetentionConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>[]</code> | task_logs_retention_config block. |

---

##### `taskLogsRetentionConfig`<sup>Required</sup> <a name="taskLogsRetentionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig.property.taskLogsRetentionConfig"></a>

```typescript
public readonly taskLogsRetentionConfig: IResolvable | ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>[]

task_logs_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#task_logs_retention_config ComposerEnvironment#task_logs_retention_config}

---

### ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig <a name="ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig: composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.property.storageMode">storageMode</a></code> | <code>string</code> | Whether logs in cloud logging only is enabled or not. |

---

##### `storageMode`<sup>Optional</sup> <a name="storageMode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.property.storageMode"></a>

```typescript
public readonly storageMode: string;
```

- *Type:* string

Whether logs in cloud logging only is enabled or not.

This field is supported for Cloud Composer environments in versions composer-2.0.32-airflow-2.1.4 and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#storage_mode ComposerEnvironment#storage_mode}

---

### ComposerEnvironmentConfigEncryptionConfig <a name="ComposerEnvironmentConfigEncryptionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigEncryptionConfig: composerEnvironment.ComposerEnvironmentConfigEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#kms_key_name ComposerEnvironment#kms_key_name}

---

### ComposerEnvironmentConfigMaintenanceWindow <a name="ComposerEnvironmentConfigMaintenanceWindow" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigMaintenanceWindow: composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.endTime">endTime</a></code> | <code>string</code> | Maintenance window end time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.recurrence">recurrence</a></code> | <code>string</code> | Maintenance window recurrence. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.startTime">startTime</a></code> | <code>string</code> | Start time of the first recurrence of the maintenance window. |

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Maintenance window end time.

It is used only to calculate the duration of the maintenance window. The value for end-time must be in the future, relative to 'start_time'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#end_time ComposerEnvironment#end_time}

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.recurrence"></a>

```typescript
public readonly recurrence: string;
```

- *Type:* string

Maintenance window recurrence.

Format is a subset of RFC-5545 (https://tools.ietf.org/html/rfc5545) 'RRULE'. The only allowed values for 'FREQ' field are 'FREQ=DAILY' and 'FREQ=WEEKLY;BYDAY=...'. Example values: 'FREQ=WEEKLY;BYDAY=TU,WE', 'FREQ=DAILY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#recurrence ComposerEnvironment#recurrence}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Start time of the first recurrence of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#start_time ComposerEnvironment#start_time}

---

### ComposerEnvironmentConfigMasterAuthorizedNetworksConfig <a name="ComposerEnvironmentConfigMasterAuthorizedNetworksConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigMasterAuthorizedNetworksConfig: composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not master authorized networks is enabled. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.cidrBlocks">cidrBlocks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>[]</code> | cidr_blocks block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not master authorized networks is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#enabled ComposerEnvironment#enabled}

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: IResolvable | ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>[]

cidr_blocks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#cidr_blocks ComposerEnvironment#cidr_blocks}

---

### ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks <a name="ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks: composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | cidr_block must be specified in CIDR notation. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.displayName">displayName</a></code> | <code>string</code> | display_name is a field for users to identify CIDR blocks. |

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

cidr_block must be specified in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#cidr_block ComposerEnvironment#cidr_block}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

display_name is a field for users to identify CIDR blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#display_name ComposerEnvironment#display_name}

---

### ComposerEnvironmentConfigNodeConfig <a name="ComposerEnvironmentConfigNodeConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigNodeConfig: composerEnvironment.ComposerEnvironmentConfigNodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | The disk size in GB used for node VMs. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.enableIpMasqAgent">enableIpMasqAgent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.ipAllocationPolicy">ipAllocationPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy">ComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>[]</code> | Configuration for controlling how IPs are allocated in the GKE cluster. Cannot be updated. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.machineType">machineType</a></code> | <code>string</code> | The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.network">network</a></code> | <code>string</code> | The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | The set of Google API scopes to be made available on all node VMs. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The Google Cloud Platform Service Account to be used by the node VMs. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.subnetwork">subnetwork</a></code> | <code>string</code> | The Compute Engine subnetwork to be used for machine communications, specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.tags">tags</a></code> | <code>string[]</code> | The list of instance tags applied to all node VMs. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.zone">zone</a></code> | <code>string</code> | The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. |

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

The disk size in GB used for node VMs.

Minimum size is 20GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#disk_size_gb ComposerEnvironment#disk_size_gb}

---

##### `enableIpMasqAgent`<sup>Optional</sup> <a name="enableIpMasqAgent" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.enableIpMasqAgent"></a>

```typescript
public readonly enableIpMasqAgent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic.

See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#enable_ip_masq_agent ComposerEnvironment#enable_ip_masq_agent}

---

##### `ipAllocationPolicy`<sup>Optional</sup> <a name="ipAllocationPolicy" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.ipAllocationPolicy"></a>

```typescript
public readonly ipAllocationPolicy: IResolvable | ComposerEnvironmentConfigNodeConfigIpAllocationPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy">ComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>[]

Configuration for controlling how IPs are allocated in the GKE cluster. Cannot be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#ip_allocation_policy ComposerEnvironment#ip_allocation_policy}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The Compute Engine machine type used for cluster instances, specified as a name or relative resource name.

For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#machine_type ComposerEnvironment#machine_type}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The Compute Engine machine type used for cluster instances, specified as a name or relative resource name.

For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. The network must belong to the environment's project. If unspecified, the "default" network ID in the environment's project is used. If a Custom Subnet Network is provided, subnetwork must also be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#network ComposerEnvironment#network}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

The set of Google API scopes to be made available on all node VMs.

Cannot be updated. If empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#oauth_scopes ComposerEnvironment#oauth_scopes}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The Google Cloud Platform Service Account to be used by the node VMs.

If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. If given, note that the service account must have roles/composer.worker for any GCP resources created under the Cloud Composer Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#service_account ComposerEnvironment#service_account}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

The Compute Engine subnetwork to be used for machine communications, specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#subnetwork ComposerEnvironment#subnetwork}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

The list of instance tags applied to all node VMs.

Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035. Cannot be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#tags ComposerEnvironment#tags}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#zone ComposerEnvironment#zone}

---

### ComposerEnvironmentConfigNodeConfigIpAllocationPolicy <a name="ComposerEnvironmentConfigNodeConfigIpAllocationPolicy" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigNodeConfigIpAllocationPolicy: composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterIpv4CidrBlock">clusterIpv4CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#cluster_ipv4_cidr_block ComposerEnvironment#cluster_ipv4_cidr_block}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterSecondaryRangeName">clusterSecondaryRangeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#cluster_secondary_range_name ComposerEnvironment#cluster_secondary_range_name}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesIpv4CidrBlock">servicesIpv4CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#services_ipv4_cidr_block ComposerEnvironment#services_ipv4_cidr_block}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesSecondaryRangeName">servicesSecondaryRangeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#services_secondary_range_name ComposerEnvironment#services_secondary_range_name}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.useIpAliases">useIpAliases</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#use_ip_aliases ComposerEnvironment#use_ip_aliases}. |

---

##### `clusterIpv4CidrBlock`<sup>Optional</sup> <a name="clusterIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterIpv4CidrBlock"></a>

```typescript
public readonly clusterIpv4CidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#cluster_ipv4_cidr_block ComposerEnvironment#cluster_ipv4_cidr_block}.

---

##### `clusterSecondaryRangeName`<sup>Optional</sup> <a name="clusterSecondaryRangeName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterSecondaryRangeName"></a>

```typescript
public readonly clusterSecondaryRangeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#cluster_secondary_range_name ComposerEnvironment#cluster_secondary_range_name}.

---

##### `servicesIpv4CidrBlock`<sup>Optional</sup> <a name="servicesIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesIpv4CidrBlock"></a>

```typescript
public readonly servicesIpv4CidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#services_ipv4_cidr_block ComposerEnvironment#services_ipv4_cidr_block}.

---

##### `servicesSecondaryRangeName`<sup>Optional</sup> <a name="servicesSecondaryRangeName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesSecondaryRangeName"></a>

```typescript
public readonly servicesSecondaryRangeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#services_secondary_range_name ComposerEnvironment#services_secondary_range_name}.

---

##### `useIpAliases`<sup>Optional</sup> <a name="useIpAliases" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.useIpAliases"></a>

```typescript
public readonly useIpAliases: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#use_ip_aliases ComposerEnvironment#use_ip_aliases}.

---

### ComposerEnvironmentConfigPrivateEnvironmentConfig <a name="ComposerEnvironmentConfigPrivateEnvironmentConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigPrivateEnvironmentConfig: composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerConnectionSubnetwork">cloudComposerConnectionSubnetwork</a></code> | <code>string</code> | When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerNetworkIpv4CidrBlock">cloudComposerNetworkIpv4CidrBlock</a></code> | <code>string</code> | The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudSqlIpv4CidrBlock">cloudSqlIpv4CidrBlock</a></code> | <code>string</code> | The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.connectionType">connectionType</a></code> | <code>string</code> | Mode of internal communication within the Composer environment. Must be one of "VPC_PEERING" or "PRIVATE_SERVICE_CONNECT". |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivateEndpoint">enablePrivateEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, access to the public endpoint of the GKE cluster is denied. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivatelyUsedPublicIps">enablePrivatelyUsedPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.masterIpv4CidrBlock">masterIpv4CidrBlock</a></code> | <code>string</code> | The IP range in CIDR notation to use for the hosted master network. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.webServerIpv4CidrBlock">webServerIpv4CidrBlock</a></code> | <code>string</code> | The CIDR block from which IP range for web server will be reserved. |

---

##### `cloudComposerConnectionSubnetwork`<sup>Optional</sup> <a name="cloudComposerConnectionSubnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerConnectionSubnetwork"></a>

```typescript
public readonly cloudComposerConnectionSubnetwork: string;
```

- *Type:* string

When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork.

This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#cloud_composer_connection_subnetwork ComposerEnvironment#cloud_composer_connection_subnetwork}

---

##### `cloudComposerNetworkIpv4CidrBlock`<sup>Optional</sup> <a name="cloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerNetworkIpv4CidrBlock"></a>

```typescript
public readonly cloudComposerNetworkIpv4CidrBlock: string;
```

- *Type:* string

The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved.

Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#cloud_composer_network_ipv4_cidr_block ComposerEnvironment#cloud_composer_network_ipv4_cidr_block}

---

##### `cloudSqlIpv4CidrBlock`<sup>Optional</sup> <a name="cloudSqlIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudSqlIpv4CidrBlock"></a>

```typescript
public readonly cloudSqlIpv4CidrBlock: string;
```

- *Type:* string

The CIDR block from which IP range in tenant project will be reserved for Cloud SQL.

Needs to be disjoint from web_server_ipv4_cidr_block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#cloud_sql_ipv4_cidr_block ComposerEnvironment#cloud_sql_ipv4_cidr_block}

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

Mode of internal communication within the Composer environment. Must be one of "VPC_PEERING" or "PRIVATE_SERVICE_CONNECT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#connection_type ComposerEnvironment#connection_type}

---

##### `enablePrivateEndpoint`<sup>Optional</sup> <a name="enablePrivateEndpoint" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivateEndpoint"></a>

```typescript
public readonly enablePrivateEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, access to the public endpoint of the GKE cluster is denied.

If this field is set to true, ip_allocation_policy.use_ip_aliases must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#enable_private_endpoint ComposerEnvironment#enable_private_endpoint}

---

##### `enablePrivatelyUsedPublicIps`<sup>Optional</sup> <a name="enablePrivatelyUsedPublicIps" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivatelyUsedPublicIps"></a>

```typescript
public readonly enablePrivatelyUsedPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#enable_privately_used_public_ips ComposerEnvironment#enable_privately_used_public_ips}

---

##### `masterIpv4CidrBlock`<sup>Optional</sup> <a name="masterIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.masterIpv4CidrBlock"></a>

```typescript
public readonly masterIpv4CidrBlock: string;
```

- *Type:* string

The IP range in CIDR notation to use for the hosted master network.

This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. If left blank, the default value of '172.16.0.0/28' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#master_ipv4_cidr_block ComposerEnvironment#master_ipv4_cidr_block}

---

##### `webServerIpv4CidrBlock`<sup>Optional</sup> <a name="webServerIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.webServerIpv4CidrBlock"></a>

```typescript
public readonly webServerIpv4CidrBlock: string;
```

- *Type:* string

The CIDR block from which IP range for web server will be reserved.

Needs to be disjoint from master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#web_server_ipv4_cidr_block ComposerEnvironment#web_server_ipv4_cidr_block}

---

### ComposerEnvironmentConfigRecoveryConfig <a name="ComposerEnvironmentConfigRecoveryConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigRecoveryConfig: composerEnvironment.ComposerEnvironmentConfigRecoveryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig.property.scheduledSnapshotsConfig">scheduledSnapshotsConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | scheduled_snapshots_config block. |

---

##### `scheduledSnapshotsConfig`<sup>Optional</sup> <a name="scheduledSnapshotsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig.property.scheduledSnapshotsConfig"></a>

```typescript
public readonly scheduledSnapshotsConfig: ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

scheduled_snapshots_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#scheduled_snapshots_config ComposerEnvironment#scheduled_snapshots_config}

---

### ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig <a name="ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig: composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotCreationSchedule">snapshotCreationSchedule</a></code> | <code>string</code> | Snapshot schedule, in the unix-cron format. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotLocation">snapshotLocation</a></code> | <code>string</code> | the URI of a bucket folder where to save the snapshot. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.timeZone">timeZone</a></code> | <code>string</code> | A time zone for the schedule. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#enabled ComposerEnvironment#enabled}

---

##### `snapshotCreationSchedule`<sup>Optional</sup> <a name="snapshotCreationSchedule" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotCreationSchedule"></a>

```typescript
public readonly snapshotCreationSchedule: string;
```

- *Type:* string

Snapshot schedule, in the unix-cron format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#snapshot_creation_schedule ComposerEnvironment#snapshot_creation_schedule}

---

##### `snapshotLocation`<sup>Optional</sup> <a name="snapshotLocation" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotLocation"></a>

```typescript
public readonly snapshotLocation: string;
```

- *Type:* string

the URI of a bucket folder where to save the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#snapshot_location ComposerEnvironment#snapshot_location}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

A time zone for the schedule.

This value is a time offset and does not take into account daylight saving time changes. Valid values are from UTC-12 to UTC+12. Examples: UTC, UTC-01, UTC+03.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#time_zone ComposerEnvironment#time_zone}

---

### ComposerEnvironmentConfigSoftwareConfig <a name="ComposerEnvironmentConfigSoftwareConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigSoftwareConfig: composerEnvironment.ComposerEnvironmentConfigSoftwareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.airflowConfigOverrides">airflowConfigOverrides</a></code> | <code>{[ key: string ]: string}</code> | Apache Airflow configuration properties to override. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.envVariables">envVariables</a></code> | <code>{[ key: string ]: string}</code> | Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.imageVersion">imageVersion</a></code> | <code>string</code> | The version of the software running in the environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.pypiPackages">pypiPackages</a></code> | <code>{[ key: string ]: string}</code> | Custom Python Package Index (PyPI) packages to be installed in the environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.schedulerCount">schedulerCount</a></code> | <code>number</code> | The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*. |

---

##### `airflowConfigOverrides`<sup>Optional</sup> <a name="airflowConfigOverrides" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.airflowConfigOverrides"></a>

```typescript
public readonly airflowConfigOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Apache Airflow configuration properties to override.

Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and cannot contain "=" or ";". Section and property names cannot contain characters: "." Apache Airflow configuration property names must be written in snake_case. Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are blacklisted, and cannot be overridden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#airflow_config_overrides ComposerEnvironment#airflow_config_overrides}

---

##### `envVariables`<sup>Optional</sup> <a name="envVariables" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.envVariables"></a>

```typescript
public readonly envVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes.

Environment variable names must match the regular expression [a-zA-Z_][a-zA-Z0-9_]*. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+), and they cannot match any of the following reserved names: AIRFLOW_HOME C_FORCE_ROOT CONTAINER_NAME DAGS_FOLDER GCP_PROJECT GCS_BUCKET GKE_CLUSTER_NAME SQL_DATABASE SQL_INSTANCE SQL_PASSWORD SQL_PROJECT SQL_REGION SQL_USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#env_variables ComposerEnvironment#env_variables}

---

##### `imageVersion`<sup>Optional</sup> <a name="imageVersion" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

The version of the software running in the environment.

This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression composer-([0-9]+(\.[0-9]+\.[0-9]+(-preview\.[0-9]+)?)?|latest)-airflow-([0-9]+(\.[0-9]+(\.[0-9]+)?)?). The Cloud Composer portion of the image version is a full semantic version, or an alias in the form of major version number or 'latest'. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. See documentation for more details and version list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#image_version ComposerEnvironment#image_version}

---

##### `pypiPackages`<sup>Optional</sup> <a name="pypiPackages" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.pypiPackages"></a>

```typescript
public readonly pypiPackages: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom Python Package Index (PyPI) packages to be installed in the environment.

Keys refer to the lowercase package name (e.g. "numpy"). Values are the lowercase extras and version specifier (e.g. "==1.12.0", "[devel,gcp_api]", "[devel]>=1.8.2, <1.9.2"). To specify a package without pinning it to a version specifier, use the empty string as the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#pypi_packages ComposerEnvironment#pypi_packages}

---

##### `pythonVersion`<sup>Optional</sup> <a name="pythonVersion" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes.

Can be set to '2' or '3'. If not specified, the default is '2'. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use Python major version 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#python_version ComposerEnvironment#python_version}

---

##### `schedulerCount`<sup>Optional</sup> <a name="schedulerCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.schedulerCount"></a>

```typescript
public readonly schedulerCount: number;
```

- *Type:* number

The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#scheduler_count ComposerEnvironment#scheduler_count}

---

### ComposerEnvironmentConfigWebServerConfig <a name="ComposerEnvironmentConfigWebServerConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigWebServerConfig: composerEnvironment.ComposerEnvironmentConfigWebServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig.property.machineType">machineType</a></code> | <code>string</code> | Optional. |

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

Optional.

Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. If not specified, composer-n1-webserver-2 will be used. Value custom is returned only in response, if Airflow web server parameters were manually changed to a non-standard values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#machine_type ComposerEnvironment#machine_type}

---

### ComposerEnvironmentConfigWebServerNetworkAccessControl <a name="ComposerEnvironmentConfigWebServerNetworkAccessControl" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigWebServerNetworkAccessControl: composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl.property.allowedIpRange">allowedIpRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>[]</code> | allowed_ip_range block. |

---

##### `allowedIpRange`<sup>Optional</sup> <a name="allowedIpRange" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl.property.allowedIpRange"></a>

```typescript
public readonly allowedIpRange: IResolvable | ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>[]

allowed_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#allowed_ip_range ComposerEnvironment#allowed_ip_range}

---

### ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange <a name="ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange: composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.value">value</a></code> | <code>string</code> | IP address or range, defined using CIDR notation, of requests that this rule applies to. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.description">description</a></code> | <code>string</code> | A description of this ip range. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

IP address or range, defined using CIDR notation, of requests that this rule applies to.

Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32 or 2001:0db8:0000:0042:0000:8a2e:0370:7334. IP range prefixes should be properly truncated. For example, 1.2.3.4/24 should be truncated to 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 should be truncated to 2001:db8::/32.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#value ComposerEnvironment#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this ip range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#description ComposerEnvironment#description}

---

### ComposerEnvironmentConfigWorkloadsConfig <a name="ComposerEnvironmentConfigWorkloadsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigWorkloadsConfig: composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.scheduler">scheduler</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | scheduler block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.triggerer">triggerer</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer">ComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | triggerer block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.webServer">webServer</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | web_server block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | worker block. |

---

##### `scheduler`<sup>Optional</sup> <a name="scheduler" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.scheduler"></a>

```typescript
public readonly scheduler: ComposerEnvironmentConfigWorkloadsConfigScheduler;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a>

scheduler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#scheduler ComposerEnvironment#scheduler}

---

##### `triggerer`<sup>Optional</sup> <a name="triggerer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.triggerer"></a>

```typescript
public readonly triggerer: ComposerEnvironmentConfigWorkloadsConfigTriggerer;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer">ComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

triggerer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#triggerer ComposerEnvironment#triggerer}

---

##### `webServer`<sup>Optional</sup> <a name="webServer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.webServer"></a>

```typescript
public readonly webServer: ComposerEnvironmentConfigWorkloadsConfigWebServer;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a>

web_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#web_server ComposerEnvironment#web_server}

---

##### `worker`<sup>Optional</sup> <a name="worker" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.worker"></a>

```typescript
public readonly worker: ComposerEnvironmentConfigWorkloadsConfigWorker;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a>

worker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#worker ComposerEnvironment#worker}

---

### ComposerEnvironmentConfigWorkloadsConfigScheduler <a name="ComposerEnvironmentConfigWorkloadsConfigScheduler" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigWorkloadsConfigScheduler: composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.count">count</a></code> | <code>number</code> | The number of schedulers. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.cpu">cpu</a></code> | <code>number</code> | CPU request and limit for a single Airflow scheduler replica. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.memoryGb">memoryGb</a></code> | <code>number</code> | Memory (GB) request and limit for a single Airflow scheduler replica. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.storageGb">storageGb</a></code> | <code>number</code> | Storage (GB) request and limit for a single Airflow scheduler replica. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The number of schedulers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#count ComposerEnvironment#count}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

CPU request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#cpu ComposerEnvironment#cpu}

---

##### `memoryGb`<sup>Optional</sup> <a name="memoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

Memory (GB) request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

##### `storageGb`<sup>Optional</sup> <a name="storageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.storageGb"></a>

```typescript
public readonly storageGb: number;
```

- *Type:* number

Storage (GB) request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#storage_gb ComposerEnvironment#storage_gb}

---

### ComposerEnvironmentConfigWorkloadsConfigTriggerer <a name="ComposerEnvironmentConfigWorkloadsConfigTriggerer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigWorkloadsConfigTriggerer: composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer.property.count">count</a></code> | <code>number</code> | The number of triggerers. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer.property.cpu">cpu</a></code> | <code>number</code> | CPU request and limit for a single Airflow triggerer replica. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer.property.memoryGb">memoryGb</a></code> | <code>number</code> | Memory (GB) request and limit for a single Airflow triggerer replica. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The number of triggerers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#count ComposerEnvironment#count}

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

CPU request and limit for a single Airflow triggerer replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#cpu ComposerEnvironment#cpu}

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

Memory (GB) request and limit for a single Airflow triggerer replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

### ComposerEnvironmentConfigWorkloadsConfigWebServer <a name="ComposerEnvironmentConfigWorkloadsConfigWebServer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigWorkloadsConfigWebServer: composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.cpu">cpu</a></code> | <code>number</code> | CPU request and limit for Airflow web server. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.memoryGb">memoryGb</a></code> | <code>number</code> | Memory (GB) request and limit for Airflow web server. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.storageGb">storageGb</a></code> | <code>number</code> | Storage (GB) request and limit for Airflow web server. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

CPU request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#cpu ComposerEnvironment#cpu}

---

##### `memoryGb`<sup>Optional</sup> <a name="memoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

Memory (GB) request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

##### `storageGb`<sup>Optional</sup> <a name="storageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.storageGb"></a>

```typescript
public readonly storageGb: number;
```

- *Type:* number

Storage (GB) request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#storage_gb ComposerEnvironment#storage_gb}

---

### ComposerEnvironmentConfigWorkloadsConfigWorker <a name="ComposerEnvironmentConfigWorkloadsConfigWorker" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentConfigWorkloadsConfigWorker: composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.cpu">cpu</a></code> | <code>number</code> | CPU request and limit for a single Airflow worker replica. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.maxCount">maxCount</a></code> | <code>number</code> | Maximum number of workers for autoscaling. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.memoryGb">memoryGb</a></code> | <code>number</code> | Memory (GB) request and limit for a single Airflow worker replica. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.minCount">minCount</a></code> | <code>number</code> | Minimum number of workers for autoscaling. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.storageGb">storageGb</a></code> | <code>number</code> | Storage (GB) request and limit for a single Airflow worker replica. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

CPU request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#cpu ComposerEnvironment#cpu}

---

##### `maxCount`<sup>Optional</sup> <a name="maxCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.maxCount"></a>

```typescript
public readonly maxCount: number;
```

- *Type:* number

Maximum number of workers for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#max_count ComposerEnvironment#max_count}

---

##### `memoryGb`<sup>Optional</sup> <a name="memoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

Memory (GB) request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

##### `minCount`<sup>Optional</sup> <a name="minCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.minCount"></a>

```typescript
public readonly minCount: number;
```

- *Type:* number

Minimum number of workers for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#min_count ComposerEnvironment#min_count}

---

##### `storageGb`<sup>Optional</sup> <a name="storageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.storageGb"></a>

```typescript
public readonly storageGb: number;
```

- *Type:* number

Storage (GB) request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#storage_gb ComposerEnvironment#storage_gb}

---

### ComposerEnvironmentStorageConfig <a name="ComposerEnvironmentStorageConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentStorageConfig: composerEnvironment.ComposerEnvironmentStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig.property.bucket">bucket</a></code> | <code>string</code> | Optional. Name of an existing Cloud Storage bucket to be used by the environment. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Optional. Name of an existing Cloud Storage bucket to be used by the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#bucket ComposerEnvironment#bucket}

---

### ComposerEnvironmentTimeouts <a name="ComposerEnvironmentTimeouts" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

const composerEnvironmentTimeouts: composerEnvironment.ComposerEnvironmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#create ComposerEnvironment#create}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#delete ComposerEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#update ComposerEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#create ComposerEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#delete ComposerEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/composer_environment#update ComposerEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComposerEnvironmentConfigAOutputReference <a name="ComposerEnvironmentConfigAOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDatabaseConfig">putDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDataRetentionConfig">putDataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig">putMasterAuthorizedNetworksConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig">putNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig">putPrivateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putRecoveryConfig">putRecoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putSoftwareConfig">putSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerConfig">putWebServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl">putWebServerNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWorkloadsConfig">putWorkloadsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetDatabaseConfig">resetDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetDataRetentionConfig">resetDataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetEnvironmentSize">resetEnvironmentSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetMasterAuthorizedNetworksConfig">resetMasterAuthorizedNetworksConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetNodeConfig">resetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetPrivateEnvironmentConfig">resetPrivateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetRecoveryConfig">resetRecoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetResilienceMode">resetResilienceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetSoftwareConfig">resetSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWebServerConfig">resetWebServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWebServerNetworkAccessControl">resetWebServerNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWorkloadsConfig">resetWorkloadsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabaseConfig` <a name="putDatabaseConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDatabaseConfig"></a>

```typescript
public putDatabaseConfig(value: ComposerEnvironmentConfigDatabaseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDatabaseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a>

---

##### `putDataRetentionConfig` <a name="putDataRetentionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDataRetentionConfig"></a>

```typescript
public putDataRetentionConfig(value: ComposerEnvironmentConfigDataRetentionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDataRetentionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfig</a>

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: ComposerEnvironmentConfigEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: ComposerEnvironmentConfigMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a>

---

##### `putMasterAuthorizedNetworksConfig` <a name="putMasterAuthorizedNetworksConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig"></a>

```typescript
public putMasterAuthorizedNetworksConfig(value: ComposerEnvironmentConfigMasterAuthorizedNetworksConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---

##### `putNodeConfig` <a name="putNodeConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig"></a>

```typescript
public putNodeConfig(value: ComposerEnvironmentConfigNodeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a>

---

##### `putPrivateEnvironmentConfig` <a name="putPrivateEnvironmentConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig"></a>

```typescript
public putPrivateEnvironmentConfig(value: ComposerEnvironmentConfigPrivateEnvironmentConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---

##### `putRecoveryConfig` <a name="putRecoveryConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putRecoveryConfig"></a>

```typescript
public putRecoveryConfig(value: ComposerEnvironmentConfigRecoveryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putRecoveryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a>

---

##### `putSoftwareConfig` <a name="putSoftwareConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putSoftwareConfig"></a>

```typescript
public putSoftwareConfig(value: ComposerEnvironmentConfigSoftwareConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a>

---

##### `putWebServerConfig` <a name="putWebServerConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerConfig"></a>

```typescript
public putWebServerConfig(value: ComposerEnvironmentConfigWebServerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a>

---

##### `putWebServerNetworkAccessControl` <a name="putWebServerNetworkAccessControl" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl"></a>

```typescript
public putWebServerNetworkAccessControl(value: ComposerEnvironmentConfigWebServerNetworkAccessControl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---

##### `putWorkloadsConfig` <a name="putWorkloadsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWorkloadsConfig"></a>

```typescript
public putWorkloadsConfig(value: ComposerEnvironmentConfigWorkloadsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWorkloadsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a>

---

##### `resetDatabaseConfig` <a name="resetDatabaseConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetDatabaseConfig"></a>

```typescript
public resetDatabaseConfig(): void
```

##### `resetDataRetentionConfig` <a name="resetDataRetentionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetDataRetentionConfig"></a>

```typescript
public resetDataRetentionConfig(): void
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetEncryptionConfig"></a>

```typescript
public resetEncryptionConfig(): void
```

##### `resetEnvironmentSize` <a name="resetEnvironmentSize" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetEnvironmentSize"></a>

```typescript
public resetEnvironmentSize(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetMasterAuthorizedNetworksConfig` <a name="resetMasterAuthorizedNetworksConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetMasterAuthorizedNetworksConfig"></a>

```typescript
public resetMasterAuthorizedNetworksConfig(): void
```

##### `resetNodeConfig` <a name="resetNodeConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetNodeConfig"></a>

```typescript
public resetNodeConfig(): void
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```

##### `resetPrivateEnvironmentConfig` <a name="resetPrivateEnvironmentConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetPrivateEnvironmentConfig"></a>

```typescript
public resetPrivateEnvironmentConfig(): void
```

##### `resetRecoveryConfig` <a name="resetRecoveryConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetRecoveryConfig"></a>

```typescript
public resetRecoveryConfig(): void
```

##### `resetResilienceMode` <a name="resetResilienceMode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetResilienceMode"></a>

```typescript
public resetResilienceMode(): void
```

##### `resetSoftwareConfig` <a name="resetSoftwareConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetSoftwareConfig"></a>

```typescript
public resetSoftwareConfig(): void
```

##### `resetWebServerConfig` <a name="resetWebServerConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWebServerConfig"></a>

```typescript
public resetWebServerConfig(): void
```

##### `resetWebServerNetworkAccessControl` <a name="resetWebServerNetworkAccessControl" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWebServerNetworkAccessControl"></a>

```typescript
public resetWebServerNetworkAccessControl(): void
```

##### `resetWorkloadsConfig` <a name="resetWorkloadsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWorkloadsConfig"></a>

```typescript
public resetWorkloadsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.airflowUri">airflowUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.dagGcsPrefix">dagGcsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.databaseConfig">databaseConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference">ComposerEnvironmentConfigDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.dataRetentionConfig">dataRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference">ComposerEnvironmentConfigDataRetentionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference">ComposerEnvironmentConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.gkeCluster">gkeCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference">ComposerEnvironmentConfigMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfig">masterAuthorizedNetworksConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference">ComposerEnvironmentConfigNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfig">privateEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference">ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.recoveryConfig">recoveryConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference">ComposerEnvironmentConfigRecoveryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.softwareConfig">softwareConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference">ComposerEnvironmentConfigSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerConfig">webServerConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference">ComposerEnvironmentConfigWebServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControl">webServerNetworkAccessControl</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference">ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.workloadsConfig">workloadsConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference">ComposerEnvironmentConfigWorkloadsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.databaseConfigInput">databaseConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.dataRetentionConfigInput">dataRetentionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.environmentSizeInput">environmentSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfigInput">masterAuthorizedNetworksConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeConfigInput">nodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfigInput">privateEnvironmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.recoveryConfigInput">recoveryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.resilienceModeInput">resilienceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.softwareConfigInput">softwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerConfigInput">webServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControlInput">webServerNetworkAccessControlInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.workloadsConfigInput">workloadsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.environmentSize">environmentSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.resilienceMode">resilienceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `airflowUri`<sup>Required</sup> <a name="airflowUri" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.airflowUri"></a>

```typescript
public readonly airflowUri: string;
```

- *Type:* string

---

##### `dagGcsPrefix`<sup>Required</sup> <a name="dagGcsPrefix" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.dagGcsPrefix"></a>

```typescript
public readonly dagGcsPrefix: string;
```

- *Type:* string

---

##### `databaseConfig`<sup>Required</sup> <a name="databaseConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.databaseConfig"></a>

```typescript
public readonly databaseConfig: ComposerEnvironmentConfigDatabaseConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference">ComposerEnvironmentConfigDatabaseConfigOutputReference</a>

---

##### `dataRetentionConfig`<sup>Required</sup> <a name="dataRetentionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.dataRetentionConfig"></a>

```typescript
public readonly dataRetentionConfig: ComposerEnvironmentConfigDataRetentionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference">ComposerEnvironmentConfigDataRetentionConfigOutputReference</a>

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: ComposerEnvironmentConfigEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference">ComposerEnvironmentConfigEncryptionConfigOutputReference</a>

---

##### `gkeCluster`<sup>Required</sup> <a name="gkeCluster" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.gkeCluster"></a>

```typescript
public readonly gkeCluster: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: ComposerEnvironmentConfigMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference">ComposerEnvironmentConfigMaintenanceWindowOutputReference</a>

---

##### `masterAuthorizedNetworksConfig`<sup>Required</sup> <a name="masterAuthorizedNetworksConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfig"></a>

```typescript
public readonly masterAuthorizedNetworksConfig: ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference</a>

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: ComposerEnvironmentConfigNodeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference">ComposerEnvironmentConfigNodeConfigOutputReference</a>

---

##### `privateEnvironmentConfig`<sup>Required</sup> <a name="privateEnvironmentConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfig"></a>

```typescript
public readonly privateEnvironmentConfig: ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference">ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference</a>

---

##### `recoveryConfig`<sup>Required</sup> <a name="recoveryConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.recoveryConfig"></a>

```typescript
public readonly recoveryConfig: ComposerEnvironmentConfigRecoveryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference">ComposerEnvironmentConfigRecoveryConfigOutputReference</a>

---

##### `softwareConfig`<sup>Required</sup> <a name="softwareConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.softwareConfig"></a>

```typescript
public readonly softwareConfig: ComposerEnvironmentConfigSoftwareConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference">ComposerEnvironmentConfigSoftwareConfigOutputReference</a>

---

##### `webServerConfig`<sup>Required</sup> <a name="webServerConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerConfig"></a>

```typescript
public readonly webServerConfig: ComposerEnvironmentConfigWebServerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference">ComposerEnvironmentConfigWebServerConfigOutputReference</a>

---

##### `webServerNetworkAccessControl`<sup>Required</sup> <a name="webServerNetworkAccessControl" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControl"></a>

```typescript
public readonly webServerNetworkAccessControl: ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference">ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference</a>

---

##### `workloadsConfig`<sup>Required</sup> <a name="workloadsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.workloadsConfig"></a>

```typescript
public readonly workloadsConfig: ComposerEnvironmentConfigWorkloadsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference">ComposerEnvironmentConfigWorkloadsConfigOutputReference</a>

---

##### `databaseConfigInput`<sup>Optional</sup> <a name="databaseConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.databaseConfigInput"></a>

```typescript
public readonly databaseConfigInput: ComposerEnvironmentConfigDatabaseConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a>

---

##### `dataRetentionConfigInput`<sup>Optional</sup> <a name="dataRetentionConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.dataRetentionConfigInput"></a>

```typescript
public readonly dataRetentionConfigInput: ComposerEnvironmentConfigDataRetentionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfig</a>

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: ComposerEnvironmentConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a>

---

##### `environmentSizeInput`<sup>Optional</sup> <a name="environmentSizeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.environmentSizeInput"></a>

```typescript
public readonly environmentSizeInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: ComposerEnvironmentConfigMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a>

---

##### `masterAuthorizedNetworksConfigInput`<sup>Optional</sup> <a name="masterAuthorizedNetworksConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfigInput"></a>

```typescript
public readonly masterAuthorizedNetworksConfigInput: ComposerEnvironmentConfigMasterAuthorizedNetworksConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---

##### `nodeConfigInput`<sup>Optional</sup> <a name="nodeConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeConfigInput"></a>

```typescript
public readonly nodeConfigInput: ComposerEnvironmentConfigNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a>

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `privateEnvironmentConfigInput`<sup>Optional</sup> <a name="privateEnvironmentConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfigInput"></a>

```typescript
public readonly privateEnvironmentConfigInput: ComposerEnvironmentConfigPrivateEnvironmentConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---

##### `recoveryConfigInput`<sup>Optional</sup> <a name="recoveryConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.recoveryConfigInput"></a>

```typescript
public readonly recoveryConfigInput: ComposerEnvironmentConfigRecoveryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a>

---

##### `resilienceModeInput`<sup>Optional</sup> <a name="resilienceModeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.resilienceModeInput"></a>

```typescript
public readonly resilienceModeInput: string;
```

- *Type:* string

---

##### `softwareConfigInput`<sup>Optional</sup> <a name="softwareConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.softwareConfigInput"></a>

```typescript
public readonly softwareConfigInput: ComposerEnvironmentConfigSoftwareConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a>

---

##### `webServerConfigInput`<sup>Optional</sup> <a name="webServerConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerConfigInput"></a>

```typescript
public readonly webServerConfigInput: ComposerEnvironmentConfigWebServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a>

---

##### `webServerNetworkAccessControlInput`<sup>Optional</sup> <a name="webServerNetworkAccessControlInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControlInput"></a>

```typescript
public readonly webServerNetworkAccessControlInput: ComposerEnvironmentConfigWebServerNetworkAccessControl;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---

##### `workloadsConfigInput`<sup>Optional</sup> <a name="workloadsConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.workloadsConfigInput"></a>

```typescript
public readonly workloadsConfigInput: ComposerEnvironmentConfigWorkloadsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a>

---

##### `environmentSize`<sup>Required</sup> <a name="environmentSize" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.environmentSize"></a>

```typescript
public readonly environmentSize: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `resilienceMode`<sup>Required</sup> <a name="resilienceMode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.resilienceMode"></a>

```typescript
public readonly resilienceMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigA;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a>

---


### ComposerEnvironmentConfigDatabaseConfigOutputReference <a name="ComposerEnvironmentConfigDatabaseConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resetZone"></a>

```typescript
public resetZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigDatabaseConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a>

---


### ComposerEnvironmentConfigDataRetentionConfigOutputReference <a name="ComposerEnvironmentConfigDataRetentionConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.putTaskLogsRetentionConfig">putTaskLogsRetentionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTaskLogsRetentionConfig` <a name="putTaskLogsRetentionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.putTaskLogsRetentionConfig"></a>

```typescript
public putTaskLogsRetentionConfig(value: IResolvable | ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.putTaskLogsRetentionConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfig">taskLogsRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfigInput">taskLogsRetentionConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `taskLogsRetentionConfig`<sup>Required</sup> <a name="taskLogsRetentionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfig"></a>

```typescript
public readonly taskLogsRetentionConfig: ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList</a>

---

##### `taskLogsRetentionConfigInput`<sup>Optional</sup> <a name="taskLogsRetentionConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfigInput"></a>

```typescript
public readonly taskLogsRetentionConfigInput: IResolvable | ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigDataRetentionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfig</a>

---


### ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList <a name="ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get"></a>

```typescript
public get(index: number): ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>[]

---


### ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference <a name="ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resetStorageMode">resetStorageMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageMode` <a name="resetStorageMode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resetStorageMode"></a>

```typescript
public resetStorageMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageModeInput">storageModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageMode">storageMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageModeInput`<sup>Optional</sup> <a name="storageModeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageModeInput"></a>

```typescript
public readonly storageModeInput: string;
```

- *Type:* string

---

##### `storageMode`<sup>Required</sup> <a name="storageMode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageMode"></a>

```typescript
public readonly storageMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>

---


### ComposerEnvironmentConfigEncryptionConfigOutputReference <a name="ComposerEnvironmentConfigEncryptionConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a>

---


### ComposerEnvironmentConfigMaintenanceWindowOutputReference <a name="ComposerEnvironmentConfigMaintenanceWindowOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrence">recurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrenceInput"></a>

```typescript
public readonly recurrenceInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrence"></a>

```typescript
public readonly recurrence: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a>

---


### ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList <a name="ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get"></a>

```typescript
public get(index: number): ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>[]

---


### ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference <a name="ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>

---


### ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference <a name="ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks">putCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resetCidrBlocks">resetCidrBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCidrBlocks` <a name="putCidrBlocks" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks"></a>

```typescript
public putCidrBlocks(value: IResolvable | ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>[]

---

##### `resetCidrBlocks` <a name="resetCidrBlocks" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resetCidrBlocks"></a>

```typescript
public resetCidrBlocks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocks">cidrBlocks</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocksInput">cidrBlocksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList</a>

---

##### `cidrBlocksInput`<sup>Optional</sup> <a name="cidrBlocksInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocksInput"></a>

```typescript
public readonly cidrBlocksInput: IResolvable | ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigMasterAuthorizedNetworksConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---


### ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList <a name="ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.get"></a>

```typescript
public get(index: number): ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy">ComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComposerEnvironmentConfigNodeConfigIpAllocationPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy">ComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>[]

---


### ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference <a name="ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterIpv4CidrBlock">resetClusterIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterSecondaryRangeName">resetClusterSecondaryRangeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesIpv4CidrBlock">resetServicesIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesSecondaryRangeName">resetServicesSecondaryRangeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetUseIpAliases">resetUseIpAliases</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterIpv4CidrBlock` <a name="resetClusterIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterIpv4CidrBlock"></a>

```typescript
public resetClusterIpv4CidrBlock(): void
```

##### `resetClusterSecondaryRangeName` <a name="resetClusterSecondaryRangeName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterSecondaryRangeName"></a>

```typescript
public resetClusterSecondaryRangeName(): void
```

##### `resetServicesIpv4CidrBlock` <a name="resetServicesIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesIpv4CidrBlock"></a>

```typescript
public resetServicesIpv4CidrBlock(): void
```

##### `resetServicesSecondaryRangeName` <a name="resetServicesSecondaryRangeName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesSecondaryRangeName"></a>

```typescript
public resetServicesSecondaryRangeName(): void
```

##### `resetUseIpAliases` <a name="resetUseIpAliases" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetUseIpAliases"></a>

```typescript
public resetUseIpAliases(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlockInput">clusterIpv4CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeNameInput">clusterSecondaryRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlockInput">servicesIpv4CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeNameInput">servicesSecondaryRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliasesInput">useIpAliasesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlock">clusterIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeName">clusterSecondaryRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlock">servicesIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeName">servicesSecondaryRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliases">useIpAliases</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy">ComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterIpv4CidrBlockInput`<sup>Optional</sup> <a name="clusterIpv4CidrBlockInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlockInput"></a>

```typescript
public readonly clusterIpv4CidrBlockInput: string;
```

- *Type:* string

---

##### `clusterSecondaryRangeNameInput`<sup>Optional</sup> <a name="clusterSecondaryRangeNameInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeNameInput"></a>

```typescript
public readonly clusterSecondaryRangeNameInput: string;
```

- *Type:* string

---

##### `servicesIpv4CidrBlockInput`<sup>Optional</sup> <a name="servicesIpv4CidrBlockInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlockInput"></a>

```typescript
public readonly servicesIpv4CidrBlockInput: string;
```

- *Type:* string

---

##### `servicesSecondaryRangeNameInput`<sup>Optional</sup> <a name="servicesSecondaryRangeNameInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeNameInput"></a>

```typescript
public readonly servicesSecondaryRangeNameInput: string;
```

- *Type:* string

---

##### `useIpAliasesInput`<sup>Optional</sup> <a name="useIpAliasesInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliasesInput"></a>

```typescript
public readonly useIpAliasesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIpv4CidrBlock`<sup>Required</sup> <a name="clusterIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlock"></a>

```typescript
public readonly clusterIpv4CidrBlock: string;
```

- *Type:* string

---

##### `clusterSecondaryRangeName`<sup>Required</sup> <a name="clusterSecondaryRangeName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeName"></a>

```typescript
public readonly clusterSecondaryRangeName: string;
```

- *Type:* string

---

##### `servicesIpv4CidrBlock`<sup>Required</sup> <a name="servicesIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlock"></a>

```typescript
public readonly servicesIpv4CidrBlock: string;
```

- *Type:* string

---

##### `servicesSecondaryRangeName`<sup>Required</sup> <a name="servicesSecondaryRangeName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeName"></a>

```typescript
public readonly servicesSecondaryRangeName: string;
```

- *Type:* string

---

##### `useIpAliases`<sup>Required</sup> <a name="useIpAliases" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliases"></a>

```typescript
public readonly useIpAliases: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComposerEnvironmentConfigNodeConfigIpAllocationPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy">ComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

---


### ComposerEnvironmentConfigNodeConfigOutputReference <a name="ComposerEnvironmentConfigNodeConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy">putIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetEnableIpMasqAgent">resetEnableIpMasqAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetIpAllocationPolicy">resetIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpAllocationPolicy` <a name="putIpAllocationPolicy" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy"></a>

```typescript
public putIpAllocationPolicy(value: IResolvable | ComposerEnvironmentConfigNodeConfigIpAllocationPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy">ComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>[]

---

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetEnableIpMasqAgent` <a name="resetEnableIpMasqAgent" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetEnableIpMasqAgent"></a>

```typescript
public resetEnableIpMasqAgent(): void
```

##### `resetIpAllocationPolicy` <a name="resetIpAllocationPolicy" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetIpAllocationPolicy"></a>

```typescript
public resetIpAllocationPolicy(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetZone"></a>

```typescript
public resetZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicy">ipAllocationPolicy</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList">ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgentInput">enableIpMasqAgentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicyInput">ipAllocationPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy">ComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgent">enableIpMasqAgent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAllocationPolicy`<sup>Required</sup> <a name="ipAllocationPolicy" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicy"></a>

```typescript
public readonly ipAllocationPolicy: ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList">ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList</a>

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `enableIpMasqAgentInput`<sup>Optional</sup> <a name="enableIpMasqAgentInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgentInput"></a>

```typescript
public readonly enableIpMasqAgentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipAllocationPolicyInput`<sup>Optional</sup> <a name="ipAllocationPolicyInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicyInput"></a>

```typescript
public readonly ipAllocationPolicyInput: IResolvable | ComposerEnvironmentConfigNodeConfigIpAllocationPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy">ComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>[]

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `enableIpMasqAgent`<sup>Required</sup> <a name="enableIpMasqAgent" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgent"></a>

```typescript
public readonly enableIpMasqAgent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a>

---


### ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference <a name="ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerConnectionSubnetwork">resetCloudComposerConnectionSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerNetworkIpv4CidrBlock">resetCloudComposerNetworkIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudSqlIpv4CidrBlock">resetCloudSqlIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivateEndpoint">resetEnablePrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivatelyUsedPublicIps">resetEnablePrivatelyUsedPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetMasterIpv4CidrBlock">resetMasterIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetWebServerIpv4CidrBlock">resetWebServerIpv4CidrBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudComposerConnectionSubnetwork` <a name="resetCloudComposerConnectionSubnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerConnectionSubnetwork"></a>

```typescript
public resetCloudComposerConnectionSubnetwork(): void
```

##### `resetCloudComposerNetworkIpv4CidrBlock` <a name="resetCloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerNetworkIpv4CidrBlock"></a>

```typescript
public resetCloudComposerNetworkIpv4CidrBlock(): void
```

##### `resetCloudSqlIpv4CidrBlock` <a name="resetCloudSqlIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudSqlIpv4CidrBlock"></a>

```typescript
public resetCloudSqlIpv4CidrBlock(): void
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetConnectionType"></a>

```typescript
public resetConnectionType(): void
```

##### `resetEnablePrivateEndpoint` <a name="resetEnablePrivateEndpoint" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivateEndpoint"></a>

```typescript
public resetEnablePrivateEndpoint(): void
```

##### `resetEnablePrivatelyUsedPublicIps` <a name="resetEnablePrivatelyUsedPublicIps" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivatelyUsedPublicIps"></a>

```typescript
public resetEnablePrivatelyUsedPublicIps(): void
```

##### `resetMasterIpv4CidrBlock` <a name="resetMasterIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetMasterIpv4CidrBlock"></a>

```typescript
public resetMasterIpv4CidrBlock(): void
```

##### `resetWebServerIpv4CidrBlock` <a name="resetWebServerIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetWebServerIpv4CidrBlock"></a>

```typescript
public resetWebServerIpv4CidrBlock(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetworkInput">cloudComposerConnectionSubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlockInput">cloudComposerNetworkIpv4CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlockInput">cloudSqlIpv4CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionTypeInput">connectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpointInput">enablePrivateEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIpsInput">enablePrivatelyUsedPublicIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlockInput">masterIpv4CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlockInput">webServerIpv4CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetwork">cloudComposerConnectionSubnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlock">cloudComposerNetworkIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlock">cloudSqlIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpoint">enablePrivateEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIps">enablePrivatelyUsedPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlock">masterIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlock">webServerIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudComposerConnectionSubnetworkInput`<sup>Optional</sup> <a name="cloudComposerConnectionSubnetworkInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetworkInput"></a>

```typescript
public readonly cloudComposerConnectionSubnetworkInput: string;
```

- *Type:* string

---

##### `cloudComposerNetworkIpv4CidrBlockInput`<sup>Optional</sup> <a name="cloudComposerNetworkIpv4CidrBlockInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlockInput"></a>

```typescript
public readonly cloudComposerNetworkIpv4CidrBlockInput: string;
```

- *Type:* string

---

##### `cloudSqlIpv4CidrBlockInput`<sup>Optional</sup> <a name="cloudSqlIpv4CidrBlockInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlockInput"></a>

```typescript
public readonly cloudSqlIpv4CidrBlockInput: string;
```

- *Type:* string

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionTypeInput"></a>

```typescript
public readonly connectionTypeInput: string;
```

- *Type:* string

---

##### `enablePrivateEndpointInput`<sup>Optional</sup> <a name="enablePrivateEndpointInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpointInput"></a>

```typescript
public readonly enablePrivateEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePrivatelyUsedPublicIpsInput`<sup>Optional</sup> <a name="enablePrivatelyUsedPublicIpsInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIpsInput"></a>

```typescript
public readonly enablePrivatelyUsedPublicIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `masterIpv4CidrBlockInput`<sup>Optional</sup> <a name="masterIpv4CidrBlockInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlockInput"></a>

```typescript
public readonly masterIpv4CidrBlockInput: string;
```

- *Type:* string

---

##### `webServerIpv4CidrBlockInput`<sup>Optional</sup> <a name="webServerIpv4CidrBlockInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlockInput"></a>

```typescript
public readonly webServerIpv4CidrBlockInput: string;
```

- *Type:* string

---

##### `cloudComposerConnectionSubnetwork`<sup>Required</sup> <a name="cloudComposerConnectionSubnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetwork"></a>

```typescript
public readonly cloudComposerConnectionSubnetwork: string;
```

- *Type:* string

---

##### `cloudComposerNetworkIpv4CidrBlock`<sup>Required</sup> <a name="cloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlock"></a>

```typescript
public readonly cloudComposerNetworkIpv4CidrBlock: string;
```

- *Type:* string

---

##### `cloudSqlIpv4CidrBlock`<sup>Required</sup> <a name="cloudSqlIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlock"></a>

```typescript
public readonly cloudSqlIpv4CidrBlock: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `enablePrivateEndpoint`<sup>Required</sup> <a name="enablePrivateEndpoint" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpoint"></a>

```typescript
public readonly enablePrivateEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePrivatelyUsedPublicIps`<sup>Required</sup> <a name="enablePrivatelyUsedPublicIps" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIps"></a>

```typescript
public readonly enablePrivatelyUsedPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `masterIpv4CidrBlock`<sup>Required</sup> <a name="masterIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlock"></a>

```typescript
public readonly masterIpv4CidrBlock: string;
```

- *Type:* string

---

##### `webServerIpv4CidrBlock`<sup>Required</sup> <a name="webServerIpv4CidrBlock" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlock"></a>

```typescript
public readonly webServerIpv4CidrBlock: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigPrivateEnvironmentConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---


### ComposerEnvironmentConfigRecoveryConfigOutputReference <a name="ComposerEnvironmentConfigRecoveryConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig">putScheduledSnapshotsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.resetScheduledSnapshotsConfig">resetScheduledSnapshotsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScheduledSnapshotsConfig` <a name="putScheduledSnapshotsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig"></a>

```typescript
public putScheduledSnapshotsConfig(value: ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---

##### `resetScheduledSnapshotsConfig` <a name="resetScheduledSnapshotsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.resetScheduledSnapshotsConfig"></a>

```typescript
public resetScheduledSnapshotsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfig">scheduledSnapshotsConfig</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfigInput">scheduledSnapshotsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduledSnapshotsConfig`<sup>Required</sup> <a name="scheduledSnapshotsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfig"></a>

```typescript
public readonly scheduledSnapshotsConfig: ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference</a>

---

##### `scheduledSnapshotsConfigInput`<sup>Optional</sup> <a name="scheduledSnapshotsConfigInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfigInput"></a>

```typescript
public readonly scheduledSnapshotsConfigInput: ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigRecoveryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a>

---


### ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference <a name="ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotCreationSchedule">resetSnapshotCreationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotLocation">resetSnapshotLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSnapshotCreationSchedule` <a name="resetSnapshotCreationSchedule" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotCreationSchedule"></a>

```typescript
public resetSnapshotCreationSchedule(): void
```

##### `resetSnapshotLocation` <a name="resetSnapshotLocation" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotLocation"></a>

```typescript
public resetSnapshotLocation(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationScheduleInput">snapshotCreationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocationInput">snapshotLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationSchedule">snapshotCreationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocation">snapshotLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotCreationScheduleInput`<sup>Optional</sup> <a name="snapshotCreationScheduleInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationScheduleInput"></a>

```typescript
public readonly snapshotCreationScheduleInput: string;
```

- *Type:* string

---

##### `snapshotLocationInput`<sup>Optional</sup> <a name="snapshotLocationInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocationInput"></a>

```typescript
public readonly snapshotLocationInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotCreationSchedule`<sup>Required</sup> <a name="snapshotCreationSchedule" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationSchedule"></a>

```typescript
public readonly snapshotCreationSchedule: string;
```

- *Type:* string

---

##### `snapshotLocation`<sup>Required</sup> <a name="snapshotLocation" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocation"></a>

```typescript
public readonly snapshotLocation: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---


### ComposerEnvironmentConfigSoftwareConfigOutputReference <a name="ComposerEnvironmentConfigSoftwareConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetAirflowConfigOverrides">resetAirflowConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetEnvVariables">resetEnvVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetImageVersion">resetImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetPypiPackages">resetPypiPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetPythonVersion">resetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetSchedulerCount">resetSchedulerCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAirflowConfigOverrides` <a name="resetAirflowConfigOverrides" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetAirflowConfigOverrides"></a>

```typescript
public resetAirflowConfigOverrides(): void
```

##### `resetEnvVariables` <a name="resetEnvVariables" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetEnvVariables"></a>

```typescript
public resetEnvVariables(): void
```

##### `resetImageVersion` <a name="resetImageVersion" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetImageVersion"></a>

```typescript
public resetImageVersion(): void
```

##### `resetPypiPackages` <a name="resetPypiPackages" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetPypiPackages"></a>

```typescript
public resetPypiPackages(): void
```

##### `resetPythonVersion` <a name="resetPythonVersion" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetPythonVersion"></a>

```typescript
public resetPythonVersion(): void
```

##### `resetSchedulerCount` <a name="resetSchedulerCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetSchedulerCount"></a>

```typescript
public resetSchedulerCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverridesInput">airflowConfigOverridesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariablesInput">envVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersionInput">imageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackagesInput">pypiPackagesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersionInput">pythonVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCountInput">schedulerCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverrides">airflowConfigOverrides</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariables">envVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersion">imageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackages">pypiPackages</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCount">schedulerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `airflowConfigOverridesInput`<sup>Optional</sup> <a name="airflowConfigOverridesInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverridesInput"></a>

```typescript
public readonly airflowConfigOverridesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `envVariablesInput`<sup>Optional</sup> <a name="envVariablesInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariablesInput"></a>

```typescript
public readonly envVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `imageVersionInput`<sup>Optional</sup> <a name="imageVersionInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersionInput"></a>

```typescript
public readonly imageVersionInput: string;
```

- *Type:* string

---

##### `pypiPackagesInput`<sup>Optional</sup> <a name="pypiPackagesInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackagesInput"></a>

```typescript
public readonly pypiPackagesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pythonVersionInput`<sup>Optional</sup> <a name="pythonVersionInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersionInput"></a>

```typescript
public readonly pythonVersionInput: string;
```

- *Type:* string

---

##### `schedulerCountInput`<sup>Optional</sup> <a name="schedulerCountInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCountInput"></a>

```typescript
public readonly schedulerCountInput: number;
```

- *Type:* number

---

##### `airflowConfigOverrides`<sup>Required</sup> <a name="airflowConfigOverrides" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverrides"></a>

```typescript
public readonly airflowConfigOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `envVariables`<sup>Required</sup> <a name="envVariables" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariables"></a>

```typescript
public readonly envVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

---

##### `pypiPackages`<sup>Required</sup> <a name="pypiPackages" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackages"></a>

```typescript
public readonly pypiPackages: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

---

##### `schedulerCount`<sup>Required</sup> <a name="schedulerCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCount"></a>

```typescript
public readonly schedulerCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigSoftwareConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a>

---


### ComposerEnvironmentConfigWebServerConfigOutputReference <a name="ComposerEnvironmentConfigWebServerConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigWebServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a>

---


### ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList <a name="ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get"></a>

```typescript
public get(index: number): ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>[]

---


### ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference <a name="ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>

---


### ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference <a name="ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange">putAllowedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resetAllowedIpRange">resetAllowedIpRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedIpRange` <a name="putAllowedIpRange" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange"></a>

```typescript
public putAllowedIpRange(value: IResolvable | ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>[]

---

##### `resetAllowedIpRange` <a name="resetAllowedIpRange" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resetAllowedIpRange"></a>

```typescript
public resetAllowedIpRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRange">allowedIpRange</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRangeInput">allowedIpRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedIpRange`<sup>Required</sup> <a name="allowedIpRange" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRange"></a>

```typescript
public readonly allowedIpRange: ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList</a>

---

##### `allowedIpRangeInput`<sup>Optional</sup> <a name="allowedIpRangeInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRangeInput"></a>

```typescript
public readonly allowedIpRangeInput: IResolvable | ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigWebServerNetworkAccessControl;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---


### ComposerEnvironmentConfigWorkloadsConfigOutputReference <a name="ComposerEnvironmentConfigWorkloadsConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler">putScheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer">putTriggerer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer">putWebServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker">putWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetScheduler">resetScheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetTriggerer">resetTriggerer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWebServer">resetWebServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWorker">resetWorker</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScheduler` <a name="putScheduler" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler"></a>

```typescript
public putScheduler(value: ComposerEnvironmentConfigWorkloadsConfigScheduler): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---

##### `putTriggerer` <a name="putTriggerer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer"></a>

```typescript
public putTriggerer(value: ComposerEnvironmentConfigWorkloadsConfigTriggerer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer">ComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

---

##### `putWebServer` <a name="putWebServer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer"></a>

```typescript
public putWebServer(value: ComposerEnvironmentConfigWorkloadsConfigWebServer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---

##### `putWorker` <a name="putWorker" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker"></a>

```typescript
public putWorker(value: ComposerEnvironmentConfigWorkloadsConfigWorker): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a>

---

##### `resetScheduler` <a name="resetScheduler" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetScheduler"></a>

```typescript
public resetScheduler(): void
```

##### `resetTriggerer` <a name="resetTriggerer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetTriggerer"></a>

```typescript
public resetTriggerer(): void
```

##### `resetWebServer` <a name="resetWebServer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWebServer"></a>

```typescript
public resetWebServer(): void
```

##### `resetWorker` <a name="resetWorker" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWorker"></a>

```typescript
public resetWorker(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.scheduler">scheduler</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference">ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggerer">triggerer</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference">ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServer">webServer</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference">ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference">ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.schedulerInput">schedulerInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggererInput">triggererInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer">ComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServerInput">webServerInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.workerInput">workerInput</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduler`<sup>Required</sup> <a name="scheduler" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.scheduler"></a>

```typescript
public readonly scheduler: ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference">ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference</a>

---

##### `triggerer`<sup>Required</sup> <a name="triggerer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggerer"></a>

```typescript
public readonly triggerer: ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference">ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference</a>

---

##### `webServer`<sup>Required</sup> <a name="webServer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServer"></a>

```typescript
public readonly webServer: ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference">ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference</a>

---

##### `worker`<sup>Required</sup> <a name="worker" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.worker"></a>

```typescript
public readonly worker: ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference">ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference</a>

---

##### `schedulerInput`<sup>Optional</sup> <a name="schedulerInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.schedulerInput"></a>

```typescript
public readonly schedulerInput: ComposerEnvironmentConfigWorkloadsConfigScheduler;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---

##### `triggererInput`<sup>Optional</sup> <a name="triggererInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggererInput"></a>

```typescript
public readonly triggererInput: ComposerEnvironmentConfigWorkloadsConfigTriggerer;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer">ComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

---

##### `webServerInput`<sup>Optional</sup> <a name="webServerInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServerInput"></a>

```typescript
public readonly webServerInput: ComposerEnvironmentConfigWorkloadsConfigWebServer;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---

##### `workerInput`<sup>Optional</sup> <a name="workerInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.workerInput"></a>

```typescript
public readonly workerInput: ComposerEnvironmentConfigWorkloadsConfigWorker;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigWorkloadsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a>

---


### ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference <a name="ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetMemoryGb">resetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetStorageGb">resetStorageGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetMemoryGb` <a name="resetMemoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetMemoryGb"></a>

```typescript
public resetMemoryGb(): void
```

##### `resetStorageGb` <a name="resetStorageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetStorageGb"></a>

```typescript
public resetStorageGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGbInput">memoryGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGbInput">storageGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGb">memoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGb">storageGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `memoryGbInput`<sup>Optional</sup> <a name="memoryGbInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGbInput"></a>

```typescript
public readonly memoryGbInput: number;
```

- *Type:* number

---

##### `storageGbInput`<sup>Optional</sup> <a name="storageGbInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGbInput"></a>

```typescript
public readonly storageGbInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

---

##### `storageGb`<sup>Required</sup> <a name="storageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGb"></a>

```typescript
public readonly storageGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigWorkloadsConfigScheduler;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---


### ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference <a name="ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGbInput">memoryGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGb">memoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer">ComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `memoryGbInput`<sup>Optional</sup> <a name="memoryGbInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGbInput"></a>

```typescript
public readonly memoryGbInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigWorkloadsConfigTriggerer;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer">ComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

---


### ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference <a name="ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetMemoryGb">resetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetStorageGb">resetStorageGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetMemoryGb` <a name="resetMemoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetMemoryGb"></a>

```typescript
public resetMemoryGb(): void
```

##### `resetStorageGb` <a name="resetStorageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetStorageGb"></a>

```typescript
public resetStorageGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGbInput">memoryGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGbInput">storageGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGb">memoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGb">storageGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `memoryGbInput`<sup>Optional</sup> <a name="memoryGbInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGbInput"></a>

```typescript
public readonly memoryGbInput: number;
```

- *Type:* number

---

##### `storageGbInput`<sup>Optional</sup> <a name="storageGbInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGbInput"></a>

```typescript
public readonly storageGbInput: number;
```

- *Type:* number

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

---

##### `storageGb`<sup>Required</sup> <a name="storageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGb"></a>

```typescript
public readonly storageGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigWorkloadsConfigWebServer;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---


### ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference <a name="ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMaxCount">resetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMemoryGb">resetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMinCount">resetMinCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetStorageGb">resetStorageGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetMaxCount` <a name="resetMaxCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMaxCount"></a>

```typescript
public resetMaxCount(): void
```

##### `resetMemoryGb` <a name="resetMemoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMemoryGb"></a>

```typescript
public resetMemoryGb(): void
```

##### `resetMinCount` <a name="resetMinCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMinCount"></a>

```typescript
public resetMinCount(): void
```

##### `resetStorageGb` <a name="resetStorageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetStorageGb"></a>

```typescript
public resetStorageGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCountInput">maxCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGbInput">memoryGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCountInput">minCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGbInput">storageGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCount">maxCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGb">memoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCount">minCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGb">storageGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `maxCountInput`<sup>Optional</sup> <a name="maxCountInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCountInput"></a>

```typescript
public readonly maxCountInput: number;
```

- *Type:* number

---

##### `memoryGbInput`<sup>Optional</sup> <a name="memoryGbInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGbInput"></a>

```typescript
public readonly memoryGbInput: number;
```

- *Type:* number

---

##### `minCountInput`<sup>Optional</sup> <a name="minCountInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCountInput"></a>

```typescript
public readonly minCountInput: number;
```

- *Type:* number

---

##### `storageGbInput`<sup>Optional</sup> <a name="storageGbInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGbInput"></a>

```typescript
public readonly storageGbInput: number;
```

- *Type:* number

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCount"></a>

```typescript
public readonly maxCount: number;
```

- *Type:* number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

---

##### `minCount`<sup>Required</sup> <a name="minCount" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCount"></a>

```typescript
public readonly minCount: number;
```

- *Type:* number

---

##### `storageGb`<sup>Required</sup> <a name="storageGb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGb"></a>

```typescript
public readonly storageGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentConfigWorkloadsConfigWorker;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a>

---


### ComposerEnvironmentStorageConfigOutputReference <a name="ComposerEnvironmentStorageConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentStorageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig">ComposerEnvironmentStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComposerEnvironmentStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig">ComposerEnvironmentStorageConfig</a>

---


### ComposerEnvironmentTimeoutsOutputReference <a name="ComposerEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { composerEnvironment } from '@cdktf/provider-google'

new composerEnvironment.ComposerEnvironmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComposerEnvironmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a>

---



