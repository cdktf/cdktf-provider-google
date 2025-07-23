# `geminiRepositoryGroupIamPolicy` Submodule <a name="`geminiRepositoryGroupIamPolicy` Submodule" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiRepositoryGroupIamPolicy <a name="GeminiRepositoryGroupIamPolicy" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_repository_group_iam_policy google_gemini_repository_group_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.Initializer"></a>

```typescript
import { geminiRepositoryGroupIamPolicy } from '@cdktf/provider-google'

new geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy(scope: Construct, id: string, config: GeminiRepositoryGroupIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig">GeminiRepositoryGroupIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig">GeminiRepositoryGroupIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiRepositoryGroupIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isConstruct"></a>

```typescript
import { geminiRepositoryGroupIamPolicy } from '@cdktf/provider-google'

geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isTerraformElement"></a>

```typescript
import { geminiRepositoryGroupIamPolicy } from '@cdktf/provider-google'

geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isTerraformResource"></a>

```typescript
import { geminiRepositoryGroupIamPolicy } from '@cdktf/provider-google'

geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.generateConfigForImport"></a>

```typescript
import { geminiRepositoryGroupIamPolicy } from '@cdktf/provider-google'

geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GeminiRepositoryGroupIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiRepositoryGroupIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiRepositoryGroupIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_repository_group_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GeminiRepositoryGroupIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.codeRepositoryIndexInput">codeRepositoryIndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.repositoryGroupIdInput">repositoryGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.codeRepositoryIndex">codeRepositoryIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.repositoryGroupId">repositoryGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `codeRepositoryIndexInput`<sup>Optional</sup> <a name="codeRepositoryIndexInput" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.codeRepositoryIndexInput"></a>

```typescript
public readonly codeRepositoryIndexInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `repositoryGroupIdInput`<sup>Optional</sup> <a name="repositoryGroupIdInput" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.repositoryGroupIdInput"></a>

```typescript
public readonly repositoryGroupIdInput: string;
```

- *Type:* string

---

##### `codeRepositoryIndex`<sup>Required</sup> <a name="codeRepositoryIndex" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.codeRepositoryIndex"></a>

```typescript
public readonly codeRepositoryIndex: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repositoryGroupId`<sup>Required</sup> <a name="repositoryGroupId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.repositoryGroupId"></a>

```typescript
public readonly repositoryGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiRepositoryGroupIamPolicyConfig <a name="GeminiRepositoryGroupIamPolicyConfig" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.Initializer"></a>

```typescript
import { geminiRepositoryGroupIamPolicy } from '@cdktf/provider-google'

const geminiRepositoryGroupIamPolicyConfig: geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.codeRepositoryIndex">codeRepositoryIndex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_repository_group_iam_policy#code_repository_index GeminiRepositoryGroupIamPolicy#code_repository_index}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_repository_group_iam_policy#policy_data GeminiRepositoryGroupIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.repositoryGroupId">repositoryGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_repository_group_iam_policy#repository_group_id GeminiRepositoryGroupIamPolicy#repository_group_id}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_repository_group_iam_policy#id GeminiRepositoryGroupIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_repository_group_iam_policy#location GeminiRepositoryGroupIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_repository_group_iam_policy#project GeminiRepositoryGroupIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `codeRepositoryIndex`<sup>Required</sup> <a name="codeRepositoryIndex" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.codeRepositoryIndex"></a>

```typescript
public readonly codeRepositoryIndex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_repository_group_iam_policy#code_repository_index GeminiRepositoryGroupIamPolicy#code_repository_index}.

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_repository_group_iam_policy#policy_data GeminiRepositoryGroupIamPolicy#policy_data}.

---

##### `repositoryGroupId`<sup>Required</sup> <a name="repositoryGroupId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.repositoryGroupId"></a>

```typescript
public readonly repositoryGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_repository_group_iam_policy#repository_group_id GeminiRepositoryGroupIamPolicy#repository_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_repository_group_iam_policy#id GeminiRepositoryGroupIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_repository_group_iam_policy#location GeminiRepositoryGroupIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_repository_group_iam_policy#project GeminiRepositoryGroupIamPolicy#project}.

---



