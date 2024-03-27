# `secretManagerSecret` Submodule <a name="`secretManagerSecret` Submodule" id="@cdktf/provider-google.secretManagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerSecret <a name="SecretManagerSecret" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret google_secret_manager_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

new secretManagerSecret.SecretManagerSecret(scope: Construct, id: string, config: SecretManagerSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig">SecretManagerSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig">SecretManagerSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putReplication">putReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putRotation">putRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTopics">putTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetRotation">resetRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTopics">resetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetVersionAliases">resetVersionAliases</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReplication` <a name="putReplication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putReplication"></a>

```typescript
public putReplication(value: SecretManagerSecretReplication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a>

---

##### `putRotation` <a name="putRotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putRotation"></a>

```typescript
public putRotation(value: SecretManagerSecretRotation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putRotation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTimeouts"></a>

```typescript
public putTimeouts(value: SecretManagerSecretTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a>

---

##### `putTopics` <a name="putTopics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTopics"></a>

```typescript
public putTopics(value: IResolvable | SecretManagerSecretTopics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTopics.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>[]

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetExpireTime"></a>

```typescript
public resetExpireTime(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRotation` <a name="resetRotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetRotation"></a>

```typescript
public resetRotation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTopics` <a name="resetTopics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTopics"></a>

```typescript
public resetTopics(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetVersionAliases` <a name="resetVersionAliases" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetVersionAliases"></a>

```typescript
public resetVersionAliases(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecretManagerSecret resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isConstruct"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

secretManagerSecret.SecretManagerSecret.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformElement"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

secretManagerSecret.SecretManagerSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformResource"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

secretManagerSecret.SecretManagerSecret.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

secretManagerSecret.SecretManagerSecret.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecretManagerSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretManagerSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretManagerSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretManagerSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.replication">replication</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference">SecretManagerSecretReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference">SecretManagerSecretRotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference">SecretManagerSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.topics">topics</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList">SecretManagerSecretTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.expireTimeInput">expireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.replicationInput">replicationInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.rotationInput">rotationInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.topicsInput">topicsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionAliasesInput">versionAliasesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionAliases">versionAliases</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.replication"></a>

```typescript
public readonly replication: SecretManagerSecretReplicationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference">SecretManagerSecretReplicationOutputReference</a>

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.rotation"></a>

```typescript
public readonly rotation: SecretManagerSecretRotationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference">SecretManagerSecretRotationOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.timeouts"></a>

```typescript
public readonly timeouts: SecretManagerSecretTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference">SecretManagerSecretTimeoutsOutputReference</a>

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.topics"></a>

```typescript
public readonly topics: SecretManagerSecretTopicsList;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList">SecretManagerSecretTopicsList</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.expireTimeInput"></a>

```typescript
public readonly expireTimeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `replicationInput`<sup>Optional</sup> <a name="replicationInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.replicationInput"></a>

```typescript
public readonly replicationInput: SecretManagerSecretReplication;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a>

---

##### `rotationInput`<sup>Optional</sup> <a name="rotationInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.rotationInput"></a>

```typescript
public readonly rotationInput: SecretManagerSecretRotation;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a>

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SecretManagerSecretTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a>

---

##### `topicsInput`<sup>Optional</sup> <a name="topicsInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.topicsInput"></a>

```typescript
public readonly topicsInput: IResolvable | SecretManagerSecretTopics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>[]

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `versionAliasesInput`<sup>Optional</sup> <a name="versionAliasesInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionAliasesInput"></a>

```typescript
public readonly versionAliasesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `versionAliases`<sup>Required</sup> <a name="versionAliases" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionAliases"></a>

```typescript
public readonly versionAliases: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerSecretConfig <a name="SecretManagerSecretConfig" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

const secretManagerSecretConfig: secretManagerSecret.SecretManagerSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.replication">replication</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a></code> | replication block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.secretId">secretId</a></code> | <code>string</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Custom metadata about the secret. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.expireTime">expireTime</a></code> | <code>string</code> | Timestamp in UTC when the Secret is scheduled to expire. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#id SecretManagerSecret#id}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels assigned to this Secret. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#project SecretManagerSecret#project}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a></code> | rotation block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.topics">topics</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>[]</code> | topics block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.ttl">ttl</a></code> | <code>string</code> | The TTL for the Secret. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.versionAliases">versionAliases</a></code> | <code>{[ key: string ]: string}</code> | Mapping from version alias to version name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.replication"></a>

```typescript
public readonly replication: SecretManagerSecretReplication;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a>

replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#replication SecretManagerSecret#replication}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#secret_id SecretManagerSecret#secret_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom metadata about the secret.

Annotations are distinct from various forms of labels. Annotations exist to allow
client tools to store their own state information without requiring a database.

Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and
may have dashes (-), underscores (_), dots (.), and alphanumerics in between these
symbols.

The total size of annotation keys and values must be less than 16KiB.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#annotations SecretManagerSecret#annotations}

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

Timestamp in UTC when the Secret is scheduled to expire.

This is always provided on output, regardless of what was sent on input.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
Only one of 'expire_time' or 'ttl' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#expire_time SecretManagerSecret#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#id SecretManagerSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels assigned to this Secret.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#labels SecretManagerSecret#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#project SecretManagerSecret#project}.

---

##### `rotation`<sup>Optional</sup> <a name="rotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.rotation"></a>

```typescript
public readonly rotation: SecretManagerSecretRotation;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a>

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#rotation SecretManagerSecret#rotation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecretManagerSecretTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#timeouts SecretManagerSecret#timeouts}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.topics"></a>

```typescript
public readonly topics: IResolvable | SecretManagerSecretTopics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>[]

topics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#topics SecretManagerSecret#topics}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

The TTL for the Secret.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
Only one of 'ttl' or 'expire_time' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#ttl SecretManagerSecret#ttl}

---

##### `versionAliases`<sup>Optional</sup> <a name="versionAliases" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.versionAliases"></a>

```typescript
public readonly versionAliases: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Mapping from version alias to version name.

A version alias is a string with a maximum length of 63 characters and can contain
uppercase and lowercase letters, numerals, and the hyphen (-) and underscore ('_')
characters. An alias string must start with a letter and cannot be the string
'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#version_aliases SecretManagerSecret#version_aliases}

---

### SecretManagerSecretReplication <a name="SecretManagerSecretReplication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

const secretManagerSecretReplication: secretManagerSecret.SecretManagerSecretReplication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.property.auto">auto</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a></code> | auto block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.property.userManaged">userManaged</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a></code> | user_managed block. |

---

##### `auto`<sup>Optional</sup> <a name="auto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.property.auto"></a>

```typescript
public readonly auto: SecretManagerSecretReplicationAuto;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a>

auto block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#auto SecretManagerSecret#auto}

---

##### `userManaged`<sup>Optional</sup> <a name="userManaged" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.property.userManaged"></a>

```typescript
public readonly userManaged: SecretManagerSecretReplicationUserManaged;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a>

user_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#user_managed SecretManagerSecret#user_managed}

---

### SecretManagerSecretReplicationAuto <a name="SecretManagerSecretReplicationAuto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

const secretManagerSecretReplicationAuto: secretManagerSecret.SecretManagerSecretReplicationAuto = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto.property.customerManagedEncryption">customerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a></code> | customer_managed_encryption block. |

---

##### `customerManagedEncryption`<sup>Optional</sup> <a name="customerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto.property.customerManagedEncryption"></a>

```typescript
public readonly customerManagedEncryption: SecretManagerSecretReplicationAutoCustomerManagedEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a>

customer_managed_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#customer_managed_encryption SecretManagerSecret#customer_managed_encryption}

---

### SecretManagerSecretReplicationAutoCustomerManagedEncryption <a name="SecretManagerSecretReplicationAutoCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

const secretManagerSecretReplicationAutoCustomerManagedEncryption: secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#kms_key_name SecretManagerSecret#kms_key_name}

---

### SecretManagerSecretReplicationUserManaged <a name="SecretManagerSecretReplicationUserManaged" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

const secretManagerSecretReplicationUserManaged: secretManagerSecret.SecretManagerSecretReplicationUserManaged = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged.property.replicas">replicas</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>[]</code> | replicas block. |

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged.property.replicas"></a>

```typescript
public readonly replicas: IResolvable | SecretManagerSecretReplicationUserManagedReplicas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>[]

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#replicas SecretManagerSecret#replicas}

---

### SecretManagerSecretReplicationUserManagedReplicas <a name="SecretManagerSecretReplicationUserManagedReplicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

const secretManagerSecretReplicationUserManagedReplicas: secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.property.location">location</a></code> | <code>string</code> | The canonical IDs of the location to replicate data. For example: "us-east1". |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.property.customerManagedEncryption">customerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | customer_managed_encryption block. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The canonical IDs of the location to replicate data. For example: "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#location SecretManagerSecret#location}

---

##### `customerManagedEncryption`<sup>Optional</sup> <a name="customerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.property.customerManagedEncryption"></a>

```typescript
public readonly customerManagedEncryption: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

customer_managed_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#customer_managed_encryption SecretManagerSecret#customer_managed_encryption}

---

### SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption <a name="SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

const secretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption: secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Describes the Cloud KMS encryption key that will be used to protect destination secret. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Describes the Cloud KMS encryption key that will be used to protect destination secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#kms_key_name SecretManagerSecret#kms_key_name}

---

### SecretManagerSecretRotation <a name="SecretManagerSecretRotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

const secretManagerSecretRotation: secretManagerSecret.SecretManagerSecretRotation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.property.nextRotationTime">nextRotationTime</a></code> | <code>string</code> | Timestamp in UTC at which the Secret is scheduled to rotate. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.property.rotationPeriod">rotationPeriod</a></code> | <code>string</code> | The Duration between rotation notifications. |

---

##### `nextRotationTime`<sup>Optional</sup> <a name="nextRotationTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.property.nextRotationTime"></a>

```typescript
public readonly nextRotationTime: string;
```

- *Type:* string

Timestamp in UTC at which the Secret is scheduled to rotate.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#next_rotation_time SecretManagerSecret#next_rotation_time}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: string;
```

- *Type:* string

The Duration between rotation notifications.

Must be in seconds and at least 3600s (1h) and at most 3153600000s (100 years).
If rotationPeriod is set, 'next_rotation_time' must be set. 'next_rotation_time' will be advanced by this period when the service automatically sends rotation notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#rotation_period SecretManagerSecret#rotation_period}

---

### SecretManagerSecretTimeouts <a name="SecretManagerSecretTimeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

const secretManagerSecretTimeouts: secretManagerSecret.SecretManagerSecretTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#create SecretManagerSecret#create}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#delete SecretManagerSecret#delete}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#update SecretManagerSecret#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#create SecretManagerSecret#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#delete SecretManagerSecret#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#update SecretManagerSecret#update}.

---

### SecretManagerSecretTopics <a name="SecretManagerSecretTopics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

const secretManagerSecretTopics: secretManagerSecret.SecretManagerSecretTopics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics.property.name">name</a></code> | <code>string</code> | The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*.

For publication to succeed, the Secret Manager Service Agent service account must have pubsub.publisher permissions on the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/secret_manager_secret#name SecretManagerSecret#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference <a name="SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

new secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretManagerSecretReplicationAutoCustomerManagedEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a>

---


### SecretManagerSecretReplicationAutoOutputReference <a name="SecretManagerSecretReplicationAutoOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

new secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.putCustomerManagedEncryption">putCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resetCustomerManagedEncryption">resetCustomerManagedEncryption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerManagedEncryption` <a name="putCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.putCustomerManagedEncryption"></a>

```typescript
public putCustomerManagedEncryption(value: SecretManagerSecretReplicationAutoCustomerManagedEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.putCustomerManagedEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a>

---

##### `resetCustomerManagedEncryption` <a name="resetCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resetCustomerManagedEncryption"></a>

```typescript
public resetCustomerManagedEncryption(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.customerManagedEncryption">customerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference">SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.customerManagedEncryptionInput">customerManagedEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedEncryption`<sup>Required</sup> <a name="customerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.customerManagedEncryption"></a>

```typescript
public readonly customerManagedEncryption: SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference">SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference</a>

---

##### `customerManagedEncryptionInput`<sup>Optional</sup> <a name="customerManagedEncryptionInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.customerManagedEncryptionInput"></a>

```typescript
public readonly customerManagedEncryptionInput: SecretManagerSecretReplicationAutoCustomerManagedEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretManagerSecretReplicationAuto;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a>

---


### SecretManagerSecretReplicationOutputReference <a name="SecretManagerSecretReplicationOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

new secretManagerSecret.SecretManagerSecretReplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putAuto">putAuto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putUserManaged">putUserManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resetAuto">resetAuto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resetUserManaged">resetUserManaged</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuto` <a name="putAuto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putAuto"></a>

```typescript
public putAuto(value: SecretManagerSecretReplicationAuto): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putAuto.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a>

---

##### `putUserManaged` <a name="putUserManaged" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putUserManaged"></a>

```typescript
public putUserManaged(value: SecretManagerSecretReplicationUserManaged): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putUserManaged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a>

---

##### `resetAuto` <a name="resetAuto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resetAuto"></a>

```typescript
public resetAuto(): void
```

##### `resetUserManaged` <a name="resetUserManaged" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resetUserManaged"></a>

```typescript
public resetUserManaged(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.auto">auto</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference">SecretManagerSecretReplicationAutoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.userManaged">userManaged</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference">SecretManagerSecretReplicationUserManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.autoInput">autoInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.userManagedInput">userManagedInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auto`<sup>Required</sup> <a name="auto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.auto"></a>

```typescript
public readonly auto: SecretManagerSecretReplicationAutoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference">SecretManagerSecretReplicationAutoOutputReference</a>

---

##### `userManaged`<sup>Required</sup> <a name="userManaged" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.userManaged"></a>

```typescript
public readonly userManaged: SecretManagerSecretReplicationUserManagedOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference">SecretManagerSecretReplicationUserManagedOutputReference</a>

---

##### `autoInput`<sup>Optional</sup> <a name="autoInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.autoInput"></a>

```typescript
public readonly autoInput: SecretManagerSecretReplicationAuto;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a>

---

##### `userManagedInput`<sup>Optional</sup> <a name="userManagedInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.userManagedInput"></a>

```typescript
public readonly userManagedInput: SecretManagerSecretReplicationUserManaged;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretManagerSecretReplication;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a>

---


### SecretManagerSecretReplicationUserManagedOutputReference <a name="SecretManagerSecretReplicationUserManagedOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

new secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.putReplicas">putReplicas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReplicas` <a name="putReplicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.putReplicas"></a>

```typescript
public putReplicas(value: IResolvable | SecretManagerSecretReplicationUserManagedReplicas[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.putReplicas.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.replicas">replicas</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList">SecretManagerSecretReplicationUserManagedReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.replicasInput">replicasInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.replicas"></a>

```typescript
public readonly replicas: SecretManagerSecretReplicationUserManagedReplicasList;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList">SecretManagerSecretReplicationUserManagedReplicasList</a>

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.replicasInput"></a>

```typescript
public readonly replicasInput: IResolvable | SecretManagerSecretReplicationUserManagedReplicas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretManagerSecretReplicationUserManaged;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a>

---


### SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference <a name="SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

new secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

---


### SecretManagerSecretReplicationUserManagedReplicasList <a name="SecretManagerSecretReplicationUserManagedReplicasList" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

new secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.get"></a>

```typescript
public get(index: number): SecretManagerSecretReplicationUserManagedReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecretManagerSecretReplicationUserManagedReplicas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>[]

---


### SecretManagerSecretReplicationUserManagedReplicasOutputReference <a name="SecretManagerSecretReplicationUserManagedReplicasOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

new secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.putCustomerManagedEncryption">putCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resetCustomerManagedEncryption">resetCustomerManagedEncryption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerManagedEncryption` <a name="putCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.putCustomerManagedEncryption"></a>

```typescript
public putCustomerManagedEncryption(value: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.putCustomerManagedEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

---

##### `resetCustomerManagedEncryption` <a name="resetCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resetCustomerManagedEncryption"></a>

```typescript
public resetCustomerManagedEncryption(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption">customerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryptionInput">customerManagedEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedEncryption`<sup>Required</sup> <a name="customerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption"></a>

```typescript
public readonly customerManagedEncryption: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference</a>

---

##### `customerManagedEncryptionInput`<sup>Optional</sup> <a name="customerManagedEncryptionInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryptionInput"></a>

```typescript
public readonly customerManagedEncryptionInput: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecretManagerSecretReplicationUserManagedReplicas;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>

---


### SecretManagerSecretRotationOutputReference <a name="SecretManagerSecretRotationOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

new secretManagerSecret.SecretManagerSecretRotationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resetNextRotationTime">resetNextRotationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNextRotationTime` <a name="resetNextRotationTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resetNextRotationTime"></a>

```typescript
public resetNextRotationTime(): void
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resetRotationPeriod"></a>

```typescript
public resetRotationPeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.nextRotationTimeInput">nextRotationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.nextRotationTime">nextRotationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.rotationPeriod">rotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nextRotationTimeInput`<sup>Optional</sup> <a name="nextRotationTimeInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.nextRotationTimeInput"></a>

```typescript
public readonly nextRotationTimeInput: string;
```

- *Type:* string

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.rotationPeriodInput"></a>

```typescript
public readonly rotationPeriodInput: string;
```

- *Type:* string

---

##### `nextRotationTime`<sup>Required</sup> <a name="nextRotationTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.nextRotationTime"></a>

```typescript
public readonly nextRotationTime: string;
```

- *Type:* string

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretManagerSecretRotation;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a>

---


### SecretManagerSecretTimeoutsOutputReference <a name="SecretManagerSecretTimeoutsOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

new secretManagerSecret.SecretManagerSecretTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecretManagerSecretTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a>

---


### SecretManagerSecretTopicsList <a name="SecretManagerSecretTopicsList" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

new secretManagerSecret.SecretManagerSecretTopicsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.get"></a>

```typescript
public get(index: number): SecretManagerSecretTopicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecretManagerSecretTopics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>[]

---


### SecretManagerSecretTopicsOutputReference <a name="SecretManagerSecretTopicsOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer"></a>

```typescript
import { secretManagerSecret } from '@cdktf/provider-google'

new secretManagerSecret.SecretManagerSecretTopicsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecretManagerSecretTopics;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>

---



