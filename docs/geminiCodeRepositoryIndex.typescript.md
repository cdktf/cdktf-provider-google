# `geminiCodeRepositoryIndex` Submodule <a name="`geminiCodeRepositoryIndex` Submodule" id="@cdktf/provider-google.geminiCodeRepositoryIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiCodeRepositoryIndex <a name="GeminiCodeRepositoryIndex" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index google_gemini_code_repository_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.Initializer"></a>

```typescript
import { geminiCodeRepositoryIndex } from '@cdktf/provider-google'

new geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex(scope: Construct, id: string, config: GeminiCodeRepositoryIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig">GeminiCodeRepositoryIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig">GeminiCodeRepositoryIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.putTimeouts"></a>

```typescript
public putTimeouts(value: GeminiCodeRepositoryIndexTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts">GeminiCodeRepositoryIndexTimeouts</a>

---

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiCodeRepositoryIndex resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isConstruct"></a>

```typescript
import { geminiCodeRepositoryIndex } from '@cdktf/provider-google'

geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isTerraformElement"></a>

```typescript
import { geminiCodeRepositoryIndex } from '@cdktf/provider-google'

geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isTerraformResource"></a>

```typescript
import { geminiCodeRepositoryIndex } from '@cdktf/provider-google'

geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.generateConfigForImport"></a>

```typescript
import { geminiCodeRepositoryIndex } from '@cdktf/provider-google'

geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GeminiCodeRepositoryIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiCodeRepositoryIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiCodeRepositoryIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GeminiCodeRepositoryIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference">GeminiCodeRepositoryIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.codeRepositoryIndexIdInput">codeRepositoryIndexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts">GeminiCodeRepositoryIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.codeRepositoryIndexId">codeRepositoryIndexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiCodeRepositoryIndexTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference">GeminiCodeRepositoryIndexTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `codeRepositoryIndexIdInput`<sup>Optional</sup> <a name="codeRepositoryIndexIdInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.codeRepositoryIndexIdInput"></a>

```typescript
public readonly codeRepositoryIndexIdInput: string;
```

- *Type:* string

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GeminiCodeRepositoryIndexTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts">GeminiCodeRepositoryIndexTimeouts</a>

---

##### `codeRepositoryIndexId`<sup>Required</sup> <a name="codeRepositoryIndexId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.codeRepositoryIndexId"></a>

```typescript
public readonly codeRepositoryIndexId: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiCodeRepositoryIndexConfig <a name="GeminiCodeRepositoryIndexConfig" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.Initializer"></a>

```typescript
import { geminiCodeRepositoryIndex } from '@cdktf/provider-google'

const geminiCodeRepositoryIndexConfig: geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.codeRepositoryIndexId">codeRepositoryIndexId</a></code> | <code>string</code> | Required. Id of the Code Repository Index. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.location">location</a></code> | <code>string</code> | The location of the Code Repository Index, for example 'us-central1'. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, will allow deletion of the CodeRepositoryIndex even if there are existing RepositoryGroups for the resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#id GeminiCodeRepositoryIndex#id}. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | Optional. Immutable. Customer-managed encryption key name, in the format 'projects/* /locations/* /keyRings/* /cryptoKeys/*'. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#project GeminiCodeRepositoryIndex#project}. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts">GeminiCodeRepositoryIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `codeRepositoryIndexId`<sup>Required</sup> <a name="codeRepositoryIndexId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.codeRepositoryIndexId"></a>

```typescript
public readonly codeRepositoryIndexId: string;
```

- *Type:* string

Required. Id of the Code Repository Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#code_repository_index_id GeminiCodeRepositoryIndex#code_repository_index_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the Code Repository Index, for example 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#location GeminiCodeRepositoryIndex#location}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, will allow deletion of the CodeRepositoryIndex even if there are existing RepositoryGroups for the resource.

These RepositoryGroups will also be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#force_destroy GeminiCodeRepositoryIndex#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#id GeminiCodeRepositoryIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Optional. Immutable. Customer-managed encryption key name, in the format 'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#kms_key GeminiCodeRepositoryIndex#kms_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#labels GeminiCodeRepositoryIndex#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#project GeminiCodeRepositoryIndex#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiCodeRepositoryIndexTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts">GeminiCodeRepositoryIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#timeouts GeminiCodeRepositoryIndex#timeouts}

---

### GeminiCodeRepositoryIndexTimeouts <a name="GeminiCodeRepositoryIndexTimeouts" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts.Initializer"></a>

```typescript
import { geminiCodeRepositoryIndex } from '@cdktf/provider-google'

const geminiCodeRepositoryIndexTimeouts: geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#create GeminiCodeRepositoryIndex#create}. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#delete GeminiCodeRepositoryIndex#delete}. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#update GeminiCodeRepositoryIndex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#create GeminiCodeRepositoryIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#delete GeminiCodeRepositoryIndex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_code_repository_index#update GeminiCodeRepositoryIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiCodeRepositoryIndexTimeoutsOutputReference <a name="GeminiCodeRepositoryIndexTimeoutsOutputReference" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.Initializer"></a>

```typescript
import { geminiCodeRepositoryIndex } from '@cdktf/provider-google'

new geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts">GeminiCodeRepositoryIndexTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiCodeRepositoryIndexTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts">GeminiCodeRepositoryIndexTimeouts</a>

---



