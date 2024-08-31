# `publicCaExternalAccountKey` Submodule <a name="`publicCaExternalAccountKey` Submodule" id="@cdktf/provider-google.publicCaExternalAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PublicCaExternalAccountKey <a name="PublicCaExternalAccountKey" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/public_ca_external_account_key google_public_ca_external_account_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer"></a>

```typescript
import { publicCaExternalAccountKey } from '@cdktf/provider-google'

new publicCaExternalAccountKey.PublicCaExternalAccountKey(scope: Construct, id: string, config?: PublicCaExternalAccountKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig">PublicCaExternalAccountKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig">PublicCaExternalAccountKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.putTimeouts"></a>

```typescript
public putTimeouts(value: PublicCaExternalAccountKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts">PublicCaExternalAccountKeyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PublicCaExternalAccountKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isConstruct"></a>

```typescript
import { publicCaExternalAccountKey } from '@cdktf/provider-google'

publicCaExternalAccountKey.PublicCaExternalAccountKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isTerraformElement"></a>

```typescript
import { publicCaExternalAccountKey } from '@cdktf/provider-google'

publicCaExternalAccountKey.PublicCaExternalAccountKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isTerraformResource"></a>

```typescript
import { publicCaExternalAccountKey } from '@cdktf/provider-google'

publicCaExternalAccountKey.PublicCaExternalAccountKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.generateConfigForImport"></a>

```typescript
import { publicCaExternalAccountKey } from '@cdktf/provider-google'

publicCaExternalAccountKey.PublicCaExternalAccountKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PublicCaExternalAccountKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PublicCaExternalAccountKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PublicCaExternalAccountKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/public_ca_external_account_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PublicCaExternalAccountKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.b64MacKey">b64MacKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference">PublicCaExternalAccountKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts">PublicCaExternalAccountKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `b64MacKey`<sup>Required</sup> <a name="b64MacKey" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.b64MacKey"></a>

```typescript
public readonly b64MacKey: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.timeouts"></a>

```typescript
public readonly timeouts: PublicCaExternalAccountKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference">PublicCaExternalAccountKeyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PublicCaExternalAccountKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts">PublicCaExternalAccountKeyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PublicCaExternalAccountKeyConfig <a name="PublicCaExternalAccountKeyConfig" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.Initializer"></a>

```typescript
import { publicCaExternalAccountKey } from '@cdktf/provider-google'

const publicCaExternalAccountKeyConfig: publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/public_ca_external_account_key#id PublicCaExternalAccountKey#id}. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.location">location</a></code> | <code>string</code> | Location for the externalAccountKey. Currently only 'global' is supported. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/public_ca_external_account_key#project PublicCaExternalAccountKey#project}. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts">PublicCaExternalAccountKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/public_ca_external_account_key#id PublicCaExternalAccountKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location for the externalAccountKey. Currently only 'global' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/public_ca_external_account_key#location PublicCaExternalAccountKey#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/public_ca_external_account_key#project PublicCaExternalAccountKey#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PublicCaExternalAccountKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts">PublicCaExternalAccountKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/public_ca_external_account_key#timeouts PublicCaExternalAccountKey#timeouts}

---

### PublicCaExternalAccountKeyTimeouts <a name="PublicCaExternalAccountKeyTimeouts" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts.Initializer"></a>

```typescript
import { publicCaExternalAccountKey } from '@cdktf/provider-google'

const publicCaExternalAccountKeyTimeouts: publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/public_ca_external_account_key#create PublicCaExternalAccountKey#create}. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/public_ca_external_account_key#delete PublicCaExternalAccountKey#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/public_ca_external_account_key#create PublicCaExternalAccountKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/public_ca_external_account_key#delete PublicCaExternalAccountKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PublicCaExternalAccountKeyTimeoutsOutputReference <a name="PublicCaExternalAccountKeyTimeoutsOutputReference" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { publicCaExternalAccountKey } from '@cdktf/provider-google'

new publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts">PublicCaExternalAccountKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PublicCaExternalAccountKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts">PublicCaExternalAccountKeyTimeouts</a>

---



